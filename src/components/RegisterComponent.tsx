"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../validation/registerValidation";
import { handleFormData } from "../utils/helpers/registerHandle";
import { useState } from "react";
import { ButtonPassword } from "./ButtonPassword";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleFormData)}>
      <div>
        <div>
          <label htmlFor="fieldgroup-name">Name</label>
          <input
            {...register("name")}
            id="fieldgroup-name"
            placeholder="Jordan Lee"
            type="text"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="fieldgroup-password">
            Password
            <ButtonPassword
              setShowPassword={setShowPassword}
              showPassword={showPassword}
            />
          </label>
          <input
            {...register("password")}
            id="fieldgroup-password"
            placeholder="Digite sua senha"
            type={showPassword ? "text" : "password"}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <label htmlFor="fieldgroup-email">Email</label>
          <input
            {...register("email")}
            id="fieldgroup-email"
            type="text"
            placeholder="name@example.com"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
