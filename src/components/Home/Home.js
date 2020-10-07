import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    Qr code PWA app
    <p><Link className="App-link" to="/read">Read Qr Code</Link></p>
    <p><Link className="App-link" to="/print">Print Qr Code</Link></p>
  </div>
);
