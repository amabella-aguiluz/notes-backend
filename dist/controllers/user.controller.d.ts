import { Response } from 'express';
export declare const registerController: (req: Request, res: Response) => Promise<void>;
export declare const loginController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const forgotPasswordController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const resetPasswordController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const _default: {
    registerController: (req: Request, res: Response) => Promise<void>;
    loginController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    forgotPasswordController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    resetPasswordController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default _default;
//# sourceMappingURL=user.controller.d.ts.map