import { Router } from 'express';
import { getLoggedUser, googleLogin, githubLogin, logout } from '../controllers/auth.controller.js';

const router = Router();

router.route("/")
    .get(getLoggedUser)
    .delete(logout)

router.route("/google")
    .get(googleLogin)

router.route("/github")
    .get(githubLogin)

export default router;