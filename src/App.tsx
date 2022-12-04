import reactLogo from './assets/react.svg'
import Banner from './components/banner/banner'
import db1 from '/db1.png'
import db2 from '/db2.png'
import { Routes, Route } from 'react-router-dom'
import Game from '../src/components/Game/game'
import Reward from '../src/components/Reward/reward'

function App() {
  return (
    <div className='bg-[#C6EFC8]'>
      <div className='bg-bblue-900 absolute top-0 left-0 w-full h-[50vh]'>
        <img src={db1} className="w-full absolute top-0 left-0" />
      </div>
      <div className='bg-bblue-900 absolute bottom-0 left-0 w-full h-[50vh]'>
        <img src={db2} className="w-full absolute bottom-0 left-0" />
      </div>
      <Routes>
        <Route path="/" element={<Banner />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/reward" element={<Reward />}></Route>
      </Routes>

    </div>
  )
}

export default App
