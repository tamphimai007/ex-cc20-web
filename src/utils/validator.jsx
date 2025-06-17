// Validate
import { object, string, ref } from "yup";

export const registerSchema = object({
  email: string().email("รูปแบบ Email ไม่ถูกต้อง").required("กรุณากรอก Email"),
  name: string().min(3, "Name อักขระต้องมากกว่า 3"),
  password: string().min(6, "Password อักขระต้องมากกว่า 6"),
  confirmPassword: string().oneOf([ref("password")], "Password not match!!"),
});

export const loginSchema = object({
  email: string().email("รูปแบบ Email ไม่ถูกต้อง").required("กรุณากรอก Email"),
  password: string().min(6, "Password อักขระต้องมากกว่า 6"),
});
