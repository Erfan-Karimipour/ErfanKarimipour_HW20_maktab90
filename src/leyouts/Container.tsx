import React, { useReducer, useState, useContext } from 'react'
import { useForm } from '../context/Context';
import { Form } from '../components/Form';
import { Question } from '../components/Question';
import { Results } from '../components/Results';

export const Container = () => {

  let {step, questions} = useForm();

  return (

    <div className='flex w-fit justify-between border-2 shadow-lg bg-white rounded-md'>
      {step == 0 ? 
        <Form     />:
      questions.length >= step ?
        <Question />:
        <Results  />
      }
    </div>

          
  )
}
