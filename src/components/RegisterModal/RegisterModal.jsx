import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";


const RegisterModal = ({ isOpen, handleRegistration, handleTextButton, onClose }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        avatar: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistration(data);
    };

    return (
        <ModalWithForm
            isOpen={isOpen}
            title="Sign up"
            name="register"
            buttonText="Sign up"
            redirectText="or Log in"
            handleTextButton={handleTextButton}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label htmlFor="email" className="modal__label">
                Email{""}
                <input
                    type="email"
                    className="modal__input"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={handleChange}
                    required

                />
            </label>
            <label htmlFor="password" className="modal__label">
                Password{""}
                <input
                    type="password"
                    className="modal__input"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={handleChange}
                    required

                />
            </label>
            <label htmlFor="name" className="modal__label">
                Name{""}
                <input
                    type="text"
                    className="modal__input"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={handleChange}
                    required

                />
            </label>
            <label htmlFor="avatar" className="modal__label">
                Avatar{""}
                <input
                    type="url"
                    className="modal__input"
                    id="avatar"
                    name="avatar"
                    placeholder="Avatar"
                    value={data.avatar}
                    onChange={handleChange}
                    required

                />
            </label>
        </ModalWithForm>
    )
};

export default RegisterModal;
