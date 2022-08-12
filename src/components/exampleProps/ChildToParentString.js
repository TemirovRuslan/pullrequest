import React, { useState } from "react";



const ChildToParentString = (props) => {
	
  

	return (
		<div style={{border:'1px solid grey', margin:'10px'}}>
            <h4>ChildToParent section</h4>

            <button onClick={() => props.changeWord('GrandParent')}>Change name</button>
		</div>
	);
};

export default ChildToParentString;
