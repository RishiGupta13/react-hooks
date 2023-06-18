import {useState} from 'react';


export const UseStatehook=()=>{
    const [name,setName]=useState("Dipesh");
    const [flag,setflag]=useState(false);
    const [steps,setSteps]=useState(()=>{
      console.log("clicked");
      return 0;
    });
  
    const [names,setNames]=useState([]);
  
  
    const increment=()=>{
      setSteps((prevState)=>prevState+1);
      setSteps((prevState)=>prevState+1);
    }
  
    const decrement=()=>{
      setSteps(steps-1);
    }
  
    function addNames(e){
      e.preventDefault();
      setNames([...names,{id:names.length,name}]);
      setName("");
    }
  
    return (
      <div className="App">
        <div>Hello {flag ? name : ""}</div>
        {/* <button onClick={onChange}> Click Me </button> */}
  
        <hr></hr>
        <button onClick={increment}>+</button>
        <div>{steps}</div>
        <button onClick={decrement}>-</button>
  
        <form onSubmit={addNames}>
        <input
           type="text"
           value={name}
          placeholder='add names'
          onChange={(e)=>setName(e.target.value)}
          />
  
  
        <button>Submit</button>
   
        </form>
  
        <hr>
        </hr>
  
        <ul>
          {names.map((item)=>(
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
  
      </div>
    );
  }
  


