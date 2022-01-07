import React from 'react';
// import user from 'redux/modules/user';

const CanvasBlock = ({ loadingPlan, plan }) => {
  console.log(plan);

  return (
    <div>
      <section>
        <h1>api test</h1>
        {loadingPlan && '로딩 중..'}
        {!loadingPlan && plan && (
          <ul>
            {plan.map(plan => (
              <li key={plan.id}>
                여행 이름 : {plan.name}<br />
                여행 기간: {plan.periods}일
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default CanvasBlock;