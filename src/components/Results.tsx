import React from 'react'
import { useForm } from '../context/Context'

export const Results = () => {
  let { questions, answers } = useForm();
  return (
    <form className='p-10 w-[30rem] flex flex-col border border-blue-700 bg-white rounded-md'>
      <p className={((answers * 100) / questions.length) > 50 ? 'text-3xl font-bold w-full text-center mb-8 text-green-700' : 'text-3xl font-bold w-full text-center mb-8 text-red-600'}>{((answers * 100) / questions.length) > 50 ? 'Congratulations!' : 'You are a joke 👇🤣👇'}</p>
      <p className='text-3xl font-bold w-full text-center mb-8'>You answerd {Math.floor((answers * 100) / questions.length)}% of questions right{((answers * 100) / questions.length) > 50 ? '!' : ', idiot 😏'}</p>

      <input type='submit' value={"Start a new quiz!"} className='px-10 py-2 bg-blue-500 text-white text-xl font-bold m-auto mt-10 rounded-xl cursor-pointer hover:bg-blue-700 duration-100'/>
    </form>
  )
}
