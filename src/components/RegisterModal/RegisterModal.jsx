import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";


const RegisterModal = ({ isOpen, handleRegistration, handleLoginClick, onClose }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        if (isOpen) {
            setEmail("");
            setPassword("");
            setName("");
            setAvatar("");
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

    const handleNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    };

    const handleAvatarChange = (e) => {
        console.log(e.target.value);
        setAvatar(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistration({ email, password, name, avatar });
    };

    return (
        <ModalWithForm
            isOpen={isOpen}
            title="Sign up"
            name="register"
            buttonText="Sign up"
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label htmlFor="email" className="modal__label">
                Email{""}
                <input
                    type="email"
                    className="modal__input"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </label>
            <label htmlFor="password" className="modal__label">
                Password{""}
                <input
                    type="password"
                    className="modal__input"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </label>
            <label htmlFor="name" className="modal__label">
                Name{""}
                <input
                    type="text"
                    className="modal__input"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
            </label>
            <label htmlFor="avatar" className="modal__label">
                Avatar{""}
                <input
                    type="url"
                    className="modal__input"
                    id="avatar"
                    placeholder="Avatar"
                    value={avatar}
                    onChange={handleAvatarChange}
                    required
                />
            </label>
            <div className="modal__button_container">
                <button type="submit" className="modal__add_submit" onSubmit={handleSubmit}>
                    Sign up
                </button>
                <button type="submit" className="modal__login_submit" onClick={handleLoginClick}>
                    or Login
                </button>
            </div>
        </ModalWithForm>
    )
};

export default RegisterModal;
