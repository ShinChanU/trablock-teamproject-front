import { getPlan } from 'redux/modules/plan';
import React, { useEffect } from 'react';
import Block from 'components/Canvas/Block';
import { useDispatch, useSelector } from 'react-redux';

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
      <Block
        plan={plan}
        loadingPlan={loadingPlan}
      />
    </div>
  );
};

export default BuildBlockForm;