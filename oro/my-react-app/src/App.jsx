import React from 'react'
import Card from './components/Card'
import Cardtwo from './components/Cardt'
import Error from './components/Error'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
const App = () => {
  return (
    <div className='flex bg-black mt-70 w-1000 gap-10'>
      <Card/>
      <Cardtwo className=''/>
      <Error/>
      <Loader/>
      <Cursor/>
      {/* universe.io  check  */}
    </div>
  )
}

export default App