export declare const createUserService: (email: string, password: string, passwordConfirm: string) => Promise<{
    email: string | null;
    password: string | null;
    created_at: Date;
    updated_at: Date;
    user_id: number;
}>;
export declare const getUserEmailService: (email: string) => Promise<{
    email: string | null;
    password: string | null;
    created_at: Date;
    updated_at: Date;
    user_id: number;
} | null>;
export declare const generatePasswordResetToken: (user_id: number) => string;
export declare const resetPasswordService: (user_id: number, newPassword: string) => Promise<{
    email: string | null;
    password: string | null;
    created_at: Date;
    updated_at: Date;
    user_id: number;
}>;
declare const _default: {
    createUserService: (email: string, password: string, passwordConfirm: string) => Promise<{
        email: string | null;
        password: string | null;
        created_at: Date;
        updated_at: Date;
        user_id: number;
    }>;
    getUserEmailService: (email: string) => Promise<{
        email: string | null;
        password: string | null;
        created_at: Date;
        updated_at: Date;
        user_id: number;
    } | null>;
    generatePasswordResetToken: (user_id: number) => string;
    resetPasswordService: (user_id: number, newPassword: string) => Promise<{
        email: string | null;
        password: string | null;
        created_at: Date;
        updated_at: Date;
        user_id: number;
    }>;
};
export default _default;
//# sourceMappingURL=user.service.d.ts.map