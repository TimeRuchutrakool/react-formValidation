import React, { useState } from 'react'; // for create UI
import ReactDOM from 'react-dom/client'; // for Render
import './index.css'; // for styling

// Form Component
// TASK : ผูก State กับ UI
function Form() {
  // Data State
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Error Message State
  const [errorUserName, setErrorUserName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  // Color State
  const [usernameColor, setUserNameColor] = useState('');
  const [emailColor, setEmailColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Username
    if (username.length >= 8) {
      setErrorUserName('');
      setUserNameColor('green');
    } else {
      setErrorUserName('กรุณาระบุชื่อผู้ใช้งานอย่างน้อย 8 ตัวอักษร');
      setUserNameColor('red');
    }

    // Validate Email
    if (email.includes('@')) {
      setErrorEmail('');
      setEmailColor('green');
    } else {
      setErrorEmail('รูปแบบอีเมลล์ไม่ถูกต้อง');
      setEmailColor('red');
    }

    // Validate Password
    if (password.length >= 8) {
      setErrorPassword('');
    } else {
      setErrorPassword('กรุณาระบุรหัสผ่านอย่างน้อย 8 ตัวอักษร');
    }

    // Validate Confirm Password
    if (password === confirmPassword) {
      setErrorConfirmPassword('');
    } else {
      setErrorConfirmPassword('รหัสผ่านไม่ตรงกัน กรุณาระบุใหม่');
    }
  };
  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        {/* #1 : Username */}
        <div className='form-input'>
          <label>username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: usernameColor }}
          />
          <small style={{ color: usernameColor }}>{errorUserName}</small>
        </div>

        {/* #2 : Email*/}
        <div className='form-input'>
          <label>email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>

        {/* #3 : Password */}
        <div className='form-input'>
          <label>password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <small>{errorPassword}</small>
        </div>

        {/* #4 : Confirm Password */}
        <div className='form-input'>
          <label>confirm-password</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <small>{errorConfirmPassword}</small>
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);

// create : function Form() {}
// render : <Form/>

// Challenge
// - 4 State
// - Validate Library ex JOI, YUP, ReactHookForm, Formik
