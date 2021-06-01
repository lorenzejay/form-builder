import React, { useContext, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import { UserContext } from "../context/UserAuth/userContext";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { setUser, setSession } = useContext(UserContext);

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || password === "" || username === "")
      return setError("All fields must be filled before submitting.");
    if (password !== confirmPassword) return setError("The passwords don't match.");

    const { user, session, error } = await supabase.auth.signUp({ email, password });

    if (error) return window.alert(error.message);
    if (user) {
      await supabase.from("users").insert([{ user_id: user.id, email, username }]);
      setUser(user);
    }
    if (session) {
      setSession(session);
    }
    if (user && session) {
      setError("");
      router.push("/forms");
    }
  };
  return (
    <Layout mainBgColor="">
      <form className="w-full flex flex-col justify-center" onSubmit={registerUser}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <h1 className="text-3xl text-center">Create powerful forms today.</h1>
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
            username === "" ? "focus:border-red-500" : "focus:border-green-400"
          }`}
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <input
          className={`px-3 py-1 border-2 my-3 outline-none transition-all duration-500 ease-out rounded-md lg:w-1/2 lg:mx-auto ${
            confirmPassword !== password ? "focus:border-red-500" : "focus:border-green-400"
          }`}
          placeholder="confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white rounded-md px-5 py-1 lg:w-1/2 lg:mx-auto"
        >
          Confirm
        </button>
      </form>
    </Layout>
  );
};

export default Signup;
