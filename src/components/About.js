import React from 'react';
import { useNavigate } from 'react-router-dom';


function About() {


    const navigate=useNavigate();


    function onClickHandler(){
        navigate(-1);
    }

    return (


        <div>
            <div>
                <h1>About page</h1>
            </div>

            <button onClick={onClickHandler}> simon go back</button>
        </div>
    );
}

export default About;