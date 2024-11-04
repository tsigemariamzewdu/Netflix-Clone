import axios from "axios";
//this is to fetch the data from the database i mean we can use fetch but i guess this one is much better 


const instance= axios .create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
        "Content-Type": "application/json",
      },
});

export default instance;