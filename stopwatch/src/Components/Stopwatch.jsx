import { useEffect, useState } from "react"
import { Stop } from "./Stop";

function Stopwatch(){
    let [count, setCount] = useState(0);
    let [isStart,setIsStart]=useState(false);
    let id;
    useEffect(()=>{
        
        if(isStart){
            id=setInterval(()=>{
                setCount(pre => {setCount(pre+1)})
            },10)
        }else{
            clearInterval(id)
        }
        return ()=>{clearInterval(id)}
    },[isStart])
    console.log(count);

    return <div>
        <h1><span>{Math.floor((count/6000)%60)}</span> <span>{Math.floor((count/100)%60)}</span> <span>{(count)%100}</span></h1>
        <button onClick={()=>setIsStart(!isStart)}>{isStart?"Stop":"Start"}</button>
        <button onClick={()=>{
            setIsStart(!isStart)
            setCount(0)}
            }>Reset</button>
    </div>
}
export {Stopwatch}