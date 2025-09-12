import React from 'react'
// import Card from './components/Card'
import Cardtwo from './components/Cardt'
import Error from './components/Error'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Sc from './components/SC'
import CurvedLoop from './components/CurvedLoop'
import MagicBento from './components/MagicBento'
import CardSwap, { Card } from './components/CardSwap'

import InfiniteMenu from './components/InfiniteMenu'
import  { CustomKanban }  from './components/CustomKanban'
import { ShiftingDropDown } from './components/ShiftingDropDown'
import { HoverImageLinks } from './components/HoverImageLinks'
import { DrawCircleText } from './components/DrawCircleText'
import Lanyard from './components/Lanyard'
// import Orb from './components/Orb'


// universe.io , Animate UI ,  React bits im lonely tab


const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];
const App = () => {
  return (
    <div className='flex  mt-70 w-3500 gap-10'>
      {/* <Card/> */}
      <Cardtwo className=''/>
      <Error/>
      <Loader/>
      <Cursor/>
      {/* universe.io  check  */}
      {/* Animate UI Useless  */}
  
      <Sc
      texts={['React Bits', 'Scroll Down']} 
      velocity={100} 
      className="custom-scroll-text text-amber-50"
      />
  
  <div className="w-100">
<CurvedLoop 
  marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
  speed={3}
  curveAmount={500}
  direction="right"
  interactive={true}
  className="custom-text-style"
/></div>



<MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/>




<div style={{ height: '600px', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <h3>Card 1</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 2</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
</div> 





<div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>


<h1>circle hai yaha </h1>
 {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
</div> */}


  {/* React bits     */}



<div className=" ml-300 w-300">
<CustomKanban />

</div>



<div className=" w-150">
<ShiftingDropDown />
</div>


<div className=" w-250">
<HoverImageLinks />
</div>



<div className=" w-150">
<DrawCircleText />
</div>
{/* im lonely tab */}

{/* magic ui useless */}

{/* free and open  */}

{/* BuouUi */}

<koko />
<div className="w-300">
<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
</div>
    </div>
  )
}

export default App