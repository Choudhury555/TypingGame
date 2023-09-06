import React,{useState,useEffect,useRef} from "react"
import useWordGame from "./CustomHook/useWordGame"
import "./App.css"

function App(){
    
    const {text,handleChange,isStarted,textBoxRef,timeRemaining,startGame,wordCount}=useWordGame(20)
    
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
                value={text}
                onChange={handleChange}
                disabled={isStarted===false}
                ref={textBoxRef}
            />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isStarted===true}   
            >Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}
export default App