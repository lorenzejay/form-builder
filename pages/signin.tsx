import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Layout from "../components/Layout";
import { UserContext } from "../context/UserAuth/userContext";
import { supabase } from "../utils/supabaseClient";

const Signin = () => {
  const { setUser, setSession, user, session } = useContext(UserContext);

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(user);
  useEffect(() => {
    if (session || user) {
      router.push("/forms");
    }
  }, []);

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || password === "")
      return setError("All fields must be filled before submitting.");

    const { user: loggedInUser, session, error } = await supabase.auth.signIn({ email, password });

    if (error) return console.log("error", error);
    console.log(session);
    if (loggedInUser) {
      setUser(loggedInUser);
    }
    if (session !== null) {
      setSession(session);
    }
    router.push("/forms");
  };

  return (
    <Layout mainBgColor="">
      <form className="w-full flex flex-col justify-center" onSubmit={loginUser}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <h1 className="text-3xl text-center">Login</h1>
        <input
          className={`px-3 py-1 border-2 my-3 outline-none transition-all duration-500 ease-out rounded-md lg:w-1/2 lg:mx-auto ${
            email === "" ? "focus:border-red-500" : "focus:border-green-400"
          }`}
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className={`px-3 py-1 border-2 my-3 outline-none transition-all duration-500 ease-out rounded-md lg:w-1/2 lg:mx-auto ${
            password === "" ? "focus:border-red-500" : "focus:border-green-400"
          }`}
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-green-500 text-white rounded-md px-5 py-1 lg:w-1/2 lg:mx-auto"
        >
          Login
        </button>
      </form>
    </Layout>
  );
};

export default Signin;
