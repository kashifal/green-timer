import React, {useState} from 'react';

function Homes (){
    let x = new Date().toLocaleTimeString();
    const[time, setTime] = useState(x);
    function timer(){
        setTime(new Date().toLocaleTimeString());
    }
    
    setInterval(timer,1000)
 

    return (
        <>
        <div className="fullPage">
            <h2>{time}</h2>
            <button  className="twitter">
                <i className='fa fa-twitter'></i>
            </button>
    
        </div>
        </>
    )
}
 
export default Homes;