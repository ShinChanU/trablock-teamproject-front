import { getPlan } from 'redux/modules/plan';
import React, { useEffect } from 'react';
// import CanvasBlock from 'components/Canvas/CanvasBlock';
import { useDispatch, useSelector } from 'react-redux';
import CanvasForm from 'components/Canvas/CanvasForm';

const BuildBlockForm = () => {
  const dispatch = useDispatch();
  const { plan, loadingPlan } = useSelector(({ plan, loading }) => ({
    plan: plan.plan,
    loadingPlan: loading['plan/GET_PLAN']
  }))

  useEffect(() => {
    dispatch(getPlan());
  }, [dispatch])

  return (
    <div>
      <CanvasForm
        type="build"
        plan={plan}
        loadingPlan={loadingPlan}
      />
    </div>
  );
};

export default BuildBlockForm;