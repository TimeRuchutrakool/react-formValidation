import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Form Component
function Form() {
  // Data State
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Error Message State
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  // Color State
  const [emailColor, setEmailColor] = useState("");
  const [usernameColor, setUserNameColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Username
    if (username.length >= 8) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("กรุณาระบุชื่อผู้ใช้งานอย่างน้อย 8 ตัวอักษร");
      setUserNameColor("red");
    }

    // Validate Email
    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("รูปแบบอีเมลล์ไม่ถูกต้อง");
      setEmailColor("red");
    }

    // Validate Password
    if (password.length >= 8) {
      setErrorPassword("");
    } else {
      setErrorPassword("กรุณาระบุรหัสผ่านอย่างน้อย 8 ตัวอักษร");
    }

    // Validate Confirm Password
    if (password === confirmPassword) {
      setErrorConfirmPassword("");
    } else {
      setErrorConfirmPassword("รหัสผ่านไม่ตรงกัน กรุณาระบุใหม่");
    }
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        {/* #1 : Username */}
        <UsernameInput
          username={username}
          setUserName={setUserName}
          errorUserName={errorUserName}
          usernameColor={usernameColor}
        />
        {/* #2 : Email*/}
        <EmailInput
          email={email}
          setEmail={setEmail}
          emailColor={emailColor}
          errorEmail={errorEmail}
        />

        {/* #3 : Password */}
        <PasswordInput
          password={password}
          setPassword={setPassword}
          errorPassword={errorPassword}
        />
        {/* #4 : Confirm Password */}
        <ConfirmPasswordInput
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          errorConfirmPassword={errorConfirmPassword}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

function UsernameInput({
  setUserName,
  username,
  usernameColor,
  errorUserName,
}) {
  return (
    <div className="form-input">
      <label>username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        style={{ borderColor: usernameColor }}
      />
      <small style={{ color: usernameColor }}>{errorUserName}</small>
    </div>
  );
}

function EmailInput({ email, emailColor, setEmail, errorEmail }) {
  return (
    <div className="form-input">
      <label>email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ borderColor: emailColor }}
      />
      <small style={{ color: emailColor }}>{errorEmail}</small>
    </div>
  );
}

function PasswordInput({ password, setPassword, errorPassword }) {
  return (
    <div className="form-input">
      <label>password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <small>{errorPassword}</small>
    </div>
  );
}

function ConfirmPasswordInput({
  confirmPassword,
  setConfirmPassword,
  errorConfirmPassword,
}) {
  return (
    <div className="form-input">
      <label>confirm-password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <small>{errorConfirmPassword}</small>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);
