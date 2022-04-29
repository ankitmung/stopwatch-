function Stop({start}){
    return <div>
        <button onClick={()=>{
            start();
        }}>Stop</button>
    </div>
}
export {Stop}