import RegisterForm from "@/src/components/RegisterComponent";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <h2 className="text-2xl font-bold">Faça seu cadastro</h2>
      <RegisterForm />

      <Link href="/login" className="text-blue-500 hover:underline">
        Já tem uma conta? Faça login
      </Link>
    </div>
  );
}
