const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500		">
      {children}
    </div>
  );
};

export default AuthLayout;
