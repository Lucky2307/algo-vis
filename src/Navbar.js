import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

function DropdownItem(props) {
    return (
        <li className='dropdownItem'>
            <button className='dropdownBtn dropdownItemBtn' onClick={() => {
                props.setSelected(props.children);
                props.setOpen(false);
                console.log(props.algoId);
            }}>{props.children}</button>
        </li>
    )
}

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'Reverse Linked List',
            open: false,
        }
    }
    setSelected(name) {
        this.setState({ selected: name })
    }
    setOpen(b) {
        this.setState({ open: b })
    }

    render() {
        return (
            <div
                className='dropdownContainer'
                onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                        // Won't run if focused target is of child of current focus
                        this.setOpen(false);
                    }
                }}
            >
                <button
                    className='dropdownBtn'
                    onClick={() => this.setOpen(true)}
                    setSelected={(name) => this.setSelected(name)}
                >{this.state.selected}<FontAwesomeIcon className='dropdownIcon' icon={faCaretDown} /></button>
                {this.state.open ?
                    <div className='dropdownMenu'>
                        <ul>
                            {// Add setSelected function to each children props
                                React.Children.map(this.props.children, child => {
                                    return React.cloneElement(child, { setSelected: (name) => this.setSelected(name), setOpen: (b) => this.setOpen(b) })
                                })}
                        </ul>
                    </div>
                    : ''}

            </div>
        )
    }
}

function Navbar() {
    return <nav className="nav">
        <a href="/" className="navTitle">Algorithm Visualization</a>
        <button className='runBtn'>Run!</button>
        <Dropdown>
            <DropdownItem algoId="reverselink">Rev</DropdownItem>
            <DropdownItem algoId="tree">Treeeeeeeeeeeee</DropdownItem>
            <DropdownItem algoId="tree">Treeeeeeeeeeeee</DropdownItem>
        </Dropdown>
    </nav>
}

export default Navbar;