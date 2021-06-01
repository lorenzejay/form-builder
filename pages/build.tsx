import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { UserContext } from "../context/UserAuth/userContext";

const Build = () => {
  const router = useRouter();
  const { session } = useContext(UserContext);

  useEffect(() => {
    if (!session) {
      router.push("/signin");
    }
  }, [session]);
  return (
    <Layout mainBgColor="">
      <h3>Build Page</h3>
    </Layout>
  );
};

export default Build;
