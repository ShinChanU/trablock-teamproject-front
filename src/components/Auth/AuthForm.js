import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from 'lib/styles/palette';
import Button from 'components/common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0px;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size:1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width:100%;
  &:focus {
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top:1rem;
  }
;`

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWidthMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  signup: '회원가입'
}

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'signup' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWidthMarginTop cyan fullWidth>
          {text}
        </ButtonWidthMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="../signup">회원가입</Link>
        ) : (
          <Link to="../login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;