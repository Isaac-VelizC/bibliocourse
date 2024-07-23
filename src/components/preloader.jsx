import { useEffect, useState } from 'react';

function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setIsVisible(false), 500); // Espera el tiempo del fadeOut antes de ocultar completamente
      }, 500); // Tiempo antes de iniciar el fadeOut
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    isVisible && (
      <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
        <div className="loader rubix-cube">
          <div className="layer layer-1"></div>
          <div className="layer layer-2"></div>
          <div className="layer layer-3 color-1"></div>
          <div className="layer layer-4"></div>
          <div className="layer layer-5"></div>
          <div className="layer layer-6"></div>
          <div className="layer layer-7"></div>
          <div className="layer layer-8"></div>
        </div>
      </div>
    )
  );
}

export default Preloader;
