import React, { useState, useEffect } from "react";
import "@fontsource/poppins";
import Terminal from "./components/Terminal";
import "react-spinner-animated/dist/index.css";
import LoadingAnimation from "./components/LoadingAnimation";
import NewLine from "./components/NewLine";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-black space-y-5 bg-gradient-to-br from-[#6B6AAE] to-[#8C6AAE] flex h-screen w-screen flex-col justify-center items-center">
          <LoadingAnimation type={"spin"} color={"#1E1E34"} />
          <h1 className="text-lg">Loading...</h1>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-[#6B6AAE] to-[#8C6AAE] w-screen h-screen flex justify-center items-center">
          <div className="bg-[#1E1E34] w-3/4 h-3/4 rounded-lg">
            <div className="bg-[#D9D9D9] w-full h-6 rounded-t-lg flex items-center space-x-2 pl-2">
              <div className="bg-red-600 w-3 h-3 rounded-full flex justify-center items-center"></div>
              <div className="bg-yellow-400 w-3 h-3 rounded-full flex justify-center items-center"></div>
              <div className="bg-green-400 w-3 h-3 rounded-full flex justify-center items-center"></div>
            </div>

            <div className="p-4">
              <h1 className="text-white">Welcome!</h1>
              <NewLine />
              {/* <Terminal /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
