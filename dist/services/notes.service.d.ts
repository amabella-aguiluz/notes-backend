import { sortBy } from "../types/sortBy.js";
export declare const createNoteService: (user_id: number, title: string, description: string) => Promise<{
    created_at: Date;
    updated_at: Date;
    user_id: number | null;
    title: string | null;
    description: string | null;
    note_id: number;
}>;
export declare const getUserNoteService: (user_id: number) => Promise<{
    created_at: Date;
    updated_at: Date;
    user_id: number | null;
    title: string | null;
    description: string | null;
    note_id: number;
}[]>;
export declare const getNotesService: (user_id: number, sortBy: sortBy, order?: "asc" | "desc") => Promise<{
    created_at: Date;
    updated_at: Date;
    user_id: number | null;
    title: string | null;
    description: string | null;
    note_id: number;
}[]>;
export declare const searchNotesService: (user_id: number, query: string) => Promise<{
    created_at: Date;
    updated_at: Date;
    user_id: number | null;
    title: string | null;
    description: string | null;
    note_id: number;
}[]>;
export declare const updateNoteService: (note_id: number, data: Partial<{
    title: string;
    description: string;
}>) => Promise<{
    created_at: Date;
    updated_at: Date;
    user_id: number | null;
    title: string | null;
    description: string | null;
    note_id: number;
}>;
export declare const deleteNoteService: (user_id: number, note_id: number) => Promise<{
    created_at: Date;
    updated_at: Date;
    user_id: number | null;
    title: string | null;
    description: string | null;
    note_id: number;
} | null>;
export declare const getNoteByIdService: (user_id: number, note_id: number) => Promise<{
    created_at: Date;
    updated_at: Date;
    user_id: number | null;
    title: string | null;
    description: string | null;
    note_id: number;
} | null>;
declare const _default: {
    getNotesService: (user_id: number, sortBy: sortBy, order?: "asc" | "desc") => Promise<{
        created_at: Date;
        updated_at: Date;
        user_id: number | null;
        title: string | null;
        description: string | null;
        note_id: number;
    }[]>;
    searchNotesService: (user_id: number, query: string) => Promise<{
        created_at: Date;
        updated_at: Date;
        user_id: number | null;
        title: string | null;
        description: string | null;
        note_id: number;
    }[]>;
    createNoteService: (user_id: number, title: string, description: string) => Promise<{
        created_at: Date;
        updated_at: Date;
        user_id: number | null;
        title: string | null;
        description: string | null;
        note_id: number;
    }>;
    updateNoteService: (note_id: number, data: Partial<{
        title: string;
        description: string;
    }>) => Promise<{
        created_at: Date;
        updated_at: Date;
        user_id: number | null;
        title: string | null;
        description: string | null;
        note_id: number;
    }>;
    deleteNoteService: (user_id: number, note_id: number) => Promise<{
        created_at: Date;
        updated_at: Date;
        user_id: number | null;
        title: string | null;
        description: string | null;
        note_id: number;
    } | null>;
    getNoteByIdService: (user_id: number, note_id: number) => Promise<{
        created_at: Date;
        updated_at: Date;
        user_id: number | null;
        title: string | null;
        description: string | null;
        note_id: number;
    } | null>;
};
export default _default;
//# sourceMappingURL=notes.service.d.ts.map