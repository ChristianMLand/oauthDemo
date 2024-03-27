import { Router } from 'express';
import { getLoggedUser, googleLogin, githubLogin, logout } from '../controllers/auth.controller.js';
import { authenticate } from '../config/middleware.config.js';

const router = Router();

router.route("/")
    .get(authenticate, getLoggedUser)
    .delete(logout)

router.route("/google")
    .get(googleLogin)

router.route("/github")
    .get(githubLogin)

export default router;