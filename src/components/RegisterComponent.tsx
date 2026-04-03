"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../validation/registerValidation";
import { handleFormData } from "../utils/helpers/registerHandle";
import { useState } from "react";
import { ButtonPassword } from "./ButtonPassword";

import { LockIcon, Mail, MapPin, User2Icon } from "lucide-react";

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
          <label
            className="mb-2 font-semibold  text-[12px]"
            htmlFor="fieldgroup-name"
          >
            Nome Completo
          </label>
          <div className="flex align-center justify-center mb-2 mt-2 p-2 bg-gray-200  gap-2  rounded-md  ">
            <User2Icon className="text-black/50 w-5 h-6 " />
            <input
              className="outline-none border-none flex-1"
              {...register("name")}
              id="fieldgroup-name"
              placeholder="Ex:John Doe"
              type="text"
            />
          </div>

          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label
            className="mb-2 font-semibold  text-[12px]"
            htmlFor="fieldgroup-email"
          >
            Endereço de Email
          </label>
          <div className="flex align-center justify-center mb-2 mt-2 p-2 bg-gray-200  gap-2  rounded-md  ">
            <Mail className="text-black/50 w-5 h-6 " />
            <input
              className="outline-none border-none flex-1"
              {...register("email")}
              id="fieldgroup-email"
              placeholder="email@example.com"
              type="text"
            />
          </div>

          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between font-semibold text-[12px] mb-2">
            <label htmlFor="fieldgroup-password">Senha</label>
            <ButtonPassword
              setShowPassword={setShowPassword}
              showPassword={showPassword}
            />
          </div>
          <div className="flex align-center justify-center mb-2 mt-2 p-2 bg-gray-200  gap-2  rounded-md  ">
            <LockIcon className="text-black/50 w-5 h-6 " />
            <input
              className="flex-1 outline-none border-none "
              {...register("password")}
              id="fieldgroup-password"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
            />
          </div>

          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label
            className="flex align-center justify-between block font-semibold text-[12px] mb-2"
            htmlFor="fieldgroup-city"
          >
            Cidade
          </label>
          <div className="flex align-center justify-center mb-2 mt-2 p-2 bg-gray-200  gap-2  rounded-md  ">
            <MapPin className="text-black/50 w-5 h-6 " />
            <input
              className="flex-1 outline-none border-none "
              {...register("city")}
              id="fieldgroup-city"
              type="text"
              placeholder="Ex: São Paulo"
            />
          </div>

          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>

        <button
          className="mt-5 bg-primary w-full py-3 rounded-sm text-white font-semibold hover:bg-primary/90 transition-colors"
          type="submit"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}
