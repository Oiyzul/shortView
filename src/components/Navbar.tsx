import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[100px]">
      <MaxWidthWrapper>
        <div className="flex-1 flex gap-3">social</div>
        <div className="flex-1 text-center text-4xl font-bold">Logo</div>
        <div className="flex items-center gap-5 flex-1 text-xl">
          <Link href={"/"} className="">
            Home
          </Link>
          <Link href={"/"} className="">
            Contact
          </Link>
          <Link href={"/"} className="">
            About
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
