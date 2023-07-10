import { createErrorMessage } from "../error.js";
import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id, 
        {
        $set: req.body,
      },
      { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(
      createErrorMessage(403, "Permission denied, update only your account")
    );
  }
};
export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id){
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted");
    } catch (error) {
      next(error);
    }
  } else {
    return next(createErrorMessage(403, "You can only delete your account"))
  }
};
export const getUser = (req, res, next) => {};
export const like = (req, res, next) => {};
export const dislike = (req, res, next) => {};
