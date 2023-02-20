import { Button, IconButton } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Navbar.css'
import { useState } from 'react'


const Navbar = () => {

    const [auth , setAuth] = useState(false)
    
    const [isMenuOpen, setisMenuOpen] = useState(false)
    // const[sideNavTransition, setsideNavTransition ] = useState(false)
    // const handleSideNav = () => {
    //     setsideNavTransition(!sideNavTransition) 
        
        

    // }
  return (
    <>
    <nav className="navbar">
        <div className="logo">
            <div >
                <img className="logoimg" src="logo.png" alt="" />
            </div>
            <div className="logoText">
                
                    CodeFun
                
            </div>
        </div>
        <div className="links">
            <ul className="navigation-links">
                <Link to={'/home'} style = {{textDecoration:'none' ,color:'white'}}><li className="link">Home</li></Link>
                
                <li className="link">About</li>
                <li className="link">Contact</li>
                <li className="link">Projects</li>
            </ul>
        </div>

        <div className="nav-btns">
            {auth ? <Button variant='contained' sx={{borderRadius:'10px'}} size='small' >logout</Button> :
            <Button variant='contained' sx={{borderRadius:'10px'}} size='small' component={Link} to = {'/'}>Login</Button>
            }
            
            
        </div>

        <div className="menu">
            <IconButton aria-label='menu' size='large' sx={{color:'white'}} onClick = {()=>setisMenuOpen(!isMenuOpen)  }>
                {
                    isMenuOpen ? <CloseOutlinedIcon />  :  <MenuOutlinedIcon  />
                }
            
            </IconButton>

          
            
        </div>
        {
                isMenuOpen && (
                    <>
                   
                        <div className="sideNav">
        
                        <div className="sideNav-links">
                        <Link to={'/home'} style = {{textDecoration:'none' , color:'white'}}>
                            <li className="sideNavlink">Home</li>
                        </Link>
                            <li className="sideNavlink">About</li>
                            <li className="sideNavlink">Contact</li>
                            <li className="sideNavlink">Projects</li>
                            
                        </div>

                        <div className="sideNav-btns">
                        {auth ? <Button variant='contained' sx={{borderRadius:'10px'}} size='small' >logout</Button> :
                        <Button variant='contained' sx={{borderRadius:'10px'}} size='small' component={Link} to = {'/'}>Login</Button>
            
                        }
                        {
                            !auth ? <Button variant='contained' sx={{borderRadius:'10px'}} size='small' component={Link} to = {'/'}>Register</Button> : ""
                        }

                        </div>
                        </div>
                    
                    </>
                )
            }




    </nav>
    
    
    </>
  )
}

export default Navbar