import { useTheme } from '../../context/ThemeContext';
import '../../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <div className="theme-toggle-track">
        <div className={`theme-toggle-thumb ${theme}`}>
          <span className="theme-icon">
            {theme === 'light' ? '☀️' : '🌙'}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;