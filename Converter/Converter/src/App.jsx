import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("length");

  const [selectedUnit1, setSelectedUnit1] = useState("cm");
  const [selectedUnit2, setSelectedUnit2] = useState("cm");

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSelectedUnit1 = (e) => {
    setSelectedUnit1(e.target.value);
  };

  const handleSelectedUnit2 = (e) => {
    setSelectedUnit2(e.target.value);
  };

  const unitOptions = {
    length: ["cm", "m", "inch", "mm", "mile", "foot", "km"],
    area: ["cm2", "m2", "inch2", "mm2", "mile2", "foot2", "km2"],
    mass: ["g", "kg", "mg", "ton"],
    temperature: ["C", "F", "K"],
    time: ["sec", "min", "hour", "day", "week", "month", "year"],
    volume: ["ml", "l", "cm3", "m3"],
    speed: ["m/s", "km/h"],
  };

  const renderUnitOptions = (category) => {
    return unitOptions[category].map((unit) => {
      return (
        <option key={unit} value={unit}>
          {unit}
        </option>
      );
    });
  };

  const handleConvert = (e) => {
    const value = e.target.value;
    setInputValue1(value);

    if (selectedCategory === "length") {
      let ans;

      if (selectedUnit1 === "cm" && selectedUnit2 === "cm") {
        ans = value;
      } else if (selectedUnit1 === "cm" && selectedUnit2 === "m") {
        ans = value / 100;
      } else if (selectedUnit1 === "cm" && selectedUnit2 === "inch") {
        ans = value / 2.54;
      } else if (selectedUnit1 === "cm" && selectedUnit2 === "mm") {
        ans = value * 10;
      } else if (selectedUnit1 === "cm" && selectedUnit2 === "mile") {
        ans = value / 160934;
      } else if (selectedUnit1 === "cm" && selectedUnit2 === "foot") {
        ans = value / 30.48;
      } else if (selectedUnit1 === "cm" && selectedUnit2 === "km") {
        ans = value / 100000;
      } else if (selectedUnit1 === "m" && selectedUnit2 === "cm") {
        ans = value * 100;
      } else if (selectedUnit1 === "m" && selectedUnit2 === "m") {
        ans = value;
      } else if (selectedUnit1 === "m" && selectedUnit2 === "inch") {
        ans = value * 39.37;
      } else if (selectedUnit1 === "m" && selectedUnit2 === "mm") {
        ans = value * 1000;
      } else if (selectedUnit1 === "m" && selectedUnit2 === "mile") {
        ans = value / 1609;
      } else if (selectedUnit1 === "m" && selectedUnit2 === "foot") {
        ans = value * 3.281;
      } else if (selectedUnit1 === "m" && selectedUnit2 === "km") {
        ans = value / 1000;
      } else if (selectedUnit1 === "inch" && selectedUnit2 === "cm") {
        ans = value * 2.54;
      } else if (selectedUnit1 === "inch" && selectedUnit2 === "m") {
        ans = value / 39.37;
      } else if (selectedUnit1 === "inch" && selectedUnit2 === "inch") {
        ans = value;
      } else if (selectedUnit1 === "inch" && selectedUnit2 === "mm") {
        ans = value * 25.4;
      } else if (selectedUnit1 === "inch" && selectedUnit2 === "mile") {
        ans = value / 63360;
      } else if (selectedUnit1 === "inch" && selectedUnit2 === "foot") {
        ans = value / 12;
      } else if (selectedUnit1 === "inch" && selectedUnit2 === "km") {
        ans = value / 39370;
      } else if (selectedUnit1 === "mm" && selectedUnit2 === "cm") {
        ans = value;
      } else if (selectedUnit1 === "mm" && selectedUnit2 === "m") {
        ans = value / 1000;
      } else if (selectedUnit1 === "mm" && selectedUnit2 === "inch") {
        ans = value / 25.4;
      } else if (selectedUnit1 === "mm" && selectedUnit2 === "mm") {
        ans = value;
      } else if (selectedUnit1 === "mm" && selectedUnit2 === "mile") {
        ans = value / 1609340;
      } else if (selectedUnit1 === "mm" && selectedUnit2 === "foot") {
        ans = value / 304.8;
      } else if (selectedUnit1 === "mm" && selectedUnit2 === "km") {
        ans = value / 1000000;
      } else if (selectedUnit1 === "mile" && selectedUnit2 === "cm") {
        ans = value * 160934;
      } else if (selectedUnit1 === "mile" && selectedUnit2 === "m") {
        ans = value * 1609;
      } else if (selectedUnit1 === "mile" && selectedUnit2 === "inch") {
        ans = value * 63360;
      } else if (selectedUnit1 === "mile" && selectedUnit2 === "mm") {
        ans = value * 1609340;
      } else if (selectedUnit1 === "mile" && selectedUnit2 === "mile") {
        ans = value;
      } else if (selectedUnit1 === "mile" && selectedUnit2 === "foot") {
        ans = value * 5280;
      } else if (selectedUnit1 === "mile" && selectedUnit2 === "km") {
        ans = value * 1.609;
      } else if (selectedUnit1 === "foot" && selectedUnit2 === "cm") {
        ans = value * 30.48;
      } else if (selectedUnit1 === "foot" && selectedUnit2 === "m") {
        ans = value / 3.281;
      } else if (selectedUnit1 === "foot" && selectedUnit2 === "inch") {
        ans = value * 12;
      } else if (selectedUnit1 === "foot" && selectedUnit2 === "mm") {
        ans = value * 304.8;
      } else if (selectedUnit1 === "foot" && selectedUnit2 === "mile") {
        ans = value / 5280;
      } else if (selectedUnit1 === "foot" && selectedUnit2 === "foot") {
        ans = value;
      } else if (selectedUnit1 === "foot" && selectedUnit2 === "km") {
        ans = value / 3281;
      } else if (selectedUnit1 === "km" && selectedUnit2 === "cm") {
        ans = value * 100000;
      } else if (selectedUnit1 === "km" && selectedUnit2 === "m") {
        ans = value * 1000;
      } else if (selectedUnit1 === "km" && selectedUnit2 === "inch") {
        ans = value * 39370;
      } else if (selectedUnit1 === "km" && selectedUnit2 === "mm") {
        ans = value * 1000000;
      } else if (selectedUnit1 === "km" && selectedUnit2 === "mile") {
        ans = value / 1.609;
      } else if (selectedUnit1 === "km" && selectedUnit2 === "foot") {
        ans = value * 3281;
      } else if (selectedUnit1 === "km" && selectedUnit2 === "km") {
        ans = value;
      }
      setInputValue2(ans);
    } else if (selectedCategory === "area") {
      let ans;

      if (selectedUnit1 === "cm2" && selectedUnit2 === "cm2") {
        ans = value;
      } else if (selectedUnit1 === "cm2" && selectedUnit2 === "m2") {
        ans = value / 10000;
      } else if (selectedUnit1 === "cm2" && selectedUnit2 === "inch2") {
        ans = value / 6.452;
      } else if (selectedUnit1 === "cm2" && selectedUnit2 === "mm2") {
        ans = value * 100;
      } else if (selectedUnit1 === "cm2" && selectedUnit2 === "mile2") {
        ans = value / 2.59e10;
      } else if (selectedUnit1 === "cm2" && selectedUnit2 === "foot2") {
        ans = value / 929;
      } else if (selectedUnit1 === "cm2" && selectedUnit2 === "km2") {
        ans = value / 1e10;
      } else if (selectedUnit1 === "m2" && selectedUnit2 === "cm2") {
        ans = value * 10000;
      } else if (selectedUnit1 === "m2" && selectedUnit2 === "m2") {
        ans = value;
      } else if (selectedUnit1 === "m2" && selectedUnit2 === "inch2") {
        ans = value * 1550;
      } else if (selectedUnit1 === "m2" && selectedUnit2 === "mm2") {
        ans = value * 1e6;
      } else if (selectedUnit1 === "m2" && selectedUnit2 === "mile2") {
        ans = value / 2.59e6;
      } else if (selectedUnit1 === "m2" && selectedUnit2 === "foot2") {
        ans = value * 10.764;
      } else if (selectedUnit1 === "m2" && selectedUnit2 === "km2") {
        ans = value / 1e6;
      } else if (selectedUnit1 === "inch2" && selectedUnit2 === "cm2") {
        ans = value * 6.452;
      } else if (selectedUnit1 === "inch2" && selectedUnit2 === "m2") {
        ans = value / 1550;
      } else if (selectedUnit1 === "inch2" && selectedUnit2 === "inch2") {
        ans = value;
      } else if (selectedUnit1 === "inch2" && selectedUnit2 === "mm2") {
        ans = value * 645.16;
      } else if (selectedUnit1 === "inch2" && selectedUnit2 === "mile2") {
        ans = value / 4e9;
      } else if (selectedUnit1 === "inch2" && selectedUnit2 === "foot2") {
        ans = value / 144;
      } else if (selectedUnit1 === "inch2" && selectedUnit2 === "km2") {
        ans = value / 1.55e7;
      } else if (selectedUnit1 === "mm2" && selectedUnit2 === "cm2") {
        ans = value / 100;
      } else if (selectedUnit1 === "mm2" && selectedUnit2 === "m2") {
        ans = value / 1e6;
      } else if (selectedUnit1 === "mm2" && selectedUnit2 === "inch2") {
        ans = value / 645.16;
      } else if (selectedUnit1 === "mm2" && selectedUnit2 === "mm2") {
        ans = value;
      } else if (selectedUnit1 === "mm2" && selectedUnit2 === "mile2") {
        ans = value / 2.59e9;
      } else if (selectedUnit1 === "mm2" && selectedUnit2 === "foot2") {
        ans = value / 92903;
      } else if (selectedUnit1 === "mm2" && selectedUnit2 === "km2") {
        ans = value / 1e12;
      } else if (selectedUnit1 === "mile2" && selectedUnit2 === "cm2") {
        ans = value * 2.59e10;
      } else if (selectedUnit1 === "mile2" && selectedUnit2 === "m2") {
        ans = value * 2.59e6;
      } else if (selectedUnit1 === "mile2" && selectedUnit2 === "inch2") {
        ans = value * 4e9;
      } else if (selectedUnit1 === "mile2" && selectedUnit2 === "mm2") {
        ans = value * 2.59e9;
      } else if (selectedUnit1 === "mile2" && selectedUnit2 === "mile2") {
        ans = value;
      } else if (selectedUnit1 === "mile2" && selectedUnit2 === "foot2") {
        ans = value * 2.79e7;
      } else if (selectedUnit1 === "mile2" && selectedUnit2 === "km2") {
        ans = value * 2.59;
      } else if (selectedUnit1 === "foot2" && selectedUnit2 === "cm2") {
        ans = value * 929;
      } else if (selectedUnit1 === "foot2" && selectedUnit2 === "m2") {
        ans = value / 10.764;
      } else if (selectedUnit1 === "foot2" && selectedUnit2 === "inch2") {
        ans = value * 144;
      } else if (selectedUnit1 === "foot2" && selectedUnit2 === "mm2") {
        ans = value * 92903;
      } else if (selectedUnit1 === "foot2" && selectedUnit2 === "mile2") {
        ans = value / 2.79e7;
      } else if (selectedUnit1 === "foot2" && selectedUnit2 === "foot2") {
        ans = value;
      } else if (selectedUnit1 === "foot2" && selectedUnit2 === "km2") {
        ans = value / 107639;
      } else if (selectedUnit1 === "km2" && selectedUnit2 === "cm2") {
        ans = value * 1e10;
      } else if (selectedUnit1 === "km2" && selectedUnit2 === "m2") {
        ans = value * 1e6;
      } else if (selectedUnit1 === "km2" && selectedUnit2 === "inch2") {
        ans = value * 1.55e7;
      } else if (selectedUnit1 === "km2" && selectedUnit2 === "mm2") {
        ans = value * 1e12;
      } else if (selectedUnit1 === "km2" && selectedUnit2 === "mile2") {
        ans = value / 2.59;
      } else if (selectedUnit1 === "km2" && selectedUnit2 === "foot2") {
        ans = value * 107639;
      } else if (selectedUnit1 === "km2" && selectedUnit2 === "km2") {
        ans = value;
      }
      setInputValue2(ans);
    } else if (selectedCategory === "mass") {
      let ans;

      if (selectedUnit1 === "g" && selectedUnit2 === "g") {
        ans = value;
      } else if (selectedUnit1 === "g" && selectedUnit2 === "kg") {
        ans = value / 1000;
      } else if (selectedUnit1 === "g" && selectedUnit2 === "mg") {
        ans = value * 1000;
      } else if (selectedUnit1 === "g" && selectedUnit2 === "ton") {
        ans = value / 1e6;
      } else if (selectedUnit1 === "kg" && selectedUnit2 === "g") {
        ans = value * 1000;
      } else if (selectedUnit1 === "kg" && selectedUnit2 === "kg") {
        ans = value;
      } else if (selectedUnit1 === "kg" && selectedUnit2 === "mg") {
        ans = value * 1e6;
      } else if (selectedUnit1 === "kg" && selectedUnit2 === "ton") {
        ans = value / 1000;
      } else if (selectedUnit1 === "mg" && selectedUnit2 === "g") {
        ans = value / 1000;
      } else if (selectedUnit1 === "mg" && selectedUnit2 === "kg") {
        ans = value / 1e6;
      } else if (selectedUnit1 === "mg" && selectedUnit2 === "mg") {
        ans = value;
      } else if (selectedUnit1 === "mg" && selectedUnit2 === "ton") {
        ans = value / 1e9;
      } else if (selectedUnit1 === "ton" && selectedUnit2 === "g") {
        ans = value * 1e6;
      } else if (selectedUnit1 === "ton" && selectedUnit2 === "kg") {
        ans = value * 1000;
      } else if (selectedUnit1 === "ton" && selectedUnit2 === "mg") {
        ans = value * 1e9;
      } else if (selectedUnit1 === "ton" && selectedUnit2 === "ton") {
        ans = value;
      }
      setInputValue2(ans);
    } else if (selectedCategory === "temperature") {
      let ans;

      if (selectedUnit1 === "C" && selectedUnit2 === "C") {
        ans = value;
      } else if (selectedUnit1 === "C" && selectedUnit2 === "F") {
        ans = (value * 9) / 5 + 32;
      } else if (selectedUnit1 === "C" && selectedUnit2 === "K") {
        ans = value + 273.15;
      } else if (selectedUnit1 === "F" && selectedUnit2 === "C") {
        ans = ((value - 32) * 5) / 9;
      } else if (selectedUnit1 === "F" && selectedUnit2 === "F") {
        ans = value;
      } else if (selectedUnit1 === "F" && selectedUnit2 === "K") {
        ans = ((value - 32) * 5) / 9 + 273.15;
      } else if (selectedUnit1 === "K" && selectedUnit2 === "C") {
        ans = value - 273.15;
      } else if (selectedUnit1 === "K" && selectedUnit2 === "F") {
        ans = ((value - 273.15) * 9) / 5 + 32;
      } else if (selectedUnit1 === "K" && selectedUnit2 === "K") {
        ans = value;
      }
      setInputValue2(ans);
    } else if (selectedCategory === "time") {
      let ans;

      if (selectedUnit1 === "sec" && selectedUnit2 === "sec") {
        ans = value;
      } else if (selectedUnit1 === "sec" && selectedUnit2 === "min") {
        ans = value / 60;
      } else if (selectedUnit1 === "sec" && selectedUnit2 === "hour") {
        ans = value / 3600;
      } else if (selectedUnit1 === "sec" && selectedUnit2 === "day") {
        ans = value / 86400;
      } else if (selectedUnit1 === "sec" && selectedUnit2 === "week") {
        ans = value / 604800;
      } else if (selectedUnit1 === "sec" && selectedUnit2 === "month") {
        ans = value / 2.628e6;
      } else if (selectedUnit1 === "sec" && selectedUnit2 === "year") {
        ans = value / 3.154e7;
      } else if (selectedUnit1 === "min" && selectedUnit2 === "sec") {
        ans = value * 60;
      } else if (selectedUnit1 === "min" && selectedUnit2 === "min") {
        ans = value;
      } else if (selectedUnit1 === "min" && selectedUnit2 === "hour") {
        ans = value / 60;
      } else if (selectedUnit1 === "min" && selectedUnit2 === "day") {
        ans = value / 1440;
      } else if (selectedUnit1 === "min" && selectedUnit2 === "week") {
        ans = value / 10080;
      } else if (selectedUnit1 === "min" && selectedUnit2 === "month") {
        ans = value / 43800;
      } else if (selectedUnit1 === "min" && selectedUnit2 === "year") {
        ans = value / 525600;
      } else if (selectedUnit1 === "hour" && selectedUnit2 === "sec") {
        ans = value * 3600;
      } else if (selectedUnit1 === "hour" && selectedUnit2 === "min") {
        ans = value * 60;
      } else if (selectedUnit1 === "hour" && selectedUnit2 === "hour") {
        ans = value;
      } else if (selectedUnit1 === "hour" && selectedUnit2 === "day") {
        ans = value / 24;
      } else if (selectedUnit1 === "hour" && selectedUnit2 === "week") {
        ans = value / 168;
      } else if (selectedUnit1 === "hour" && selectedUnit2 === "month") {
        ans = value / 730;
      } else if (selectedUnit1 === "hour" && selectedUnit2 === "year") {
        ans = value / 8760;
      } else if (selectedUnit1 === "day" && selectedUnit2 === "sec") {
        ans = value * 86400;
      } else if (selectedUnit1 === "day" && selectedUnit2 === "min") {
        ans = value * 1440;
      } else if (selectedUnit1 === "day" && selectedUnit2 === "hour") {
        ans = value * 24;
      } else if (selectedUnit1 === "day" && selectedUnit2 === "day") {
        ans = value;
      } else if (selectedUnit1 === "day" && selectedUnit2 === "week") {
        ans = value / 7;
      } else if (selectedUnit1 === "day" && selectedUnit2 === "month") {
        ans = value / 30.417;
      } else if (selectedUnit1 === "day" && selectedUnit2 === "year") {
        ans = value / 365;
      } else if (selectedUnit1 === "week" && selectedUnit2 === "sec") {
        ans = value * 604800;
      } else if (selectedUnit1 === "week" && selectedUnit2 === "min") {
        ans = value * 10080;
      } else if (selectedUnit1 === "week" && selectedUnit2 === "hour") {
        ans = value * 168;
      } else if (selectedUnit1 === "week" && selectedUnit2 === "day") {
        ans = value * 7;
      } else if (selectedUnit1 === "week" && selectedUnit2 === "week") {
        ans = value;
      } else if (selectedUnit1 === "week" && selectedUnit2 === "month") {
        ans = value / 4.345;
      } else if (selectedUnit1 === "week" && selectedUnit2 === "year") {
        ans = value / 52.143;
      } else if (selectedUnit1 === "month" && selectedUnit2 === "sec") {
        ans = value * 2.628e6;
      } else if (selectedUnit1 === "month" && selectedUnit2 === "min") {
        ans = value * 43800;
      } else if (selectedUnit1 === "month" && selectedUnit2 === "hour") {
        ans = value * 730;
      } else if (selectedUnit1 === "month" && selectedUnit2 === "day") {
        ans = value * 30.417;
      } else if (selectedUnit1 === "month" && selectedUnit2 === "week") {
        ans = value * 4.345;
      } else if (selectedUnit1 === "month" && selectedUnit2 === "month") {
        ans = value;
      } else if (selectedUnit1 === "month" && selectedUnit2 === "year") {
        ans = value / 12;
      } else if (selectedUnit1 === "year" && selectedUnit2 === "sec") {
        ans = value;
      } else if (selectedUnit1 === "year" && selectedUnit2 === "min") {
        ans = value * 525600;
      } else if (selectedUnit1 === "year" && selectedUnit2 === "hour") {
        ans = value * 8760;
      } else if (selectedUnit1 === "year" && selectedUnit2 === "day") {
        ans = value * 365;
      } else if (selectedUnit1 === "year" && selectedUnit2 === "week") {
        ans = value * 52.143;
      } else if (selectedUnit1 === "year" && selectedUnit2 === "month") {
        ans = value * 12;
      } else if (selectedUnit1 === "year" && selectedUnit2 === "year") {
        ans = value;
      }
      setInputValue2(ans);
    } else if (selectedCategory === "volume") {
      let ans;

      if (selectedUnit1 === "ml" && selectedUnit2 === "ml") {
        ans = value;
      } else if (selectedUnit1 === "ml" && selectedUnit2 === "l") {
        ans = value / 1000;
      } else if (selectedUnit1 === "ml" && selectedUnit2 === "cm3") {
        ans = value;
      } else if (selectedUnit1 === "ml" && selectedUnit2 === "m3") {
        ans = value / 1e6;
      } else if (selectedUnit1 === "l" && selectedUnit2 === "ml") {
        ans = value * 1000;
      } else if (selectedUnit1 === "l" && selectedUnit2 === "l") {
        ans = value;
      } else if (selectedUnit1 === "l" && selectedUnit2 === "cm3") {
        ans = value * 1000;
      } else if (selectedUnit1 === "l" && selectedUnit2 === "m3") {
        ans = value / 1000;
      } else if (selectedUnit1 === "cm3" && selectedUnit2 === "ml") {
        ans = value;
      } else if (selectedUnit1 === "cm3" && selectedUnit2 === "l") {
        ans = value / 1000;
      } else if (selectedUnit1 === "cm3" && selectedUnit2 === "cm3") {
        ans = value;
      } else if (selectedUnit1 === "cm3" && selectedUnit2 === "m3") {
        ans = value / 1e6;
      } else if (selectedUnit1 === "m3" && selectedUnit2 === "ml") {
        ans = value * 1e6;
      } else if (selectedUnit1 === "m3" && selectedUnit2 === "l") {
        ans = value * 1000;
      } else if (selectedUnit1 === "m3" && selectedUnit2 === "cm3") {
        ans = value * 1e6;
      } else if (selectedUnit1 === "m3" && selectedUnit2 === "m3") {
        ans = value;
      }
      setInputValue2(ans);
    } else if (selectedCategory === "speed") {
      let ans;

      if (selectedUnit1 === "m/s" && selectedUnit2 === "m/s") {
        ans = value;
      } else if (selectedUnit1 === "m/s" && selectedUnit2 === "km/h") {
        ans = value * 3.6;
      } else if (selectedUnit1 === "km/h" && selectedUnit2 === "m/s") {
        ans = value / 3.6;
      } else if (selectedUnit1 === "km/h" && selectedUnit2 === "km/h") {
        ans = value;
      }
      setInputValue2(ans);
    }
  };

  return (
    <>
      <div className="w-80 h-80  flex-row-reverse justify-center items-center border-2 border-zinc-600 bg-custom-black rounded-3xl ml-auto mr-auto mb-auto mt-40 ">
        <div className="units m-10 mb-10">
          <select
            onChange={handleCategoryChange}
            name="unit"
            id="unit"
            className="border-2 border-zinc-600 rounded-md w-44 bg-custom-black-2 text-white"
          >
            <option value="length">Length</option>
            <option value="area">Area</option>
            <option value="mass">Mass</option>
            <option value="temperature">Temperature</option>
            <option value="time">Time</option>
            <option value="volume">Volume</option>
            <option value="speed">Speed</option>
          </select>
        </div>

        <div className="w-full h-screen flex-row-reverse mt-10 ">
          <div className="Textfields flex gap-4 justify-center items-center mb-6">
            <input
              onChange={handleConvert}
              value={inputValue1}
              type="text"
              className="border-2 border-zinc-600 rounded-md"
            />

            <select
              onChange={handleSelectedUnit1}
              name="unit"
              id="unit"
              className="border-2 border-zinc-600 rounded-md w-16 bg-custom-black-2 text-white"
            >
              {renderUnitOptions(selectedCategory)}
            </select>
          </div>

          <div className="Textfields flex gap-4 justify-center items-center mt-6">
            <input
              type="text"
              value={inputValue2}
              className="border-2 border-zinc-600 rounded-md"
            />

            <select
              onChange={handleSelectedUnit2}
              name="unit"
              id="unit"
              className="border-2 border-zinc-600 rounded-md w-16 bg-custom-black-2 text-white"
            >
              {renderUnitOptions(selectedCategory)}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
