import * as React from 'react';
import { Navbar } from 'react-bootstrap';

interface HeaderProps {
    title: string,
    link: string
}

const Header: React.SFC<HeaderProps> = ({ title, link }) => (
    <Navbar inverse staticTop>
        <Navbar.Header>
            <Navbar.Brand>
                <a href={link} target="_blank">
                    { title }
                </a>
            </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
    </Navbar>
)
    
export default Header;