    // src/util/jwt.ts
    import jwt from 'jsonwebtoken';

    export const generateToken = (userId: number): string => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign({ user_id: userId }, secret, { expiresIn: '1h' });
    };