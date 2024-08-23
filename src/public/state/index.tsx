import { useState } from "react";

export interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  city: string;
}

export const useUserState = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    city: "",
  });

  const [errors, setErrors] = useState<Partial<User>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<User> = {};
    if (!user.name) {
      newErrors.name = "Vui lòng nhập tên của bạn";
    }
    if (!user.email) {
      newErrors.email = "Vui lòng nhập email của bạn";
    }
    if (!user.password) {
      newErrors.password = "Vui lòng nhập mật khẩu của bạn";
    }
    if (!user.confirmPassword) {
      newErrors.confirmPassword = "Vui lòng nhập lại mật khẩu của bạn";
    }
    if (!user.phoneNumber) {
      newErrors.phoneNumber = "Vui lòng nhập số điện thoại của bạn";
    }
    if (!user.city) {
      newErrors.city = "Vui lòng nhập thành phố của bạn";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { user, setUser, handleChange, errors, validateForm };
};
