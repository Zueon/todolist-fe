import React from 'react';
import { signup } from '../services/ApiService';

const submitHandler = (e) => {
  e.preventDefault();
  console.log('click submit button');
  const data = new FormData(e.target);
  const username = data.get('username');
  const email = data.get('email');
  const password = data.get('password');
  console.log(username, email, password);
  signup({ username, email, password });
};

const Signup = () => {
  return (
    <div className="login-container">
      <h1>계정 생성</h1>
      <form className="login-form" name="login-form" onSubmit={submitHandler}>
        <input type="text" name="username" placeholder="Name" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">SUBMIT</button>
      </form>
      <a href="/login">로그인 화면으로 돌아가기</a>
    </div>
  );
};

export default Signup;
