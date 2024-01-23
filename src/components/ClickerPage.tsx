import { useState } from 'react'
import clickImage from '../assets/photo.png'
import { IoCloseOutline } from "react-icons/io5";
import { BsMouse3Fill } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";

interface Records  {
    id:number
    second:number,
    clicks:number,
    date:string
    name:string
}




const ClickerPage = () => {

    const [intervalId, setIntervalId] = useState<number | null>(null);
    const [count, setCount] = useState(0);
    const [currentTime, setCurrentTime] = useState<string>('');
    const [displayAlertUser, setDisplayAlertUser] = useState<boolean>(false)
    const [result, setResult] = useState<boolean>(false)
    const [user, setUser] = useState<string>("")
    const [click, setClick] = useState<number >(0)
    const [record, setRecord] = useState <Records[]>([])
    const [recordSeconds, setRecordSeconds] = useState<number>(0)



    function handleSeconds10s(){


        setCount(10)
        setRecordSeconds(10)
                
      
        const TenSeconds = setInterval(() => {
            setCount((prev) => prev - 1)
        }, 1000)


    
        setIntervalId(TenSeconds)
  
        
      
    }


    function handleSeconds5s(){

     

        setCount(5)
        setRecordSeconds(5)
                
      
        const TenSeconds = setInterval(() => {
            setCount((prev) => prev - 1)
        }, 1000)


    
        setIntervalId(TenSeconds)
  
        
      
    }

    function handleSeconds20s(){

     

        setCount(20)
        setRecordSeconds(20)
                
      
        const TenSeconds = setInterval(() => {
            setCount((prev) => prev - 1)
        }, 1000)


    
        setIntervalId(TenSeconds)
  
        
      
    }
 

    function handleClose (){
        setDisplayAlertUser(!displayAlertUser)
    }
    /* click button to add one */
    function handleCLickAdd (){
       
        
           if(count > 0){
            setClick((prev) => prev + 1)

            }
     
if(user == ""){
    setClick(0)
    setDisplayAlertUser(true)
}


        const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });


        const formattedTime = time;

        setCurrentTime(formattedTime);
    }


    function handleResultClose (){
        setResult(!result)
    }
/* if count is 0 and nested if to stop a count */
if(count == 0){


    if (intervalId !== null) {
        clearInterval(intervalId);
        setIntervalId(null); 
      
        if(user.length  >= 1){
            setResult(true)
            setRecord([...record, {id:Date.now(), second:recordSeconds, clicks:click, date:currentTime, name:user}])
        }   
      }
      
}else if(count < 0){
    setCount(0)
}


/* reset . go back to 0 value */
function handleReset (){
    setClick(0)
    setCount(0)
}

