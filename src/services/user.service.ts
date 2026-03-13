import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/prisma';
import securePassword from '../util/password';


export const createUserService = async (
    email: string,
    password: string,
    passwordConfirm: string
) => {
    if (!email || !password || !passwordConfirm) {
        throw new Error("All fields are required");
    };

    if (password !== passwordConfirm) {
        throw new Error("Passwords do not match");
    };
    // check if password is secure
    securePassword(password);

    const existingUser = await getUserEmailService(email);
    if (existingUser) {
        throw new Error("Try a different email");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.users.create({
        data: { email: email.toLowerCase().trim(), password: hashedPassword }
    });
};

// find if user email already exists
export const getUserEmailService = async (email: string) => {
    return prisma.users.findUnique({ where: { email: email.toLowerCase().trim() } });
};

export const getUserByIdService = async (user_id: number) => {
  return prisma.users.findUnique({ where: { user_id } });
};


// forgot password
// generate a token to reset password
export const generatePasswordResetToken = (user_id: number) => {
    // Token expires in 15 mins
    return jwt.sign({ user_id, purpose: 'password_reset' },
        process.env.JWT_SECRET as string,
        { expiresIn: '15m' });
};

// validated password reset
export const resetPasswordService = async (
    user_id: number,
    newPassword: string) => {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    return await prisma.users.update({
        where: { user_id },
        data: { password: hashedPassword },
    });
};

export default {
    createUserService,
    getUserEmailService,getUserByIdService,
    generatePasswordResetToken,
    resetPasswordService
};