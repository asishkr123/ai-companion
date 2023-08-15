import { FunctionComponent } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayoutProps: FunctionComponent<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-full">{children}</div>
  );
};

export default AuthLayoutProps;
