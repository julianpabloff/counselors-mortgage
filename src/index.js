import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import Layout from './routes/Layout.js';
import Home from './routes/Home/Home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="counselors-mortgage" element={<Home/>}/>
                    <Route path="counselors-mortgage/*" element={<div>404</div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
