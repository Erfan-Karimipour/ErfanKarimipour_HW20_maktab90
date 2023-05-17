import React from 'react'
import { NativeSelect, FormControl, InputLabel } from '@mui/material'

export const Difficulty = () => {
  return (
    <div className='h-20'>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">Difficulty</InputLabel>
          <NativeSelect
            inputProps={{
              name: 'Difficulty',
              id: 'uncontrolled-native',
            }}>
            <option value="easy">   Easy   </option>
            <option value="medium"> Normal </option>
            <option value="hard">   Hard   </option>
          </NativeSelect>
        </FormControl>
    </div>
  )
}
