import { useEffect, useState } from "react"
import { Stop } from "./Stop";

function Stopwatch(){
    let [count, setCount] = useState(0);
    let [stop,setStop]=useState(true)
    function start(){
        setStop(!stop)
        setCount(count+1)
    }

   useEffect(()=>{
    let id;
       if(stop){
            clearInterval(id)
       }else{
        id=setInterval(()=>{
            setCount(count+1)
        },500)
       }
     
   },[count])
    return <div>
        <h1>Counter { count}</h1>
        <Stop start={start}></Stop>
    </div>
}
export {Stopwatch}