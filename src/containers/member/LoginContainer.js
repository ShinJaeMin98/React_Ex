import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from "../../components/member/LoginForm";

const LoginContainer = () => {
    const { t } = useTranslation();
  
    const [form, setForm] = useState({
      userId: '',
      userPw: '',
    });
  
    const [error, setError] = useState({
      userId: '',
      userPw: '',
      global: '',
    });
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      /* 유효성 검사 S */
      for (const field in form) {
        const value = form[field].trim();
        if (!value) {
          error[field] = t(`required.${field}`);
        }
      }
  
      setError({ ...error });
      /* 유효성 검사 E */
    };
  
    const onChange = (e) => {
      setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
    };
  
    return (
      <LoginForm
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
        error={error}
      />
    );
  };

export default LoginContainer;