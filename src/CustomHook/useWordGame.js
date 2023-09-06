import {useState,useRef,useEffect} from "react"

function useWordGame(gametime=10){
    
    const [text,setText]=useState("")
    const [timeRemaining,setTimeRemaining]=useState(gametime)
    const [isStarted,setIsStarted]=useState(false)
    const [wordCount,setWordCount]=useState(0)
    const textBoxRef=useRef(null)
    
    function startGame(){
        setIsStarted(true)//"State Change " is an "Asynchronous opeartion" i.e it will not stop any other operation when it is running
        setTimeRemaining(gametime)
        setText("")
        textBoxRef.current.disabled=false////We have to "enable" our "textarea" first or else we can not "focus" on a diabled area(Synchronous Opeartion i.e fist this operation will execute then afterwards operations will execute )
        textBoxRef.current.focus()
    }
    
    function endGame(){
        setIsStarted(false)
        const currWordCount=handleCount(text)
        setWordCount(currWordCount)
    }
    
    function handleChange(event){
        const {name,value}=event.target
        setText(value)
    }
    
    // console.log(text)
    
    function handleCount(str){
        const wordsArr=str.split(" ")
        const countword=wordsArr.filter(word => word!="")
        // console.log(countword)
        // console.log(countword.length)
        return countword.length
    }
    
    useEffect(()=>{
        if(isStarted && timeRemaining >0){
            setTimeout(()=>{
                setTimeRemaining(prevTimeRemaining => prevTimeRemaining-1)
            },1000)
        }
        else if(timeRemaining===0){//after time over we can set "setStarted" is "False"
            endGame()
        }
    },[timeRemaining,isStarted])
    
    return {text,handleChange,isStarted,textBoxRef,timeRemaining,startGame,wordCount}
}

export default useWordGame