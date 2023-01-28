import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './styles.css'
import {FiMenu} from 'react-icons/fi'

function Header(){
    const [menuOpen, setMenuOpen] = useState(true)

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            if(window.innerWidth >= 999){
                setMenuOpen(true)
            }
        })
    }, [])

    return (
        <header>
            <nav >
                <Link className='logo' to="/">Otávio</Link>
                <div className='mobile-menu'>
                    <FiMenu size={30} color='#fff' onClick={()=>{
                        setMenuOpen(!menuOpen)
                    }}/>
                </div>
                {menuOpen && (
                    <ul className='nav-list'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/curriculo">Currículo</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Header