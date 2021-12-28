import React from 'react';
import Header from 'components/Base/Header';
import { useSelector } from 'react-redux';

const HeaderContainer = () => {
  const { userState } = useSelector(({ user }) => ({
    userState: user.userState
  }));

  return (
    <Header user={userState} />
  );
};

export default HeaderContainer;