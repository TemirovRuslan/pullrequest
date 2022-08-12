import React from "react";

const GetObj = ({obj, setObj}) => {

    
    const onClickHandler = (order) => {
		const resetImages = {
		  first: false,
		  second: false,
	
		};
		setObj({
		  ...resetImages,
		  [order]: true,
		});
		
	  };
	return(
        <div>
            <button onClick={() => onClickHandler("first")}>
                First
            </button>
            <button onClick={() => onClickHandler("second")}>
                Second
            </button>
        </div>
    )
	
};
export default GetObj;
