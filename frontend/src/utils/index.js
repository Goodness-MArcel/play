import { Api } from "../api/index";




export const signup = async (formData) => {
    try {
        const response = await Api.post("/signup", formData);
        return response.data;
    }catch(error){
        console.error(error);
        throw error;
    }
}