import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
class DropdownItem extends React.Component {
    render() {
        return
    }
}

class Dropdown extends React.Component {
    render() {
        return
    }
}

function Navbar() {
    return <nav className="nav">
        <a href="/" className="navTitle">Algorithm Visualization</a>
        <button className='runBtn'>Run!</button>
        <div className='dropdownContainer'>
            <button className='dropdownBtn'>Reverse Linked List <FontAwesomeIcon icon={faCaretDown} /></button>
        </div>
    </nav>
}

export default Navbar;