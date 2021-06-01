const dev = process.env.NODE_ENV !== "production";

//change production url when deployed else this is the base path
export const basePath = dev ? "http://localhost:3000" : process.env.PRODUCTION_URL;