console.log(click)




    
  return (
 <>
 <div className={`h-auto w-full flex items-center justify-center flex-col relative z-0 ${displayAlertUser ? "bg-slate-300		" : "bg-white" }`}>



<div className='flex items-center justify-center w-full mt-16 gap-10'>
    <div className='w-2/12	'>
    <img src={clickImage} className='w-full'/>
    </div>
    <div>
  <h1 className='text-4xl text-sky-600 font-bold	font-serif
'>Clicker <span className='text-black'>Game</span></h1>
    </div>
</div>

<div className='mt-12 w-full'>
<div>
    <h1 className='text-center text-2xl	font-semibold'>Put Your Finger-clicking speed to the test</h1>
</div>
<div className='flex items-center justify-center  mt-10 w-full	'>
    
    <input type='text'
    value={user}
    onChange={(e) => setUser(e.target.value)}
    placeholder='Enter Your Name'
    className='w-1/4 py-3 px-3 text-lg	border-2 border-sky-600 bg-slate-100		rounded-md	'
    />
</div>
<div className='flex items-center justify-center gap-6 mt-16'>

<div>
<button className='text-3xl font-semibold py-3 px-12  bg-sky-600 text-white rounded-lg	 ' onClick={handleSeconds5s}>5s</button>
</div>
<div>
<button className='text-3xl font-semibold py-3 px-12  bg-sky-600 text-white rounded-lg	 ' onClick={handleSeconds10s}>10s</button>
</div>
<div>
<button className='text-3xl font-semibold py-3 px-12  bg-sky-600 text-white rounded-lg	 ' onClick={handleSeconds20s}>20s</button>
</div>

</div>
</div>


<div className='w-full flex items-center justify-center flex-col relative'> 

<div className='bg-sky-300	mt-20 w-4/5	px-4 py-4 h-96		'>
    
    <div className='flex items-center justify-between'>
       <div>
       <button className=' bg-red-800	 text-white text-lg  py-3 px-3 font-semibold	rounded	' onClick={handleReset} >Reset</button>

       </div>
       <div>
       <p className='text-right text-black text-xl	'>Time: {count}</p>
       </div>
    </div>

    <div className='mt-24'>
        <h1 className='text-center  text-black text-5xl		'>{click}</h1>
    </div>
    

</div>

<div className='absolute bottom-[-20px] '>
<div>
<button className=' bg-sky-600 text-white text-2xl	py-3 px-3 font-semibold	rounded	' onClick={handleCLickAdd} >Click me as fast as you can!</button>
</div>
</div>

</div>

<div className=' mt-24 w-full flex items-center justify-center flex-col'>

<div className='bg-sky-600 px-3 py-3 mb-10'>
    <h1 className='text-center text-3xl		text-white'>Record</h1>
</div>


{
   record.map((item) => (
    <div className='bg-slate-200		 px-3 py-3 w-4/5	mb-10'>


        <div className='flex items-center justify-between'>
          <div>
          <p>Name: <span className='text-lg'>{item.name.toUpperCase()}</span></p>
            <p>Score: <span className='text-lg'>{item.clicks}</span></p>
            </div>
            <div>
                <p >Seconds: <span className='text-lg'>{item.second}s</span></p>
                <p>Date: <span className='text-lg'> {item.date}</span></p>
            </div>

        </div>

    </div>
   ))
  }

<div>

</div>
</div>


<div className={`${displayAlertUser ? "block" : "hidden"} absolute  z-10   top-[48%] w-full flex items-center justify-center flex-col`}>
<div className='bg-[#cb1111] rounded-md		 px-10 py-10 w-[40%] h-44		 '>

<div className='flex items-end justify-end mb-2'>
    <h1 className='font-semibold	px-2 py-1 text-2xl text-black	 bg-sky-300	mt cursor-pointer	rounded-md	' onClick={handleClose}><IoCloseOutline /></h1> 
</div>
<div className='flex items-center justify-center gap-2 mt-5'>
<div>
<h1 className='text-slate-300	 text-xl	font-semibold font-serif

	'>pls input your Name before you Start!!! </h1>

</div>
<div>
<h1 className='text-white text-2xl		font-semibold'><BsMouse3Fill />
</h1>
</div>

</div>
</div>
</div>


<div className={`${result ? "block" : "hidden"} absolute  z-10   top-[44%] w-full flex items-center justify-center flex-col`}>
<div className='bg-sky-600	rounded-md	 px-10 py-10 w-[40%] h-auto		 '>

<div className='flex items-end justify-end mb-2'>
    <h1 className='font-semibold	px-2 py-1 text-2xl text-black	 bg-sky-300	mt cursor-pointer	rounded-md	' onClick={handleResultClose}><IoCloseOutline /></h1> 
</div>
<div className='flex items-center justify-center gap-2 mt-5'>
<div>
<h1 className='text-white	 text-3xl		font-semibold font-serif
	'>Congrats!!! </h1>
</div>
<div>
<h1 className='text-white text-2xl		font-semibold'><MdCelebration /></h1>
</div>
</div>
<div className='text-center mt-5 flex items-center justify-center '>
    
    <div className='w-1/2	'>
  <div>
  <h1 className='text-xl	text-slate-300'>Name: <span className='text-2xl text-white'>{user.toUpperCase()}</span></h1>
    </div>  

    <div>
  <h1 className='text-xl	text-slate-300'>Seconds: <span className='text-2xl text-white'>{recordSeconds}s</span></h1>
    </div> 
 

    </div>

    <div className='w-1/2		 '>
  <div >
  <h1 className='text-xl	text-slate-300'>Score: <span className='text-2xl text-white'>{click}</span></h1>
    </div>  

    <div >
  <h1 className='text-xl	text-slate-300'>Time: <span className='text-2xl text-white'>{currentTime}</span></h1>
    </div> 
 
    </div>
   
    
</div>
</div>
</div>
 </div>

 </>
  )
}

export default ClickerPage