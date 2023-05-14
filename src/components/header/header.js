import React from "react";
import './header.css';
import { userImg } from '../../assets'

const logoImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png'

const Header = ({ black }) => {
    return (
        <header className={black ? 'scrollBlack' : ''}>
            <div className="logo">
                <a href="#">
                    <img src={logoImg} alt="Netflix Logo"></img>
                </a>
            </div>
            <div className="user">
                <a href="#">
                    <img src={userImg} alt="user"></img>
                </a>
            </div>
        </header>
    )
}

export { Header }