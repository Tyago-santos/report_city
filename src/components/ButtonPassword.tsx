"use client";

type ButtonPasswordProps = {
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
};

export const ButtonPassword = ({
  showPassword,
  setShowPassword,
}: ButtonPasswordProps) => {
  return (
    <button
      className="font-normal md:text-sm "
      type="button"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? "Ocultar senha?" : "Mostrar senha?"}
    </button>
  );
};
