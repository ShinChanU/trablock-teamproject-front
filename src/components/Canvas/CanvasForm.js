import React from 'react';
import CanvasBuildForm from 'components/Canvas/CanvasBuildForm';
import styled from 'styled-components';

const CanvasDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70vh;
  /* border: 2px solid black; */
  width: 100vw;
  padding-left: 17.5%;
`;

const textMap = {
  setting: '여행 설정',
  select: '블록 선택',
  build: '여행 캔버스',
  share: '여행 공유'
};

const CanvasForm = ({ type, plan, loadingPlan }) => {
  const text = textMap[type];

  return (
    <CanvasDiv>
      {text}
      {type === 'build' && (
        <CanvasBuildForm
          plan={plan}
          loadingPlan={loadingPlan}
        />
      )}
    </CanvasDiv>
  );
};

export default CanvasForm;