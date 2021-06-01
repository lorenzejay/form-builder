import { createContext } from "react";
import { UserContextType } from "../../utils/types";

const contextDefaultValue: UserContextType = {
  user: null,
  setUser: () => {},
  session: null,
  setSession: () => {},
};

export const UserContext = createContext(contextDefaultValue);
