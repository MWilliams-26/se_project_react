import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const  RegisterModal = ({ onClose, onRegister, isOpen }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
}

