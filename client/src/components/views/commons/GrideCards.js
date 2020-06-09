import React from 'react'
import { Col } from 'antd';
function GrideCards(props) {
    return (
        <Col  lg={6} md={8} xd={24}>
            <div style={{position:'relative'}}>
                <a href={`/movie/${props.movieId}`}>
                    <img style={{width:'100%',height:'300px'}} src={`${props.image}`} alt={`${props.movieName}`}/>
                </a>
            </div>
        </Col>
    )
}

export default GrideCards
