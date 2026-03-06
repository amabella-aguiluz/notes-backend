import { prisma } from '../config/prisma.js';
// create notes
export const createNoteService = async (user_id, title, description) => {
    return prisma.notes.create({
        data: { user_id, title, description },
    });
};
// get user notes
export const getUserNoteService = async (user_id) => {
    return prisma.notes.findMany({ where: { user_id } });
};
// update notes
export const getNotesService = async (user_id, sortBy, order = "asc") => {
    //   const allowedSortFields = ["title", "createdAt", "updatedAt"];
    //   if (!allowedSortFields.includes(sortBy)) {
    //     throw new Error("Invalid sort field");
    //   }
    return await prisma.notes.findMany({
        where: { user_id },
        orderBy: { [sortBy]: order },
    });
};
// search note titles by {query}
// {query} = word in search bar
export const searchNotesService = async (user_id, query) => {
    //   if (!query) {
    //     throw new Error("Search query is required");
    //   }
    return await prisma.notes.findMany({
        where: {
            user_id,
            OR: [
                { title: { contains: query } }
            ],
        },
    });
};
// update notes
export const updateNoteService = async (note_id, data) => {
    return prisma.notes.update({
        where: { note_id },
        data: { ...data, updated_at: new Date() }
    });
};
//delete notes
export const deleteNoteService = async (user_id, note_id) => {
    return await prisma.notes.findFirst({
        where: { note_id, user_id },
    });
};
//get note by id
export const getNoteByIdService = async (user_id, note_id) => {
    return await prisma.notes.findFirst({
        where: { note_id, user_id },
    });
};
export default { getNotesService, searchNotesService, createNoteService, updateNoteService, deleteNoteService, getNoteByIdService };
//# sourceMappingURL=notes.service.js.map