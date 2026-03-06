/**
 * Wraps an async controller to be compatible with Express.
 * Automatically types req as your custom request type (e.g., AuthRequest)
 * and catches errors for next().
 */
export const wrapAsync = (fn) => {
    return (req, res, next) => {
        // cast Request to your custom type
        return fn(req, res, next).catch(next);
    };
};
//# sourceMappingURL=route.js.map