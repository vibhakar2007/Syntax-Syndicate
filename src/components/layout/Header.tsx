import Image from "next/image";

const Header = () => {
  return (
    <header className="">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="font-bold">
          <Image
            src="/assets/logo.png"
            alt="TSS logo"
            height={500}
            width={500}
            priority
            className="size-20 object-cover"
          />
        </div>
        <div className="menu">
          <ul className="flex gap-4">
            <li className="hover:text-blue-500">Home</li>
            <li className="hover:text-blue-500">About</li>
            <li className="hover:text-blue-500">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
