import { Request, Response, NextFunction } from 'express';
export interface AuthRequest extends Request {
    user_id: number;
}
export declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default authMiddleware;
export type AuthHandler = (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=auth.d.ts.map