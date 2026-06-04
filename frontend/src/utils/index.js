import { Api } from "../api/index";

export const signup = async (formData) => {
    try {
        const response = await Api.post("/auth/signup", formData);

        console.log("Signup successful:", response.data);
        return response.data;
    }catch(error){
        console.log("Signup failed:", error);
        throw error;
    }
}