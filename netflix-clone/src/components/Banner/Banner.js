// import React, { useEffect, useState } from 'react';
// import axios from '../../utils/axios';

// import requests from '../../utils/requests';

// const Banner = () => {

//   const [movie,setMovie]=useState([]);

//   useEffect(()=>{
//     (async()=>{
//       try{
//         const request= await axios.get(requests.fetchTrending)
//         // setMovie(request.data.results[0])
//         console.log(request);
//         // i am having trouble while fetching who has got the same issue befo
      
       
        
//       }catch(error){
        

//       }
//     })()
//   },[])
//   const truncate = (str, n) => {
//     return str?.length > n ? str.substr(0, n - 1) + '...' : str;
//   };






//   return (
//    <div className="banner"
//    style={{
//     backgroundSize:"cover",
//     backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
//     backgroundPosition:"center",
//     backgroundRepeat:"no-repeat"

//    }}
   
   
   
//    >
//     <div className="banner-contetns">
//       <h1 className="banner-title">
//         {movie?.title || movie?.name || movie?.original_name}
//       </h1>
//       <div className="banner-buttons">
//         <button className="banner-button-play">play</button>
//         <button className="banner-button">List</button>

//       </div>
//       <h1 className="banner-description">
//         {truncate(movie?.overview,150)}
//       </h1>
//     </div>
    
//    </div> 
//   )
// }

// export default Banner
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchTrending);
        const randomIndex = Math.floor(Math.random() * request.data.results.length);
        setMovie(request.data.results[randomIndex]);
        console.log(request.data.results); // You can log to check if data is fetched correctly
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height:"600px"
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button-play">Play</button>
          <button className="banner-button">List</button>
        </div>
        <h1 className="banner-description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
    </div>
  );
}

export default Banner;
