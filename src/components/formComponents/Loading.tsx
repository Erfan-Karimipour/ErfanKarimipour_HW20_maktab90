import React from 'react'

export const Loading = () => {
  return (
    <div className='absolute w-screen h-screen top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black bg-opacity-50 flex backdrop-blur-md'>
        
    <img src="https://media0.giphy.com/media/131tNuGktpXGhy/giphy.gif?cid=ecf05e47k37n4iu8xk4kfp5leo2lctxifyf3aefo0b9rrctr&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Loading" className='w-40 h-40 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full p-2'/>
    </div>
  )
}
