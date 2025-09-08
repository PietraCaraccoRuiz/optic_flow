import './App.css'
import Cards from './sections/Cards'
import Hero from './sections/Hero'
import Technologies from './sections/Technologies'
import Team from './sections/Team'

function App() {

  return (
    <>
      <div className='bg-[#131416] overflow-hidden'>
        <Hero />
        <Cards />
        <Technologies />
        <Team />
      </div>
    </>
  )
}

export default App
