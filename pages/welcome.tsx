import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { UserContext } from "../context/UserAuth/userContext";

const Welcome = () => {
  const router = useRouter();
  const { user, session } = useContext(UserContext);
  useEffect(() => {
    if (session === null || !session) {
      router.push("/signin");
    }
  }, []);

  return (
    <Layout mainBgColor="">
      <h3>Confirm your email to get started</h3>
      {user && <p>welcome {user.email}</p>}
    </Layout>
  );
};

export default Welcome;
