import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import PhoneBar from './components/PhoneBar/PhoneBar'
import PriceList from './components/PriceList/PriceList'

function App() {

  return (
    <div className="App">
     <Navbar></Navbar>
     <h1 className='text-5xl text-purple-700 text-center font-bold py-2'>Welcome to My Tailwind</h1>
     
     <PriceList></PriceList>
     <Dashboard></Dashboard>
     <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
