import axios from "axios";


export default axios.create(

{

baseURL:"https://api.unsplash.com",
headers: {
    Authorization:
      "Client-ID e803d5378fa02e2fda50bf05c69241e77a127385077aba90a1fd2fe2df0978ba"
  }


}

);