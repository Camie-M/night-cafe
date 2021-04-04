import { useState, useEffect } from 'react'

const useResponsive = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const widthResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", widthResize);
    return () => window.removeEventListener("resize", widthResize);
  }, []);

  return { width }
}

export default useResponsive
