import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GithubStrategy } from 'passport-github2';

import passport from 'passport';
import User from '../models/user.model.js';
import dotenv from 'dotenv';
dotenv.config();

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google"
    }, async function verify(accessToken, refreshToken, profile, cb) {
        let user = await User.findOne({ oauthId: profile.id });
        user ??= await User.create({ oauthId: profile.id, username: profile.displayName });
        return cb(null, user);
    }
));

passport.use(new GithubStrategy(
    {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "/api/auth/github"
    }, async function verify(accessToken, refreshToken, profile, cb) {
        let user = await User.findOne({ oauthId: profile.id });
        user ??= await User.create({ oauthId: profile.id, username: profile.displayName });
        return cb(null, user);
    }
));

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { _id: user._id })
    });
});

passport.deserializeUser(function (serializedUser, cb) {
    process.nextTick(async function () {
        const user = await User.findById(serializedUser._id);
        return cb(null, user);
    });
});

export default passport;