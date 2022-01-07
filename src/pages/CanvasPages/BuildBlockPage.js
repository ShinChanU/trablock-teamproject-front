import React from 'react';
import BuildBlockForm from 'containers/Canvas/BuildBlockForm';
import CanvasTemplate from 'components/Canvas/CanvasTemplate';

const BuildBlockPage = () => {
  return (
    <>
      <CanvasTemplate>
        <BuildBlockForm />
      </CanvasTemplate>
      {/* 여행 캔버스 페이지입니다. */}
    </>
  );
};

export default BuildBlockPage;