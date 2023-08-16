"use client"

import Link from "next/link"
import  Image  from 'next/image';
import {useState} from "react" ;


import { NavLinks } from "@/constant";
import AuthProviders from './AuthProviders';
import CustomButton from "./Button"


 
const Navbar = () => {
  const [session ,useSession] = useState({})
  // const session = null
  
  return (
    <nav className="flexBetween  p-4 md:px-10 "> 


    <div className="flex-1 flexStart gap-10 ">
      <Link href="/">
        {/* <Image
        src ="/logo.svg"
        width={230}
        height={330}
        /> */}
        <h2 className="md:text-[2rem] text-[1.3rem] font-bold text-violet-600" >Vishnu Shares</h2>
      </Link>

      <ul className='xl:flex hidden text-medium gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
      </ul>

      
    </div>

    <div className="flexCenter gap-4">

      {session ? (
        <>
        User Photo

        <Link href="/create-project">
              <CustomButton title='Share work' />
        </Link>
        
        
        </>
      
      ):(
        <AuthProviders/>
      )}


    </div>
    
    </nav>
  )
}

export default Navbar