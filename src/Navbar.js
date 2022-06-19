import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function DropdownItem(props) {
    return (
        <li className='dropdownItem'>
            <a href={props.algoPath} className='dropdownBtn dropdownItemBtn' onClick={() => {
                props.setOpen(false);
                console.log(props.algoId);
            }}>{props.children}</a>
        </li>
    )
}

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            algoPath: window.location.pathname,
            open: false,
        }
    }
    setOpen(b) {
        this.setState({ open: b })
    }

    getName(path) {
        let algoTable = {
            reverselinkedlist: 'Reverse Linked List',
            test: 'Test',
        }
        return algoTable[path.replace('/', '')]
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
                >{this.getName(this.state.algoPath)}<FontAwesomeIcon className='dropdownIcon' icon={faCaretDown} /></button>
                {this.state.open ?
                    <div className='dropdownMenu'>
                        <ul>
                            {// Add setSelected function to each children props
                                React.Children.map(this.props.children, child => {
                                    return React.cloneElement(child, { setOpen: (b) => this.setOpen(b) })
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
            <DropdownItem algoPath="/reverselinkedlist">Reverse Linked List</DropdownItem>
            <DropdownItem algoPath="/test">Test</DropdownItem>
        </Dropdown>
    </nav>
}

export default Navbar;