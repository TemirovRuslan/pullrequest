
import Child from './Child';

function Parent4() {
  const childToParent = () => {
    alert("This is an alert from the Child Component")
  }

  return (
    <div className="App">
      <div className="child">
        <Child childToParent={childToParent}/>
      </div>
    </div>
  );
}

export default Parent4;