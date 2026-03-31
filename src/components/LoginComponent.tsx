"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginSchema } from "../validation/loginValidation";
import { handleFormData } from "../utils/helpers/loginHandle";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
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
          <FieldDescription>
            <Link href="/forget">Esqueceu sua senha?</Link>
          </FieldDescription>
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
