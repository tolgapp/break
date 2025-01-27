import React, { useEffect, useState } from "react";

const CheckFormat: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCorrectFormat, setIsCorrectFormat] = useState(false);

  const checkFormat = () => {
    const width = window.innerWidth;

    if (width === 390) {
      setIsCorrectFormat(true);
    } else {
      setIsCorrectFormat(false);
    }
  };

  useEffect(() => {
    checkFormat();

    window.addEventListener("resize", checkFormat);

    return () => window.removeEventListener("resize", checkFormat);
  }, []);

  if (!isCorrectFormat) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-black text-white text-center gap-8">
        <img src="/logo/breakwhite.png" alt="break logo white" className="w-32 absolute top-5"/>
        <h2 className="text-3xl w-[65%]">
          Unsupported device dimension. Please use a device with a width of 
          <span className="text-3xl text-red-500 font-semibold"> 390px</span> such as the iPhone 13 Pro.
        </h2>
        <h3 className="text-2xl w-[65%] text-balance">Search for “Mobile Simulator” in the Chrome Web Store.</h3>
        <h3 className="text-white text-2xl">Or click <a className="text-blue-500 text-2xl" href="https://chromewebstore.google.com/detail/mobiler-simulator-%E2%80%93-reakt/ckejmhbmlajgoklhgbapkiccekfoccmk?hl=de" rel="nofollow" target="newtab">here</a></h3>
      </div>
    );
  }

  return <>{children}</>;
};

export default CheckFormat;
