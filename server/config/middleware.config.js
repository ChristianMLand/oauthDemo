// authenticate middleware is used for any routes we want to ensure the user is logged in for
export const authenticate = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ verified: false });
    }
    next();
};