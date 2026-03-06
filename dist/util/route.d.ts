import { Request, Response, NextFunction, RequestHandler } from "express";
/**
 * Wraps an async controller to be compatible with Express.
 * Automatically types req as your custom request type (e.g., AuthRequest)
 * and catches errors for next().
 */
export declare const wrapAsync: <Req extends Request = Request>(fn: (req: Req, res: Response, next?: NextFunction) => Promise<any>) => RequestHandler;
//# sourceMappingURL=route.d.ts.map