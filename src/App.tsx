import './App.css'
import React , {useState} from 'react'
import { create,all } from 'mathjs'

const math=create(all)

const App:React.FC=()=>{
    const [input,setInput]=useState<string>('')

    const handleButtonClick=(value:string)=>{
        setInput(prev=>prev+value)
    }

    const calculateResult=()=>{
        try{
            const result=math.evaluate(input)
            setInput(result.toString())
        }catch(error){
            setInput('Error')
        }
    }

    const clearInput=()=>{
        setInput('')
    }
    return(
        <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <input type='text' value={input} readOnly className='w-full p-4 text-right border border-gray-300 rounded mb-4' />
                <div className='grid grid-cols-4 gap-4'>
                    <button onClick={()=>handleButtonClick('1')} className='p-4 bg-blue-500 text-white rounded'>1</button>
                    <button onClick={()=>handleButtonClick('2')} className='p-4 bg-blue-500 text-white rounded'>2</button>
                    <button onClick={()=>handleButtonClick('3')} className='p-4 bg-blue-500 text-white rounded'>3</button>
                    <button onClick={()=>handleButtonClick('+')} className='p-4 bg-blue-500 text-white rounded'>+</button>

                    <button onClick={()=>handleButtonClick('4')} className='p-4 bg-blue-500 text-white rounded'>4</button>
                    <button onClick={()=>handleButtonClick('5')} className='p-4 bg-blue-500 text-white rounded'>5</button>
                    <button onClick={()=>handleButtonClick('6')} className='p-4 bg-blue-500 text-white rounded'>6</button>
                    <button onClick={()=>handleButtonClick('-')} className='p-4 bg-blue-500 text-white rounded'>-</button>

                    <button onClick={()=>handleButtonClick('7')} className='p-4 bg-blue-500 text-white rounded'>7</button>
                    <button onClick={()=>handleButtonClick('8')} className='p-4 bg-blue-500 text-white rounded'>8</button>
                    <button onClick={()=>handleButtonClick('9')} className='p-4 bg-blue-500 text-white rounded'>9</button>
                    <button onClick={()=>handleButtonClick('*')} className='p-4 bg-blue-500 text-white rounded'>*</button>

                    <button onClick={clearInput} className='p-4 bg-red-500 text-white rounded col-span-2 '>C</button>
                    <button onClick={()=>handleButtonClick('0')} className='p-4 bg-blue-500 text-white rounded'>0</button>
                    <button onClick={calculateResult} className='p-4 bg-blue-500 text-white rounded'>=</button>
                    <button onClick={()=>handleButtonClick('/')} className='p-4 bg-blue-500 text-white rounded'>/</button>

                    <button onClick={()=>handleButtonClick('%')} className='p-4 bg-blue-500 text-white rounded col-span-3'>%</button>
                </div>
            </div>
        </div>
    )
}
export default App