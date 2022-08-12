import React, { useState, useEffect } from "react";
import Boolian from "./Boolian";
import ChildToParentBoolian from "./ChildToParentBoolian";
import ChildToParentString from "./ChildToParentString";

const initialValue = true;

const Parent = ({onClick}) => {

	//ChildToParentString
	const [name, setName] = useState("Parent");



	//ChildToParentBoolian
	const [info, setInfo] = useState(true);
	const toggleIsTrue = () => {
		// it's more safe and approprite to change state this way, we dont depaned
		setInfo((currentState) => !currentState);
	};





	return (
		<div style={{border:'3px solid grey', margin:'10px'}}>

			<h1>{name} page</h1>

			<Boolian />

			<ChildToParentString changeWord={(name) => setName(name)} />

			<ChildToParentBoolian
				onClick={toggleIsTrue}
			/>
			{ info &&(
				<h3>ChildToParentBoolian if true show if not hide</h3>
			)}

			
		</div>
	);
};

export default Parent;
