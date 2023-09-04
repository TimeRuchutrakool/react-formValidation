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

  // Error State
  const [errorUserName, setErrorUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Username
    if (username.length >= 8) {
      setErrorUserName('');
    } else {
      setErrorUserName('กรุณาระบุชื่อผู้ใช้งานอย่างน้อย 8 ตัวอักษร');
    }
  };
  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        {/* #1 : Username */}
        <div className='form-input'>
          <label>username</label>
          <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} />
          <small>{errorUserName}</small>
        </div>

        {/* #2 : Email*/}
        <div className='form-input'>
          <label>email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <small>รูปแบบอีเมลล์ไม่ถูกต้อง</small>
        </div>

        {/* #3 : Password */}
        <div className='form-input'>
          <label>password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <small>กรุณาระบุรหัสผ่านอย่างน้อย 8 ตัวอักษร</small>
        </div>

        {/* #4 : Confirm Password */}
        <div className='form-input'>
          <label>confirm-password</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <small>รหัสผ่านไม่ตรงกัน กรุณาระบุใหม่</small>
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
