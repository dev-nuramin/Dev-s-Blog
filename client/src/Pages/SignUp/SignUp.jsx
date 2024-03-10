import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
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
          <form className="flex flex-col gap-4 shadow-sm">
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Your username"
                id="username"
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="example@gmail.com" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign up
            </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>
              Alredy have an account?
            </span>
            <Link to='/sign-in' className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
