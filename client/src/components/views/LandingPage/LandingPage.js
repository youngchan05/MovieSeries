import React, {useEffect} from 'react';
import {API_URL ,API_KEY} from  '../../../Config';
function LandingPage() {
    useEffect(()=>{
        const endpotin = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endpotin)
        .then(response => response.json())
        .then(response => console.log(response))
    })
    return (
        <div style={{ width:'100%',margin:'0'}}>
            <div style={{ width:'85%', margin:'1rem auto'}}>
                <h2>Movies by Latest</h2>
                <hr/>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button type="button">load More</button>
            </div>
        </div>
    )
}

export default LandingPage
