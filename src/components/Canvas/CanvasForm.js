import React from 'react';
import CanvasBlock from 'components/Canvas/CanvasBlock';

const textMap = {
  setting: '여행 설정',
  select: '블록 선택',
  build: '여행 캔버스',
  share: '여행 공유'
};

const CanvasForm = ({ type, plan, loadingPlan }) => {
  const text = textMap[type];

  return (
    <div>
      CanvasMenu
      {text}
      {type === '여행 캔버스'}
      <CanvasBlock
        plan={plan}
        loadingPlan={loadingPlan}
      />
    </div>
  );
};

export default CanvasForm;