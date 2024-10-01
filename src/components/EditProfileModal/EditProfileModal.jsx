import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, onClose, updateUserProfile, token }) => {
  const currentUser = useContext(CurrentUserContext);
  const [data, setData] = useState({
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
    updateUserProfile({ name, avatar, token });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Change profile data"
      name="edit-profile"
      buttonText="Save changes"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={data.name}
          name="name"
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

export default EditProfileModal;
