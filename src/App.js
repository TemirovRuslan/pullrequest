import React from "react";
import "./App.css";
import { GetRequestHooks } from "./Get";
import {PostRequestHooks} from "./Post";
import { PutRequestHooks } from "./Put";
import {DeleteRequestHooks} from "./Delete";



import Parent from "./components/exampleProps/Parent";
import ParentTwo from "./components/exampleProps2/ParentTwo";
import ParentThree from "./components/exampleProps3/ParentThree";
import Parent4 from "./components/exampleProps4/Parent4";



function App() {
	return (
		<div className="App">
			{/* <Stop/> */}
	
			{/* <PrimarySearchAppBa/> */}
			{/* <GetRequestHooks />
			<PostRequestHooks/> */}
			{/* <PutRequestHooks/> */}
			{/* <DeleteRequestHooks/> */}
			{/* <Parent/> */}
			{/* <ParentTwo/> */}
			{/* <ParentThree/> */}
			<Parent4/>
		</div>
	);
}

export default App;
