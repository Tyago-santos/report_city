import RegisterForm from "@/src/components/RegisterComponent";
import { Landmark } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <Landmark className="w-16 h-16 text-primary" />
      <h2 className="text-2xl md:text-4xl font-bold">Faça seu cadastro</h2>
      <RegisterForm />

      <Link href="/login" className="text-blue-500 hover:underline  md:text-xl">
        Já tem uma conta? Faça login
      </Link>
    </div>
  );
}
