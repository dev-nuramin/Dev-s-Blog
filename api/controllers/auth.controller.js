import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { customError } from "../utils/error.js";
/**
 * @DESC create users data
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const createUser = async (req, res, next) => {
  const { name, username, email, password } = req.body;

  // validation form
  if (
    !name ||
    !username ||
    !email ||
    !password ||
    name === "" ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    res.status(401).json({ message: "All fields are required" });
    return;
  }

  const checkUser = await User.findOne({ email });
  const checkUserName = await User.findOne({ username });

  // check email
  if (checkUser) {
    res.status(400).json({message:  "This email already in our record"})
    return;
  }
  // check username
  if (checkUserName) {
    res.status(400).json({message:  "Try unique username"})
    return;
  }
  // password hash
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = User({
    username,
    name,
    password: hashPassword,
    email,
  });

  if (!checkUser) {
    try {
      await newUser.save();
      res.status(200).json({ user: newUser, message: "Signup successful" });
    } catch (error) {
      next(error);
    }
  }
};
/**
 * @DESC Get all users data
 * @ROUTE /api/v1/auth
 * @method GET
 * @access public
 */
export const getAllUser = async (req, res) => {
  const users = await User.find();

  if (users.length === 0) {
    return res.status(404).json({ message: "User data not found" });
  }

  res.status(200).json(users);
};
