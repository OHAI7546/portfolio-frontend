import React from 'react';

const ThemeToggle = ({ toggleTheme, isDark }) => (
  <button onClick={toggleTheme} className="theme-toggle">
    {isDark ? '☀️ Light' : '🌙 Dark'}
  </button>
);

export default ThemeToggle;