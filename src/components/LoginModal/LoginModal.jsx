import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen])

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({email, password});
  };

  return (
    <ModalWithForm
      title="Log in"
      name="login"
      buttonText="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <div className="modal__button_container">
        <button type="submit" className="modal__add_submit">
        Log in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;