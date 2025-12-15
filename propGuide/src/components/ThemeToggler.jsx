import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [Theme, setTheme] = useState("light");

  const ToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = {
    Theme,
    ToggleTheme,
    isDark: Theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(){
  const context =  useContext(ThemeContext)
  return context;
}  

function ThemedCard({title,descrition}) {
  const {isDark} = useTheme();
  return <div className={`${isDark ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-black'}`}>
    <h1 className={`text-2xl font-bold`}>{title}</h1>
    <p className={` text-base font-semibold `}>{descrition}</p>
  </div>
}

function ThemeToggler() {
  const {Theme, ToggleTheme, isDark} = useTheme()

  return <div>
    <h1 className="text-3xl font-bold ">ThemeToggler</h1>
    <div>
      <ThemedCard title='Mehtab Hussain' descrition="Graduate Student making fullstack applications while learning" />
      <ThemedCard title='Rajesh Khanna' descrition="Student making Mobile applications while learning Data Science" />
    </div>
    <button 
      onClick={ToggleTheme}
      type="button"
      className="px-4 py-2 bg-blue-900 text-white font-semibold text-xl cursor-pointer"
    >
      {isDark ? 'Light ⚪' : 'Dark 🌑'}
    </button>

  </div>;
}

export default ThemeToggler;
