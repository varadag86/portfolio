import React, { ReactNode } from 'react';
import './layout.component.scss';
import Navbar from '../components/navbar/navbar.component';


interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {

    return (
        <div>
            <Navbar />
            <div className='container'>
                {children}
            </div>
        </div>
    )
}

export default Layout;