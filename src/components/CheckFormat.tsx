import React, { useEffect, useState } from 'react';

const CheckFormat: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCorrectFormat, setIsCorrectFormat] = useState(false);

  const checkFormat = () => {
    const width = window.innerWidth;

    if (width >= 360 && width <= 430) {
      setIsCorrectFormat(true);
    } else {
      setIsCorrectFormat(false);
    }
  };

  useEffect(() => {
    checkFormat();

    window.addEventListener('resize', checkFormat);

    return () => window.removeEventListener('resize', checkFormat);
  }, []);

  if (!isCorrectFormat) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-black to-slate-800 text-white text-center gap-8 p-4">
        <img
          src="/logo/breakwhite.png"
          alt="break logo white"
          className="w-32 mb-6"
        />
        <h2 className="text-3xl font-semibold leading-tight w-[70%] md:w-[60%]">
          Unsupported Device Dimensions!
        </h2>
        <p className="text-xl md:text-2xl w-[80%] mb-4">
          This app is designed for devices with a screen width between{' '}
          <strong>370px</strong> and <strong>430px</strong>.
        </p>
        <h3 className="text-lg mb-4">
          For the best experience, try using a mobile simulator or adjust your
          device width.
        </h3>
        <div className="flex flex-col items-center gap-3">
          <a
            href="https://chromewebstore.google.com/detail/mobiler-simulator-%E2%80%93-reakt/ckejmhbmlajgoklhgbapkiccekfoccmk?hl=de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-400 hover:text-blue-600 transition-colors"
          >
            Download Mobile Simulator
          </a>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors mt-4"
          >
            Reload to Check
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default CheckFormat;
