import User from "../models/user.models.js";



/**
 * @DESC create users data
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const createUser = async(req, res) => {
  const {name, userName, email, password} = req.body;

  if(!name || !userName || !email || !password || name === '' || userName === '' || email === '' || password === ''){
    res.status(401).json({msg: "All fields are required"})
  }

  const newUser = User({
    userName,
    name, 
    password,
    email
  })

  try {
    await newUser.save()
    res.status(200).json({user: newUser, msg: "User create successful"})
  } catch (error) {
    
  }
}
/**
 * @DESC Get all users data
 * @ROUTE /api/v1/auth
 * @method GET
 * @access public
 */
export const getAllUser = async(req, res) => {

    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "User data not found" });
    }
  
    res.status(200).json(users);
}