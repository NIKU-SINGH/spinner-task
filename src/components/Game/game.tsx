import React, { useEffect, useState } from 'react'
import gameWheel from '/game.png';

function game() {
  const [spin,setSpin] = useState(false);
  // const [flag,setFlag] = useState(0)

  // useEffect(()=> {
  //   setFlag(flag => flag + 1)
  // },[flag])
  return (
    <div>
      <div className='bg-[#C6EFC8] h-[100vh] w-[100vw] p-2 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center z-10'>
          <div className=' items-center justify-center flex mb-6'>
            <img src={gameWheel} className={spin? "w-96 animate-spin" : "w-96"}/>
          </div>
          <button
            type="submit"
            className="bg-[#146531] text-2xl w-64 rounded-full p-4"
            onClick={() => {
              setSpin(!spin)
              setTimeout(()=> {
                window.location.replace('/reward')
              },10000)
              // setFlag(flag => flag + 1)
              // if(flag ==2 ) window.location.replace('/reward')
            }}
          >
            Spin
          </button>
        </div>
      </div>
    </div>
  )
}

export default game