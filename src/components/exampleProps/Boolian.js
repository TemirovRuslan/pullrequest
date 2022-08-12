import React, { useState } from "react";

const Boolian = () => {
	const [showGreeting, setShowGreeting] = useState(true);
  
	const toggleGreeting = () => {
		// it's more safe and approprite to change state this way, we dont depaned
		setShowGreeting((currentState) => !currentState);
	};

	return (
		<div >

            
			<div style={{border:'1px solid grey', margin:'10px'}}>
            <h4>Boolian section</h4>

                {/* if true show (class parag) if false dont*/}

                {showGreeting && (
                    <p className="parag">Hello is't boolian</p>
                )}

                <button onClick={toggleGreeting}>Toggle Boolian</button>
            </div>




		</div>
	);
};

export default Boolian;
