'use client'
import Link from 'next/link'
import { Navbar } from 'flowbite-react'
import Image from 'next/image'
import kittyLogo from '@/public/kitty_translate_logo-nobg.png'

const KittyNavBar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href=''>
        <Image
          alt={'kitty translate'}
          src={kittyLogo}
          style={{ width: '3em' }}
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          KittyKat
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href='/'>HOME</Navbar.Link>
        <Navbar.Link href='/about'>ABOUT</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default KittyNavBar
