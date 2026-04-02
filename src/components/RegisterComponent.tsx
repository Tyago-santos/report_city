"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
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
      <FieldGroup className="w-[300px]">
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
          <Input
            {...register("name")}
            id="fieldgroup-name"
            placeholder="Jordan Lee"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </Field>
        <Field>
          <FieldLabel
            className="flex justify-between"
            htmlFor="fieldgroup-password"
          >
            Password
            <ButtonPassword
              setShowPassword={setShowPassword}
              showPassword={showPassword}
            />
          </FieldLabel>

          <Input
            {...register("password")}
            id="fieldgroup-password"
            placeholder="Digite sua senha"
            type={showPassword ? "text" : "password"}
          />
        </Field>

        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            {...register("email")}
            id="fieldgroup-email"
            type="text"
            placeholder="name@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </Field>
        <Field orientation="horizontal">
          <Button
            className="w-full cursor-pointer hover:bg-white hover:border-black border-2 hover:text-black"
            type="submit"
          >
            Submit
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
