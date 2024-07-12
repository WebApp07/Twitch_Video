import { Logo } from "./_components/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 space-y-6">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
