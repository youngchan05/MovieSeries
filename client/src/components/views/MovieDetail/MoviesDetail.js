import React , {useEffect, useState} from 'react';
import {API_URL, API_KEY , IMAGE_BASE_URL} from '../../../Config'; 
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './section/MovieInfo';
import GrideCards from '../commons/GrideCards';
import { Row } from 'antd';
function MoviesDetail(props) {
    let movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([])
    const [Casts ,setCasts] = useState([])
    const [ActorToggle , setActorToggle] = useState(false);
    useEffect(() => {
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
        fetch(endpointInfo)
        .then(response => response.json())
        .then(response => {
            setMovie(response)
        })

        fetch(endpointCrew)
        .then(response => response.json())
        .then(response => {
            setCasts(response.cast);
        })
    }, [])
    const toggleActorView = () => {
        setActorToggle(!ActorToggle);
    }
    return ( 
        <div>
            {/*header*/}
            <MainImage
                image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                title = {Movie.original_title}
                text = {Movie.overview}
            />

            
            {/*body*/}
            <div style={{width:'85%',margin:'1rem auto'}}>

            {/*movie info*/}
            <MovieInfo
                movie={Movie}
            />
                <br/>
                <div style={{display:'flex', justifyContent:'center',margin:'2rem'}}>
                    <button onClick={toggleActorView}>Toggle Actor View</button>
                </div>
                {ActorToggle &&
                    <Row gutter={[16,16]}>
                        {Casts && Casts.map((Casts , index) => (
                            <React.Fragment key={index}>
                                <GrideCards
                                    image={Casts.profile_path ? `${IMAGE_BASE_URL}w500${Casts.profile_path}`:null}
                                    characterName ={Casts.name }
                                />
                            </React.Fragment>
                        ))}
                    </Row>
                }
            </div>
        </div>
    )
}

export default MoviesDetail
