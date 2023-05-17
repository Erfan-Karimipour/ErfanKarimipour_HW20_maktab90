import React from 'react'
import { useForm } from '../context/Context'
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';

export const Question = () => {
  let {step, setStep, questions, answers, setAnswers} = useForm();
  let options = [...questions[step - 1].incorrect_answers, questions[step - 1].correct_answer].sort();
  let selectedOption:string = '';
  console.log(answers);
  
  
  return (
    <div className='w-[40rem] h-[75vh] border p-2 border-black rounded-md flex flex-col'>
      <p className='text-xl font-bold'>Question {step} of {questions.length}</p>
      <p className='w-full my-10 text-2xl text-center font-bold h-[7vh]'>{questions[step - 1].question}</p>
      <div className='ml-20 h-[50vh]'>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group">
          {options.map((item, index) =>  (
            <FormControlLabel key={index} value={item} control={<Radio />} label={item} onClick={() => selectedOption = item}/>
            ))}
        </RadioGroup>
      </FormControl>
      </div>
      <button className='bg-[#169916] justify-center text-white py-2 text-xl rounded-sm' onClick={() => {
        if (selectedOption){
          if (questions[step - 1].correct_answer == selectedOption){
            console.log(`Currect! It was ${selectedOption}`);
            setAnswers(answers + 1)
          }
          setStep(step + 1);

        }
      }}>{step == questions.length ? 'See the results' : 'Next Question'} </button>
    </div>
  )
}
