import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import sun from "../Assets/icons/sun.svg";
import moon from "../Assets/icons/moon.svg";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const icon = isDark ? sun : moon;
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <img src={icon} alt="" width={18} height={18} />
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

export default ThemeToggle;
