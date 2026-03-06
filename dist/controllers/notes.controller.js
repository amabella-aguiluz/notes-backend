import { searchNotesService, getNotesService, createNoteService, updateNoteService, deleteNoteService, getNoteByIdService } from '../services/notes.service.js';
import { sort_fields } from "../types/sortBy.js";
import { toNumber } from "../util/toNumber.js";
// create note
export const createNoteController = async (req, res) => {
    try {
        const user_id = req.user_id;
        const { title, description } = req.body;
        const note = await createNoteService(user_id, title, description);
        res.status(201).json(note);
        console.log(`created note ${note.note_id} for user ${note.user_id}`);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// get user's notes
export const getNotesController = async (req, res) => {
    try {
        const rawSortBy = req.query.sortBy;
        const rawOrder = req.query.order;
        // validate sort field
        const sort = typeof rawSortBy === "string" && sort_fields.includes(rawSortBy)
            ? rawSortBy
            : "updated_at";
        // validate order
        const ord = rawOrder === "asc" ? "asc" : "desc";
        const notes = await getNotesService(req.user_id, sort, ord);
        res.json(notes);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// search notes by {query}
// {query} = word in search bar
// note: only searches the title
export const searchNotesController = async (req, res) => {
    try {
        const user_id = req.user_id;
        const { query } = req.query;
        if (typeof query !== 'string')
            return res.status(400).json({ error: "Query must be a string" });
        if (!query)
            return res.status(400).json({ error: "Query is required" });
        const notes = await searchNotesService(user_id, query);
        res.json(notes);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// update note
export const updateNoteController = async (req, res) => {
    try {
        const note_id = toNumber(req.params.note_id);
        const data = req.body;
        const user_id = req.user_id;
        const note = await getNoteByIdService(user_id, note_id);
        if (!note)
            return res.status(404).json({ error: 'Note not found' });
        if (note.user_id !== user_id)
            return res.status(403).json({ error: 'Unauthorized' });
        await updateNoteService(note_id, data);
        res.json({ message: "Note updated" });
        console.log(`Updated note ${note_id}`);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// delete note
export const deleteNoteController = async (req, res) => {
    try {
        const note_id = toNumber(req.params.note_id);
        const user_id = req.user_id;
        const note = await getNoteByIdService(user_id, note_id);
        if (!note)
            return res.status(404).json({ error: "Note not found" });
        if (note.user_id !== user_id)
            return res.status(403).json({ error: "Unauthorized" });
        await deleteNoteService(user_id, note_id);
        res.json({ message: "Note deleted" });
        console.log(`Deleted note ${note_id}`);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
export default {
    createNoteController, searchNotesController, getNotesController, updateNoteController, deleteNoteController
};
//# sourceMappingURL=notes.controller.js.map