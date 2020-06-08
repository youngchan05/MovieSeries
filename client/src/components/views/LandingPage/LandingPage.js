import React, {useEffect} from 'react'
import axios from 'axios'

function LandingPage() {

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
