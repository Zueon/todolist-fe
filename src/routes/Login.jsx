import React from 'react';
import { signin } from '../services/ApiService';

function submitHandler(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const email = data.get('email');
  const password = data.get('password');
  signin({ email, password });
}

const Login = (props) => {
  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form className="login-form" name="login-form" onSubmit={submitHandler}>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <a href="/signup">계정 생성하기</a>
    </div>
  );
};

export default Login;
