import {useState, useEffect} from 'react';

// eslint-disable-next-line react/prop-types
const CustomGallery = ({url}) => {
    const [movies, setMovies] = useState();
    useEffect(() => {
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
        console.log(data);
        setMovies(data.Search);
        });
    }, [url]);

    return (
        <div style={{marginLeft: '25px'}}>
            {movies && movies.map((movies) => (
                <img key={movies.Id} src={movies.Poster} alt={movies.Title} style={{width: '160px', height: '250px', margin:'10px'}}/>
            ))}
        </div>
    );
};

export default CustomGallery;