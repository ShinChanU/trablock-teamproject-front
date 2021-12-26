import React from 'react';
import Header, { LoginButton } from 'components/Base/Header';
import { useSelector } from 'react-redux';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user
  }));

  return (
    <Header>
      <LoginButton user={user} />
    </Header>
  );
};

export default HeaderContainer;