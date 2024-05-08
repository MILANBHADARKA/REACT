import "./App.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {     //give same name to the function as the name of the function in the theme.js file
    setThemeMode('dark');
  }

  const lightTheme = () => {     //give same name to the function as the name of the function in the theme.js file
    setThemeMode('light');
  }

  //actual change in theme

  useEffect( () => {
    document.querySelector('html').classList.remove('dark','light');

    document.querySelector('html').classList.add(themeMode);
  } , [themeMode])



  return (
    //pass the values to the components and name of the function should be same as the name of the function in the theme.js file
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>    
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
