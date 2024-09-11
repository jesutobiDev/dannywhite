import { FC, ReactNode } from "react";
import Navbar from "./ui components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
      <div className="m-10 min-h-svh 2xl:container 2xl:mx-auto relative">
        <Navbar />
        <main className="absolute left-0 top-28 w-full">{children}</main>
      </div>
  );
};

export default Layout;
