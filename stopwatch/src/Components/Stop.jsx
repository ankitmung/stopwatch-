function Stop({stop,start}){
    console.log(start)
    return <div>
        <button onClick={()=>{
            start();
        }}>{stop?"Start":"Stop"}</button>
    </div>
}
export {Stop}