import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

//sign in
export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      "dfahdirieirhfdajf",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ user: user, token });
  } catch (error) {
    next(errorHandler(500, "Something went wrong"));
  }
};

//sign up
export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "dfahdirieirhfdajf",
      { expiresIn: "1h" }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const google = async (req, res, next) => {
  const { name, email, photo } = req.body;

  try {
    let user = await User.findOne({ email: email });

    if (user) {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        "dfahdirieirhfdajf", // Consider using environment variables for secrets
        { expiresIn: "1h" }
      );

      res.status(200).json({
        success: true,
        message: "Logged in successfully!",
        user,
        token,
      });
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);

      const hashedPassword = await bcrypt.hash(generatedPassword, 12);

      user = await User.create({
        username: name.split(" ").join("").toLowerCase(),
        email,
        profilePicture: photo,
        password: hashedPassword,
      });

      const token = jwt.sign(
        { email: user.email, id: user._id },
        "dfahdirieirhfdajf", // Consider using environment variables for secrets
        { expiresIn: "1h" }
      );

      res.status(200).json({
        success: true,
        message: "Login successfully",
        user,
        token,
      });
    }
  } catch (error) {
    next(errorHandler(500, "Something went wrong"));
  }
};
