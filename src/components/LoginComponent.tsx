"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../validation/loginValidation";
import { handleFormData } from "../utils/helpers/loginHandle";
import { Mail, LockIcon } from "lucide-react";
import { ButtonPassword } from "./ButtonPassword";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleFormData)}>
      <div>
        <div>
          <label
            className="mb-2 font-semibold  text-sm"
            htmlFor="fieldgroup-name"
          >
            Endereço de Email
          </label>
          <div className="flex align-center justify-center mb-2 mt-2 p-2 bg-gray-200  gap-2  rounded-md  ">
            <Mail className="text-black/50 w-5 h-6 " />
            <input
              className="outline-none border-none flex-1"
              {...register("email")}
              id="fieldgroup-name"
              placeholder="email@example.com"
              type="text"
            />
          </div>

          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            className="flex align-center justify-between block font-semibold text-sm mb-2"
            htmlFor="fieldgroup-email"
          >
            Senha
            <ButtonPassword
              setShowPassword={setShowPassword}
              showPassword={showPassword}
            />
          </label>
          <div className="flex align-center justify-center mb-2 mt-2 p-2 bg-gray-200  gap-2  rounded-md  ">
            <LockIcon className="text-black/50 w-5 h-6 " />
            <input
              className="flex-1 outline-none border-none "
              {...register("password")}
              id="fieldgroup-email"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
            />
          </div>

          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div>
            <Link
              className="text-sm text-primary hover:underline"
              href="/forget"
            >
              Esqueceu sua senha?
            </Link>
          </div>
        </div>

        <button
          className="mt-5 bg-primary w-full py-3 rounded-sm text-white font-semibold hover:bg-primary/90 transition-colors"
          type="submit"
        >
          Logar
        </button>
      </div>
    </form>
  );
}
