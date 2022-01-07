import React from 'react';
import CanvasTemplate from 'components/Canvas/CanvasTemplate';
import BuildBlockForm from 'containers/Canvas/BuildBlockForm';

const BuildBlockPage = () => {
  return (
    <>
      <CanvasTemplate>
        <BuildBlockForm />
      </CanvasTemplate>
    </>
  );
};

export default BuildBlockPage;