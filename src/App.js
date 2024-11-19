import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';
import About from './About';
import Contact from './Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="nav-bar">
                    <nav className="nav">
                        <ul className="nav-middle">
                            <li className="nav-item">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/privacy-policy">Privacy & Policy</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/terms">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div style={{ textAlign: 'center', margin: '20px 0', color: '#2e2e2e', fontSize: '20px' }}>
                                    <p>Welcome to the website!</p>
                                </div>
                            }
                        />

                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms" element={<Terms />} />
                    </Routes>
                </main>

                <footer className="footer">
                    <ul className="nav-middle-down">
                        <li className="nav-item-round">
                            <a href="https://github.com/VolodymyrHusliev" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/github.svg" alt="github" />
                            </a>
                        </li>
                        <li className="nav-item-round">
                            <a href="https://linkedin.com/in/volodymyr-husliev-755473267/" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/linkedin.svg" alt="linkedin" />
                            </a>
                        </li>
                        <li className="nav-item-round">
                            <a href="https://t.me/whoisunicorn" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/telegram.svg" alt="telegram" />
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </Router>
    );
}

export default App;
