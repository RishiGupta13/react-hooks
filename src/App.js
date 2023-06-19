import { UseStatehook } from "./components/useState";
import { UseEffecthook } from "./components/UseEffect";
import { UseRefhook } from "./components/UseRef";
import { UseMemohook } from "./components/UseMemo";
import { UseContexthook } from "./components/UseContext";
import { CounterContext } from "./components/CounterContext";
import { UseReducerhook } from "./components/UseReducer";
import { CustomHook } from "./components/CustomHook";


function App() {

  return (
    <div className="App">
      {/* <UseStatehook/> */}
      {/* <UseEffecthook/> */}
      {/* {<UseRefhook/>} */}
      {/* {<UseMemohook/>} */}
      {/* <CounterContext.Provider value="Hello From parent">
      <UseContexthook/>
      </CounterContext.Provider> */}

      {/* <UseReducerhook/> */}

      <CustomHook/>
      


    </div>
  );
}

export default App;
