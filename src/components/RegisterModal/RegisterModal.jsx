import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";


const RegisterModal = ({ onClose, onRegister, isOpen }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");

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
        onRegister({ email, password, name, avatar });
    };

    useEffect(() => {
        if (isOpen) {
            setEmail("");
            setPassword("");
            setName("");
            setAvatar("");
        }
    }, [isOpen]);

    return (
        <ModalWithForm
            isOpen={isOpen}
            title="Sign up"
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
        </ModalWithForm>
    )
};

export default RegisterModal;
