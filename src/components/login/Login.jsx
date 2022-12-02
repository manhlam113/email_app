import React, { useState } from "react";
import logoBlack from "../../assets/images/connect-logo-black.svg";
import userData from "../../data/users.json";
import { useNavigate } from "react-router-dom";
const Login = ({ email, setEmail, password, setPassword, setUser }) => {
  const [error, setError] = useState(false);
  console.log(userData);
  const navigator = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (userData[0].email === email && userData[0].password === password) {
      setUser(true);
      navigator("/main/email");
    } else {
      setError("wrong password");
      setUser(false);
      navigator("/login");
    }
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="w-full bg-[#0e1f33] min-h-screen">
      <div className="container mx-auto relative min-h-screen">
        <div
          style={{ width: "30rem", height: "auto" }}
          className="rounded-lg mx-auto overflow-hidden absolute bg-white py-16 text-black px-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <div className="grid lg:grid-cols-12 ">
            <div className="lg:col-span-12 ">
              <div className="w-full text-center flex flex-col items-center gap-3">
                <div className="w-full px-24">
                  <img src={logoBlack} alt="" className="max-w-full" />
                </div>
                <div>
                  <p className="text-xl text-gray-700 font-light">
                    Login to check your email!!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 ">
            <div className="lg:col-span-12 ">
              <form action="" onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-12 ">
                    <div>
                      <label className="block text-xl mb-2 " for="email">
                        Email
                      </label>
                      <select
                        className="w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md false"
                        id="email"
                        name="email"
                        onChange={(e) => handleEmail(e)}
                      >
                        <option value="">------Choose an email</option>
                        <option value="test1@test.com">test1@test.com</option>
                      </select>
                    </div>
                  </div>
                  <div className="lg:col-span-12">
                    <div>
                      <label className="block text-xl mb-2 " for="password">
                        Password
                      </label>
                      <input
                        className="w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md  false"
                        id="password"
                        name="password"
                        type="password"
                        defaultValue="test@test"
                        onChange={(e) => handlePassword(e)}
                      ></input>
                    </div>
                  </div>
                  <span
                    className={` text-center lg:col-span-12 error ${
                      error ? "opacity-1" : "opacity-0"
                    } text-red-500`}
                  >
                    Wrong password !!!
                  </span>
                  <div className="lg:col-span-12 mt-3">
                    <button
                      className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
      bg-gray-500 text-white hover:bg-gray-400 false w-full bg-darkblue-800"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
