import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import Head from 'next/head'
import Seo from "@/components/Seo";


interface IData {
    id:number,
    original_title:string;
}
interface IMoive {
    results: IData[]
}


export default function Home(){
    const [movies, setMovies] = useState<IMoive>();
    useEffect(() => {
        const data = fetch(`/api/movies`)
        .then((response) => response.json()
        .then((json) => setMovies(json)));
    },[])
    
    return (
        <div className="container">
        <Seo title="Home" />
        {!movies && <h4>Loading...</h4>}
        {movies?.results.map((movie) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;            
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
      </div>
    );
}

