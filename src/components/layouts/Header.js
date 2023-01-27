import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

function Header(){
    return (
        <header>
            <nav >
                <Link className='logo' to="/">Otávio</Link>
                <ul className='nav-list'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/curriculo">Currículo</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header