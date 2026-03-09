import { PrismaClient, Prisma } from '@prisma/client';
import { prisma } from '../config/prisma';
import { sort_fields, order, sortBy, orderBy } from "../types/sortBy";


// create notes
export const createNoteService = async (
  user_id: number,
  title: string,
  description: string) => {
  return prisma.notes.create({
    data: { user_id, title, description },
  });
};

// search note titles by {query}
// {query} = word in search bar
export const searchNotesService = async (
  user_id: number,
  query: string,
  sortBy: sortBy = "updated_at",
  order: orderBy = "desc"
) => {
  return await prisma.notes.findMany({
    where: {
      user_id,
      ...(query ? { title: { contains: query } } : {}), 
      // only filter by title if query exists
    },
    orderBy: {
      [sortBy]: order,
    },
  });
};

// update notes
export const updateNoteService = async (
  note_id: number,
  data: Partial<{ title: string, description: string }>) => {
  return prisma.notes.update({
    where: { note_id },
    data: { ...data, updated_at: new Date() }
  });
};

//delete notes
export const deleteNoteService = async (
  note_id: number) => {
  return await prisma.notes.delete({
    where: { note_id },
  });
};

//get note by id
export const getNoteByIdService = async (
  user_id: number,
  note_id: number) => {
  return await prisma.notes.findFirst({
    where: { note_id, user_id },
  });
};

export default {searchNotesService, createNoteService, updateNoteService, deleteNoteService, getNoteByIdService };
