import LoginForm from "@/src/components/LoginComponent";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <h2 className="text-2xl font-bold">Faça seu login</h2>
      <LoginForm />

      <Link href="/register" className="text-blue-500 hover:underline">
        Não tem uma conta? Cadastre-se
      </Link>
    </div>
  );
}
