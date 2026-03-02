import React from 'react'
import Container from '../Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import logo from '/src/assets/Logo.png'
import { BsJustify } from 'react-icons/bs'
import Button from '../common/Button'
import { Link } from 'react-router-dom'
// import { Link, Links } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-green-400 py-2">
      <Container>
        <Flex className={"justify-between"}>
           <div className="">
            <Link to={"/"}> <Image imgSrc={logo}/></Link>
          
          </div>
          <div className="">
            <ul className="flex items-center gap-4">
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr"><Link to={"about"}>About</Link></li>
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr"><Link to={"/"}>Service</Link></li>
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr"><Link to={"/"}>Portfolio</Link></li>
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr"><Link to={"/"}>Price</Link></li>
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr"><Link to={"/"}>Blog</Link></li>
            </ul>
          </div>
          <div className="">
            <Button btnTxt={"Contact Us"}/>
          </div>
        </Flex>
         
        
      </Container>
    </div>
  )
}

export default Header








