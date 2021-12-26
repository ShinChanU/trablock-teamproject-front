import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signup } from 'redux/modules/auth';
import AuthForm from 'components/Auth/AuthForm';
import { check } from 'redux/modules/user';

const SignupForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.signup, // store이름 auth, auth.signup에(회원 정보 목록 있음)
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = useCallback(e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signup',
        key: name,
        value
      })
    );
  }, [dispatch]);

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { username, password, passwordConfirm, name, nickname, birthday, tel, gender, email } = form;
    dispatch(signup({ username, password, name, nickname, birthday, tel, gender, email }));
    // // 필수항목 중 하나라도 비어 있다면
    // if ([username, password, passwordConfirm, name, nickname, email].includes('')) {
    //   setError('필수항목을 모두 입력해 주세요.');
    //   return;
    // }
    // if (password !== passwordConfirm) { // 패스워드 다르면 오류출력 후 초기화
    //   setError('비밀번호가 일치하지 않습니다.');
    //   changeField({ form: 'signup', key: 'password', value: '' });
    //   changeField({ form: 'signup', key: 'passwordConfirm', value: '' });
    //   return;
    // }
    // dispatch(signup({ username, password, name, nickname, birthday, tel, gender, email }));
  }

  // 컴포넌트가 처음 렌더링될 때 form 초기화
  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      // 아이디가 이미 존재
      if (authError.response.status === 409) {
        setError('이미 존재하는 아이디입니다.');
        return;
      }
      // 기타 이유
      // setError('회원가입 실패');
      // return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      console.log('check API 성공');
      console.log(user);
    }
  }, [user]);

  return (
    <AuthForm
      type="signup"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default SignupForm;