import axios from "axios";
import { getToken } from "../redux/auth/auth-selectors";


export const fetchReviews= async(token)=>{
  

    try {
     const res= await axios.get("http://localhost:8800/reviews",{headers: {
      'Authorization': token
    }})
     return res
    } catch (error) {
      console.log(error);
    }
  }



  export const addReview= async(obj)=>{
    try {
      await axios.post("http://localhost:8800/reviews", obj)
     console.log('Review added');
    } catch (error) {
      console.log(error);
    }
  }

  export const deleteReview= async(id)=>{
    try {
      await axios.delete(`http://localhost:8800/reviews/:${id}`)
     console.log(`removed ${id}`);
    } catch (error) {
      console.log(error);
    }
  }