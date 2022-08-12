import React from "react";

const ChildToParentBoolian = ({ onClick }) => {


	return (
		<div>
			<div style={{border:'1px solid grey', margin:'10px'}}>
				<h4>ChildToParentBoolian section</h4>

				{/* if true show (class parag) if false dont*/}

				{/* {showGreeting && (
                    <p className="parag">Hello is't boolian</p>
                )} */}

				<button onClick={onClick}>Toggle ChildToParentBoolian</button>
				
			</div>
		</div>
	);
};

export default ChildToParentBoolian;
