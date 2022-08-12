import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteRequestHooks() {
    // const [status, setStatus] = useState(null);

    useEffect(() => {
        // DELETE request using axios inside useEffect React hook
        axios.delete('https://reqres.in/api/users/2')
            .then((res) => console.log(res));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">DELETE Request with React Hooks</h5>
            <div className="card-body">
                {/* Status: {status} */}
            </div>
        </div>
    );
}

export { DeleteRequestHooks };


