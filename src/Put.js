import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PutRequestHooks() {
    // const [name, setName] = useState('');
    // const [occupation, setOccupation] = useState('');



    // useEffect(() => {
    //     // PUT request using axios inside useEffect React hook
    //     const article = { name: 'ruslan' , job:'kurier'};
    //     axios.put('https://reqres.in/api/users/2', article)
    //         .then(response => {
    //             setName(response.data.name)
    //             setOccupation(response.data.job)
    //         });

    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

    const getUserData = async () => {
        const config = {
            "Content-Type": "application/json",
        }
        try {
            const response = (axios.put('https://reqres.in/api/users/2'), config)
            console.log(response);
            // setUpdatedData({ ...userData, ...response.data });
        }catch (error){
            console.log(error);
        }

    }


    return (
        <div className="card text-center m-3">
            <h5 className="card-header">PUT Request with React Hooks</h5>
            <div className="card-body">
                {/* Name: {name}
                <br/>
                Occupation:{occupation} */}
            </div>
        </div>
    );
}

export { PutRequestHooks };

// const getUserData = async () => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//       },
//     };
//     try {
//       const response = await axios.get(
//         // dev environment
//         // `http://localhost:8000/api/v1/get/userById/${params.id}`,

//         //    production environment
//         `https://helmda-space.herokuapp.com/api/v1/get/userById/${userInfo._id}`,
//         config
//       );
//       // JSON.stringify(response.data);
//       //   console.log(response.data);
//       setUpdatedData({ ...userData, ...response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };