
import { Button, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignupSlice } from "../../redux/Features/authApiSlice";
import { createToast } from "../../utils/createToast";
import { setMessageEmpty } from "../../redux/Features/authSlice";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, message } = useSelector((state) => state.newUser);
  // geting data from input fields
  const [input, setInput] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  //handle input change
  const handleInputSubmit = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // submit form
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    dispatch(userSignupSlice(input));
    setInput("");
    navigate('/login')
  };

  useEffect(() => {
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
    if (message) {
      createToast(message, 'success');
      dispatch(setMessageEmpty());
    }
  }, [error, message]);
  return (
    <div className="min-h-screen mt-20">
      <div className="flex mx-auto mt-5 p-3 max-w-3xl flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark: text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Dev's
            </span>
            <span className="text-black">Blogs</span>
          </Link>
          <p className="text-sm mt-5 font-bold">
            This is demo project, If you need more than click our project on top
            menu.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form
            className="flex flex-col gap-4 shadow-sm"
            onSubmit={handleSubmitForm}
          >
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Your username"
                name="username"
                onChange={handleInputSubmit}
              />
            </div>
            <div>
              <Label value="Your name" />
              <TextInput
                type="text"
                placeholder="Your name"
                name="name"
                onChange={handleInputSubmit}
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="text"
                placeholder="example@gmail.com"
                name="email"
                onChange={handleInputSubmit}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="text"
                placeholder="Password"
                name="password"
                onChange={handleInputSubmit}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign up
            </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Alredy have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
