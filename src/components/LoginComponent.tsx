"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <FieldGroup className="w-[300px]">
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
        <Input id="fieldgroup-name" placeholder="Jordan Lee" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
        <Input
          id="fieldgroup-email"
          type="email"
          placeholder="name@example.com"
        />
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
  );
}
