import React, { useEffect, useRef } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        ref?: React.RefObject<HTMLElement>;
        style?: React.CSSProperties;
      };
    }
  }
}

interface SplineBackgroundProps {
  children?: React.ReactNode;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ children }) => {
  const splineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.64/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600">
      {/* Spline 3D Background - Full interactive */}
      <div className="absolute inset-0">
        <spline-viewer
          ref={splineRef}
          url="https://prod.spline.design/oXjJBLx695IfvuKv/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            pointerEvents: 'auto',
          }}
        />
      </div>
      
      {/* Content overlay - only when needed */}
      <div className="relative z-10 pointer-events-none">
        {children}
      </div>
    </div>
  );
};

export default SplineBackground;