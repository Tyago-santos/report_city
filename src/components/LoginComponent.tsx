"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
          <label htmlFor="fieldgroup-email">Email</label>
          <input
            {...register("email")}
            id="fieldgroup-email"
            type="text"
            placeholder="name@example.com"
          />
          {errors.email && <p>{errors.email.message}</p>}
          <div>
            <a href="/forget">Esqueceu sua senha?</a>
          </div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
