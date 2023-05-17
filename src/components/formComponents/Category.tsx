import React from 'react'
import { NativeSelect, FormControl, InputLabel } from '@mui/material'

export const Category = () => {
  return (
    <div className='h-20'>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">Category</InputLabel>
          <NativeSelect
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}>
            <option value="11">Film     </option>
            <option value="12">Music    </option>
            <option value="24">Politics </option>
            <option value="23">History  </option>
          </NativeSelect>
        </FormControl>
    </div>
  )
}
