import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();

const getLoggedUser = (req, res) => res.json(req.user);

const googleLogin = passport.authenticate("google", { scope: ["profile"], successRedirect: `${process.env.CLIENT_URI}/dashboard` })

const githubLogin = passport.authenticate("github", { scope: ["read:user"], successRedirect: `${process.env.CLIENT_URI}/dashboard` })

const logout = async (req, res) => req.logout(() => res.json({ message: "success" }));

export { getLoggedUser, googleLogin, githubLogin, logout };