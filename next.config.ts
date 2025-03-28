import type { NextConfig } from "next";
require("dotenv").config();

const nextConfig: NextConfig = {
  env:{
    SERVER:process.env.SERVER,
  }
};

export default nextConfig;
