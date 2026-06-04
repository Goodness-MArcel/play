import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const createUserService  = async (userData)=>{
    console.log("Creating user with data:", userData);
    try {
       console.log(userData);
    } catch (error) {
        console.error(error)
    }
}