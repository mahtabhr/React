
import './App.css'
import Container from './components/Container';
import Flex from './components/Flex';
import { CgAdidas,CgYinyang } from "react-icons/cg";
import { AiFillAndroid } from "react-icons/ai";
import { Camera } from 'lucide-react';
// import { Bike } from 'lucide-react';


function App() {
 

  return (
    <>
    
   <Container>
    <Flex className={'justify-between'}>
      <div className="w-50 h-50 bg-yellow-400">
        <Camera color="black" size={50} />

      </div>
      <div className="w-50 h-50 bg-green-400 ">
        <CgAdidas className={" text-white text-5xl "}/>
        <CgYinyang className={" text-white text-5xl "}/>
        <AiFillAndroid className={" text-white text-5xl "}/>
        </div>
     </Flex>
   </Container>
     
    </>
  )
}

export default App
