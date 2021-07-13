import { config } from "dotenv";

config({
    path: process.env.NODE_ENV!.trim() === 'dev' ? '.env.test' : '.env'
});

//CREATE CONSTS WITH VALUE FROM .ENV AND EXPORT

export {};