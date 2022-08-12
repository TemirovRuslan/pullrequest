
import React from 'react'
import Child from './Child';

import { useState } from 'react';


const  ParentThree = ()=> {
  const [data, setData] = useState('')
  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  }
  return (
    <div className="App">

        {/* here we pass data to our child */}
      <Child parentToChild={data}/>
      
      <div>
        <button onClick={() => parentToChild()}>Click Parent</button>
      </div>
    </div>
  )
}

export default  ParentThree;