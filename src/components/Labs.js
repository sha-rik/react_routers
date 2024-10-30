import React from 'react';
import { useNavigate } from 'react-router-dom';




function Labs(){


    // with the help of useNavigate hook we can navigate to any page

    const navigate=useNavigate();

    function onClickHandler ()  {
        navigate('/about');
    };


    return (
        <div>
            <div>
                <h1>Labs page</h1>
            </div>
            <button onClick={onClickHandler}>Moves to About Page</button>
        </div>
    );
}
export default Labs;