import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  
  Cryptocurrencies,
  News,
  CryptoDetails,
  HomePage,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              {/* <Route path="/exchanges" element={<Exchanges />} /> */}
              <Route path="/" element={<HomePage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            className="footer"
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto World by Shashank Singhania <br />
            All right reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            {/* <Link to="/exchanges">Exchanges</Link> */}
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
