if(!process.env.NODE_ENV) {
  require("dotenv").config({ path: [".env"] });
}

export const env = {
  PORT: process.env.PORT || "3000",
  NODE_ENV: process.env.NODE_ENV || "development"
}