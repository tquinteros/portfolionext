import React, { useEffect, useState } from 'react';

const Loader = () => {
//   const [loadingProgress, setLoadingProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLoadingProgress(prevProgress => {
//         const newProgress = prevProgress + (100 / 120);
//         return newProgress >= 100 ? 100 : newProgress;
//       });
//     }, 16.67);

//     const handleLoad = () => {
//       clearInterval(interval);
//       setLoadingProgress(100);
//     };

//     window.addEventListener('DOMContentLoaded', handleLoad);

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener('DOMContentLoaded', handleLoad);
//     };
//   }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="mt-4 text-lg font-bold">Cargando...</p>
      {/* <div className="w-[50%] h-4 bg-gray-200 rounded-full mt-2">
        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${loadingProgress}%` }}></div>
      </div> */}
    </div>
  );
};

export default Loader;