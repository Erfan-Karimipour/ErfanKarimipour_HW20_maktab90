import { TextField } from '@mui/material'


export const Number = ({setQuizInfo, validNumber}) => {

  return (
    <div className='w-full h-20'>
        <TextField type='number' label="Number of Questions" variant="standard" className="w-full" helperText={!validNumber ? 'The number should be between 3 and 10' : ''} error={!validNumber}/>
    </div>
  )
}
