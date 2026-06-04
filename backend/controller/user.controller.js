import {createUserService} from '../services/user.service.js'


export const createUser = async(req, res)=>{
    try{
        const user = await createUserService(req.body);
        res.status(201).json({user: user, message: 'user created successfull'});
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


