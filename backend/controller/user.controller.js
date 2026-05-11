import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async () => {
    try {
       
        const user = await prisma.user.create({
            data: {
                name: 'John Doe',
                email: 'goodness@yahoo.com'
            }
        });
        // res.status(201).json(user);
        console.log('User created:', user);
    } catch (error) {
        console.error(error);
    }

}


export const getUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        // res.status(200).json(users);
        console.log('Users:', users);
    } catch (error) {
        console.error(error);
    }
}

// createUser();


