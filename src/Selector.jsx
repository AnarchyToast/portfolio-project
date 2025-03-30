import React from 'react';
import './App.css';

const Selector = ({ activeView, onViewChange, isOpen, onToggle }) => {
    return (
        <>
            <button className="menu-toggle" onClick={onToggle}>
                <span className="hamburger">☰</span>
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>Stock Analysis</h2>
                    <button className="close-button" onClick={onToggle}>×</button>
                </div>
                <nav className="sidebar-nav">
                    <button 
                        className={`nav-item ${activeView === 'stock' ? 'active' : ''}`}
                        onClick={() => {
                            onViewChange('stock');
                            onToggle();
                        }}
                    >
                        <span className="icon">📈</span>
                        Stock Data
                    </button>
                    <button 
                        className={`nav-item ${activeView === 'hedge' ? 'active' : ''}`}
                        onClick={() => {
                            onViewChange('hedge');
                            onToggle();
                        }}
                    >
                        <span className="icon">🔄</span>
                        Hedge Analysis
                    </button>
                </nav>
            </div>
        </>
    );
};

export default Selector;
