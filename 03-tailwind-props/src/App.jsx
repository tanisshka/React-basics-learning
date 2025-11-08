import Card2 from './components/Image'
import { headphonesData } from '../data'
import './App.css'


function App() {

  return (
    <>
    <Card2 {...headphonesData[0]}/>
    <Card2 {...headphonesData[1]}/>
    <Card2 {...headphonesData[2]}/>
    
    </>
  )
}

export default App
