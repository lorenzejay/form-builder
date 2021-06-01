import { AuthSession } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { User } from "../../utils/types";
import { supabase } from "../../utils/supabaseClient";
import { UserContext } from "./userContext";

type UserAuthProviderType = {
  children: React.ReactNode;
};

const UserAuthProvider = ({ children }: UserAuthProviderType) => {
  const [user, setUser] = useState<User | null>({} as User);
  const [session, setSession] = useState<AuthSession | null>({} as AuthSession);

  const getSession = async () => {
    const session = await supabase.auth.session();
    console.log(session);
    if (session) {
      setSession(session);
    } else {
      setSession(null);
    }
  };
  useEffect(() => {
    getSession();
  }, []);

  useEffect(() => {
    const userFromLocalStorage = window.localStorage.getItem("userAuth");
    if (userFromLocalStorage) {
      setUser(JSON.parse(userFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    const userFromLocalStorage = window.localStorage.getItem("userAuth");
    if (!userFromLocalStorage) {
      window.localStorage.setItem("userAuth", JSON.stringify(user));
    }
    window.localStorage.setItem("userAuth", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, session, setSession }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserAuthProvider;
