import React, { useState, useEffect } from "react";
import GetObj from "./GetObj";
import '../Style.css';

const ParentTwo = () => {
    // in order to send props as object we do next

    const [obj, setObj] = useState({
        first:true,
        second:false
    })


	return (
		<div style={{border:'5px solid black', margin:'30px'}}>

            {
                obj.first && (
                    <div className="first block">
                        First
                    </div>
                )
            }
            {
                obj.second && (
                    <div className="first block">
                        Second
                    </div>
                )
            }
           <GetObj obj={obj}  setObj={setObj}/>
		</div>
	);
};

export default ParentTwo;