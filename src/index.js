import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import Layout from './routes/Layout.js';
import Home from './routes/Home/Home.js';
import About from './routes/About/About.js';
import Products from './routes/Products/Products.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/counselors-mortgage">
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/*" element={<div></div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
