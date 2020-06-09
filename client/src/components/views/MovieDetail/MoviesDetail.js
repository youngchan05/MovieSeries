import React , {useEffect, useState} from 'react';
import {API_URL, API_KEY} from '../../../Config'; 
function MoviesDetail(props) {
    console.log(stroe)
    let movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([])
    useEffect(() => {
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
        fetch(endpointInfo)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setMovie([...response])
        })
    }, [])
    return (
        <div>
            {/*header*/}

            
        </div>
    )
}

export default MoviesDetail
