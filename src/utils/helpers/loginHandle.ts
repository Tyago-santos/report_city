"use server";

import LoginType from "@/src/types/loginType";

import { redirect } from "next/navigation";

export default async function handleFormData(data: LoginType) {
  if (data) {
    redirect("/");
  }
}
