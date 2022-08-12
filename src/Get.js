
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetRequestHooks() {
   

    useEffect(() => {
     
        axios.get("https://reqres.in/api/users?page=2")
            //GET добавляет закодированные данные в URI
            .then(res => console.log('GET >>>',res))
            .catch(err => console.log('GET >>>',err))

    
    }, []);

    return (
        <div className="card text-center m-3">
      
        </div>
    );
}

export { GetRequestHooks };


