import React from 'react'
import Loader from 'react-loader-spinner';
import '../components/secondhalf.css'
function Secondhalf({content,e,lo}) {
    console.log(content);
    return (
        <div id="parent">

            {
                content.length!=0?content.map((e)=>(
                    
                <div className="box" key={e.id}>
                    <img className="im" src={e.avatar}></img>
                    <h3>{e.first_name} {e.last_name}</h3>
                    <h4>{e.email}</h4>
                </div>
                ))
                :lo?<Loader
                type="MutatingDots"
                color="blue"
                height={100}
                width={100}
                timeout={2000}
              />
              :<h1>{e}</h1>
            }
        </div>
    )
}

export default Secondhalf
