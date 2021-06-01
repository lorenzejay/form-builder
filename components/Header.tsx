import { AuthSession } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserAuth/userContext";
import { supabase } from "../utils/supabaseClient";
const Header = () => {
  const router = useRouter();
  const { user, setUser, session, setSession } = useContext(UserContext);

  useEffect(() => {
    if (user?.role === "authenticated") {
      console.log("supabase.auth.user()", supabase.auth.user());
    }
  }, []);

  const handleSignOut = async () => {
    // const res = await fetch("/api/logoutUser");
    const { error } = await supabase.auth.signOut();
    if (error) return console.log(error);
    setUser(null);
    setSession(null);

    router.push("/signin");
  };

  return (
    <nav className="px-7 py-5 lg:px-16 flex justify-between bg-red-400">
      <h3 className="text-3xl">
        <span className="font-bold">Form Builder.io</span>
      </h3>
      {!session && (
        <ul className="flex items-center w-48 justify-around">
          <li>
            <Link href="/signin">Login</Link>
          </li>
          <li className="p-2 bg-blue-500 text-white rounded-md">
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      )}
      {session && (
        <ul className="flex items-center w-48 justify-around">
          <li>
            <button onClick={handleSignOut}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
