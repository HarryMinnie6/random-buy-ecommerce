import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-random-buy-ecommerce-37454.cloudfunctions.net/api" //this i where we have the API url
});

export default instance;



//http://localhost:5001/random-buy-ecommerce-191cc/us-central1/api