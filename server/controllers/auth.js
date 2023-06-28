import mongoose from 'mongoose';
import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import { createErrorMessage } from '../error.js';

export const signup = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash })

        await newUser.save();
        res.status(200).send("User created successfully");

    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        // find a matching user email
        const user = await User.findOne({ email: req.body.email });
        if(!user) return next(createErrorMessage(404, "User not found"));

        // compare password
        const isValidPassword = await bcrypt.compare(req.body.password, user.password)

        if(!isValidPassword) return next(createErrorMessage(400, "Invalid credentials"));

    } catch (error) {
        next(error);
    }
};