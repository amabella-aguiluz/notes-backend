import { Request, Response } from "express";
export declare const createNoteController: (req: Request, res: Response) => Promise<void>;
export declare const getNotesController: (req: Request, res: Response) => Promise<void>;
export declare const searchNotesController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateNoteController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteNoteController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const _default: {
    createNoteController: (req: Request, res: Response) => Promise<void>;
    searchNotesController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getNotesController: (req: Request, res: Response) => Promise<void>;
    updateNoteController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteNoteController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default _default;
//# sourceMappingURL=notes.controller.d.ts.map