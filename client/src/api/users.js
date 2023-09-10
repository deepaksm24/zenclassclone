import { axiosInstance } from ".";

//register

export const Registeruser = async (payload) => {
  payload = { ...payload, password: "Guvi@12345" };

  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/users/register",
      payload
    );
    
    return response.data;
    
    
  } catch (error) {
    return error.message;
  }
};
//placement

export const Placeadd = async (payload) => {
  

  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/users/place",
      payload
    );
    
    return response.data;
    
    
  } catch (error) {
    return error.message;
  }
};

export const Mockadd = async (payload) => {
  

  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/users/mock",
      payload
    );
    
    return response.data;
    
    
  } catch (error) {
    return error.message;
  }
};

export const Classadd = async (payload) => {
  

  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/users/class",
      payload
    );
    
    return response.data;
    
    
  } catch (error) {
    return error.message;
  }
};
export const AddClassadd = async (payload) => {
  

  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/users/addclass",
      payload
    );
    
    return response.data;
    
    
  } catch (error) {
    return error.message;
  }
};






//login
export const Loginuser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/users/login",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//get user protected
export const GetCurrentuser = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:5000/users/get-current-user"
    );

    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get placement
export const GetPlaced = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:5000/users/get-placed"
    );

    return response.data;
  } catch (error) {
    return error.message;
  }
};
//get class
export const GetClass = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:5000/users/get-class"
    );

    return response.data;
  } catch (error) {
    return error.message;
  }
};

//additional
export const GetAddClass = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:5000/users/get-add-class"
    );

    return response.data;
  } catch (error) {
    return error.message;
  }
};



// GET All mock

export const GetAllmock = async()=>{
    
  try{
     
      const response = await axiosInstance.get("http://localhost:5000/users/get-mock");
      return response.data;
  }
  catch(error){
  return error.message;
  }
  
  }