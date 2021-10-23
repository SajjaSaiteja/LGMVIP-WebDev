import React from 'react'
import '../components/firsthalf.css'

function Firsthalf({getusers}) {
    return (
        <div className="bg" id="bg">
        <div className="navbar">
            <div className="logo"><span>Elliptical</span></div>
            <div className="ul">
                <li><a href="#parent" onClick={()=>getusers()}>Users</a></li>
            </div>
        </div> 
    </div>
    )
}

export default Firsthalf
