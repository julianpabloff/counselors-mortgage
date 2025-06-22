import { Outlet } from 'react-router';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';

import '../styles.css';

function Layout() {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;
