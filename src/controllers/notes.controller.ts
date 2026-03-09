import { searchNotesService, createNoteService, updateNoteService, deleteNoteService, getNoteByIdService } from '../services/notes.service';
import { Request, Response } from "express";

import { sort_fields, order, sortBy, orderBy } from "../types/sortBy";
import { AuthRequest } from "../middlewares/auth";
import { toNumber } from "../util/toNumber";


// create note
export const createNoteController = async (req: Request, res: Response) => {
  const user_id = (req as AuthRequest).user_id;
  if (!user_id) return res.status(401).json({ error: "Unauthorized" });

  const { title, description } = req.body;
  try {
    const note = await createNoteService(user_id, title, description);
    res.status(201).json(note);
    console.log(`created note ${note.note_id} for user ${note.user_id}`);
  }
  catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};


// search notes by {query}
// {query} = word in search bar
// note: only searches the title
export const searchNotesController = async (req: Request, res: Response) => {
  const user_id = (req as AuthRequest).user_id;
  if (!user_id) return res.status(401).json({ error: "Unauthorized" });

  let query = req.query.query as string | undefined;
  if (typeof query !== "string") query = ""; // if missing, default to empty string

  const rawSortBy = req.query.sortBy as string;
  const rawOrder = req.query.order as string;

  const sort: sortBy =
    typeof rawSortBy === "string" && sort_fields.includes(rawSortBy as sortBy)
      ? (rawSortBy as sortBy)
      : "updated_at";

  const ord: orderBy = rawOrder === "asc" ? "asc" : "desc";

  try {
    const notes = await searchNotesService(user_id, query, sort, ord);
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// update note
export const updateNoteController = async (req: Request, res: Response) => {
  const user_id = (req as AuthRequest).user_id;
  if (!user_id) return res.status(401).json({ error: "Unauthorized" });

  const note_id = toNumber(req.params.note_id);
  if (!note_id) return res.status(400).json({ error: "Invalid note ID" });

  const data = req.body;
  try {
    const note = await getNoteByIdService(user_id, note_id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    if (note.user_id !== user_id) return res.status(403).json({ error: 'Unauthorized' });

    await updateNoteService(note_id, data);
    res.json({ message: "Note updated" });
    console.log(`Updated note ${note_id}`);
  }
  catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// delete note
export const deleteNoteController = async (req: Request, res: Response) => {
  const note_id = toNumber(req.params.note_id);
  if (!note_id) return res.status(400).json({ error: "Invalid note ID" });

  const user_id = (req as AuthRequest).user_id
  if (!user_id) return res.status(401).json({ error: "Unauthorized" });

  try {
    const note = await getNoteByIdService(user_id, note_id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    if (note.user_id !== user_id) return res.status(403).json({ error: "Unauthorized" });

    await deleteNoteService(note_id);
    res.json({ message: "Note deleted" });
    console.log(`Deleted note ${note_id}`);
  } catch (err: unknown) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// get note by id
export const getNoteByIdController = async (req: Request, res: Response) => {
  const user_id = (req as AuthRequest).user_id;
  if (!user_id) return res.status(401).json({ error: "Unauthorized" });

  const note_id = toNumber(req.params.note_id);
  if (!note_id) return res.status(400).json({ error: "Invalid note ID" });

  try {
    const note = await getNoteByIdService(user_id, note_id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    if (note.user_id !== user_id) return res.status(403).json({ error: "Unauthorized" });

    res.json(note);
  } catch (err: unknown) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export default {
  createNoteController, searchNotesController, updateNoteController, deleteNoteController
};