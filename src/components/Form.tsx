import React, { useState } from 'react'
import { useForm } from '../context/Context'
import { Number } from './formComponents/number';
import { Category } from './formComponents/category';
import { Difficulty } from './formComponents/difficulty';
import axios from 'axios';
import { Loading } from './formComponents/Loading';

export const Form = () => {
  let { setStep ,setQuestions} = useForm();
  let [validNumber, setValidNumber] = useState<boolean>(true);
  let [showLoading, setShowLoading] = useState<boolean>(false);
  function handleStart (e){
    e.preventDefault();

    if (e.target[0].value < 3 || e.target[0].value > 10){
      setValidNumber(false);
      console.log(`Input Error`);
      return
    } else {
      setShowLoading(true);
      console.log(`Getting the data from the server`);
      axios.get(`https://opentdb.com/api.php?amount=${e.target[0].value}&category=${e.target[1].value}&difficulty=${e.target[2].value}`).then((res) => {
        console.log(`Got the data from the server`);
        setQuestions(res.data.results) 
        setStep(1);
      })
    }
    
    
  }

  return (
    <form className='p-10 w-[30rem] flex flex-col border border-blue-700 bg-white rounded-md' onSubmit={(e) => handleStart(e)}>
      <p className='text-3xl font-bold w-full text-center mb-8'>Setup A New Quiz</p>
      <Number validNumber={validNumber}   />
      <Category                           />
      <Difficulty                         />
      {showLoading ? <Loading /> : ''}
      <input type='submit' value={"Start!"} className='px-10 py-2 bg-blue-500 text-white text-xl font-bold m-auto mt-10 rounded-xl cursor-pointer hover:bg-blue-700 duration-100'/>
    </form>
  )
}
