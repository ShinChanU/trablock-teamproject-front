import React from 'react';

const CanvasBuildForm = ({ loadingPlan, plan }) => {
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

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
                여행 이름 : {plan.selectedLocations[0].name}<br />
                여행 사진: {
                  // <img src=$
                  plan.selectedLocations[0].image
                  //  /> // 0109
                }
              </li>
            ))}
          </ul>
        )}
      </section>
    </div >
  );
};

export default CanvasBuildForm;