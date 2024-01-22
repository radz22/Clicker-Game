import { useState } from 'react'
import clickImage from '../assets/photo.png'
interface Records  {
    id:number
    second:number,
    clicks:number,
    date:string
}




const ClickerPage = () => {

    const [intervalId, setIntervalId] = useState<number | null>(null);
    const [count, setCount] = useState(0);
    const [currentTime, setCurrentTime] = useState<string>('');



    const [click, setClick] = useState<number >(0)
    const [record, setRecord] = useState <Records[]>([])


    const [recordSeconds, setRecordSeconds] = useState<number >(0)

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
 

    /* click button to add one */
    function handleCLickAdd (){

        
            setClick((prev) => prev + 1)
     


        const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });


        const formattedTime = time;

        setCurrentTime(formattedTime);
    }


/* if count is 0 and nested if to stop a count */
if(count == 0){
    if (intervalId !== null) {
        clearInterval(intervalId);
        setIntervalId(null); 
        setRecord([...record, {id:Date.now(), second:recordSeconds, clicks:click, date:currentTime}])
        
      }
      
}

/* reset . go back to 0 value */
function handleReset (){
    setClick(0)
}


console.log


    
  return (
 <div className='h-auto w-full flex items-center justify-center flex-col '>



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
    <h1 className='text-center text-2xl	font-semibold	'>Put Your Finger-clicking speed to the test</h1>
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
       <p className='text-right text-black text-xl		'>Time: {count}</p>
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
    <div className='bg-[#d2d2d2] px-3 py-3 w-4/5	mb-10'>


        <div className='flex items-center justify-between'>
          <div>
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
 </div>
  )
}

export default ClickerPage