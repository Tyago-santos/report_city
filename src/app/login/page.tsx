import LoginForm from "@/src/components/LoginComponent";
import Link from "next/link";
import { Landmark } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex  flex-col gap-4 h-screen items-center justify-center">
      <Landmark className="w-16 h-16 text-primary" />
      <h2 className="text-2xl font-bold">Faça seu login</h2>
      <LoginForm />

      <Link href="/register" className="text-text hover:underline">
        Não tem uma conta? Cadastre-se
      </Link>
    </div>
  );
}
