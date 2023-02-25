import React, { ReactNode } from 'react';
import Navbar from '../components/navbar/navbar.component';


interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {

    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout;