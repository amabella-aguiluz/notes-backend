import jwt from 'jsonwebtoken';
// creates a jwt token to verify a user
export const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    // no jwt token
    if (!token)
        return res.status(401).json({ error: 'No token provided' });
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET not defined');
        }
        const decoded = jwt.verify(token, secret);
        // Make sure userId exists in token
        if (!decoded.user_id) {
            return res.status(401).json({ error: 'Invalid token payload' });
        }
        req.user_id = decoded.user_id;
        next();
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
export default authMiddleware;
//# sourceMappingURL=auth.js.map