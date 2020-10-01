import React from 'react';
import { withRouter } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import {ReactComponent as Github} from '../../assets/github.svg';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import {ReactComponent as Instagram} from '../../assets/instagram.svg';

const Header = () => {

    return (
        <div className='header'>
            <nav className='header__navigation'>
                <NavLink to='/' className='header__logo'>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTM0NC4xNTgiIGhlaWdodD0iMTE2OC40MDkiIHZpZXdCb3g9IjAgMCAxMzQ0LjE1OCAxMTY4LjQwOSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6dXJsKCNhKTt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwLjEyOCIgeTE9IjAuMjQ1IiB4Mj0iMC42MjgiIHkyPSIxLjI0MSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2M5MDYwZCIvPjxzdG9wIG9mZnNldD0iMC4yOTUiIHN0b3AtY29sb3I9IiNmZjRhM2QiLz48c3RvcCBvZmZzZXQ9IjAuNjAzIiBzdG9wLWNvbG9yPSIjZmEwNDA0Ii8+PHN0b3Agb2Zmc2V0PSIwLjYxNSIgc3RvcC1jb2xvcj0iI2Y2MDQwNSIvPjxzdG9wIG9mZnNldD0iMC42ODIiIHN0b3AtY29sb3I9IiNlMTA1MDgiLz48c3RvcCBvZmZzZXQ9IjAuNzU4IiBzdG9wLWNvbG9yPSIjZDMwNjBiIi8+PHN0b3Agb2Zmc2V0PSIwLjg1IiBzdG9wLWNvbG9yPSIjY2IwNjBkIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgwNjBkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yMi45MTQsMTE3NC42OTJhMTcuNTgyLDE3LjU4MiwwLDAsMS03LjcyNS0xLjkzMUExNS4yNzEsMTUuMjcxLDAsMCwxLDkuNCwxMTUxLjkwNkw1NzMuNjc0LDE3NC40NDlsNDU0LjIsNzg3LjA2M0gxMjAzLjYxTDY2NS45ODIsMzAuMDEzYTE1LjI3MSwxNS4yNzEsMCwwLDEsNS43OTMtMjAuODU0LDE0Ljk1MSwxNC45NTEsMCwwLDEsMjAuODU2LDUuNzkzbDU2NC4yNzgsOTc3LjQ1N0gzNDguMTE3bC04Ny42NzMsMTUyLjE2MUgxMzM2LjA4NmExNS40NDgsMTUuNDQ4LDAsMSwxLDAsMzAuOUgyMDcuMTQ0TDMyNS43MTYsOTcwLjAwOWEuMzc4LjM3OCwwLDAsMSwuMzg2LS4zODZMNjYxLjczMywzODguNzg3bC04OC4wNi0xNTIuOTMzTDM2LjA0NiwxMTY2Ljk2OEExNS4wODMsMTUuMDgzLDAsMCwxLDIyLjkxNCwxMTc0LjY5MlpNMzY1Ljg4NCw5NjEuMTI2SDk5Mi43M0w2NzkuNSw0MTguNTI0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcuMzc3IC03LjA1NikiLz48L3N2Zz4=" alt="Logo large" className="header__logo-img" />
                    <div className='header__logo-companyname'>
                        <span className='header__logo-name header__logo-name-1'>FILIP</span>
                        <span className='header__logo-name'>BOSHEVSKI</span>
                    </div>
                </NavLink>
                <ul className='header__item-container'>
                    <li className='header__item'><NavLink activeClassName='header__item-link-active' exact to='/' className='header__item-link'>Home</NavLink></li>
                    <li className='header__item'><NavLink activeClassName='header__item-link-active' exact to='/mywork' className='header__item-link'>My Work</NavLink></li>
                    <li className='header__item'><NavLink activeClassName='header__item-link-active' exact to='/aboutme' className='header__item-link'>About Me</NavLink></li>
                    <li className='header__item'><NavLink activeClassName='header__item-link-active' exact to='/contact' className='header__item-link'>Contact</NavLink></li>
                    <li className='header__item'><NavLink activeClassName='header__item-link-active' exact to='/blog' className='header__item-link'>Blog</NavLink></li>
                    <ul className='header__social-container'>
                        <li className='header__social'>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/filipboshevski' className='header__social-link'>
                                <Github className='header__social-icon'/>
                            </a> 
                        </li>
                        <li className='header__social'>
                            <a target="_blank" rel="noopener noreferrer" href='https://instagram.com/fboshevski' className='header__social-link'>
                                <Instagram className='header__social-icon'/>
                            </a> 
                        </li>
                        <li className='header__social'>
                            <a target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/filip-boshevski-8756a4173' className='header__social-link'>
                                <Linkedin className='header__social-icon'/>
                            </a> 
                        </li>
                    </ul>
                </ul>
            </nav>
            <div className='header__navigation-menu'>
                <div class="navigation">
                    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
                    <label for="navi-toggle" class="navigation__button">
                        <span class="navigation__icon">
                            &nbsp;
                        </span>
                    </label>
                    <div class="navigation__background">&nbsp;</div>

                    <nav class="navigation__nav">
                        <ul class="navigation__list">
                            <li clas="navigation__item u-margin-bottom-1"><Link to='/' class="navigation__link" onClick={() => document.getElementsByClassName('navigation__checkbox')[0].checked = false}>Home</Link></li>
                            <li clas="navigation__item u-margin-bottom-1"><Link to='/mywork' href="#" class="navigation__link" onClick={() => document.getElementsByClassName('navigation__checkbox')[0].checked = false}>My Work</Link></li>
                            <li clas="navigation__item u-margin-bottom-1"><Link to='/aboutme' href="#" class="navigation__link" onClick={() => document.getElementsByClassName('navigation__checkbox')[0].checked = false}>About Me</Link></li>
                            <li clas="navigation__item u-margin-bottom-1"><Link to='contact' href="#" class="navigation__link" onClick={() => document.getElementsByClassName('navigation__checkbox')[0].checked = false}>Contact</Link></li>
                            <li clas="navigation__item u-margin-bottom-1"><Link to='/blog' href="#" class="navigation__link" onClick={() => document.getElementsByClassName('navigation__checkbox')[0].checked = false}>Blog</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header);