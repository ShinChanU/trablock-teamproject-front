import React from 'react';
import CanvasMenu from './CanvasMenu';

const CanvasTemplate = ({ children }) => {
  return (
    <div>
      <CanvasMenu />{children}
    </div>
  );
};

export default CanvasTemplate;