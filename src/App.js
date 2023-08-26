// import React from 'react';
// import { useEffect, useState } from 'react';
// import './App.css';
// import SearchIcon from './search.svg';
// import MovieCard from './MovieCard';
// // 95c3d837
// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=95c3d837';


// const App = () => {
//     const [movies, setMovies] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const searchMovies = async (title) => {
//         const response = await fetch(`${API_URL}&s=${title}`);
//         const data = await response.json();
//         setMovies(data.Search);
//     };
//     useEffect(() => {
//         searchMovies(searchTerm);
//     }, [searchTerm]);

//     return (
//         <div className='app'>
//             <h1>Movie Land</h1>
//             < div className='search'  >
//                 <input placeholder="Search for movies" value={searchTerm} onChange={(pro) => {setSearchTerm(pro.target.value)}} />
//                 <img src={SearchIcon}
//                     alt="search"
//                     onClick={() => { }}
//                 />
//             </div>
//             {
//                 movies?.length > 0 ? (
//                     <div className='container'>
//                         {
//                             movies.map((movie) => {
//                                 return <MovieCard movie={movie} />
//                             })
//                         }
//                     </div>)
//                     :
//                     <div className='empty' >
//                         <h2>No Movies Found</h2>
//                     </div>
//             }
//         </div>
//     );
// }
// export default App;


import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=95c3d837';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    const searchMovies = async (title) => {
        setLoading(true);
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        setLoading(false);
    };

    useEffect(() => {
        searchMovies(searchTerm);
    }, [searchTerm]);

    return (
        <div className='app'>
            <h1 className='head'>Ani Search</h1>
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(pro) => setSearchTerm(pro.target.value)}
                />
                <img src={SearchIcon} alt='search' onClick={()=>{searchMovies(searchTerm)}} />
            </div>
            {loading ? (
                <div className='loader'></div> // Display loading spinner
            ) : movies?.length > 0 ? (
                <div className='container'>
                    {movies.map((movie) => {
                        return <MovieCard  movie={movie} />;
                    })}
                </div>
            ) :
                searchMovies('One Piece')
            }
        </div>
    );
};

export default App;


