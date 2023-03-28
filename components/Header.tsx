import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="p-5 flex justify-between  sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://project50017.s3.us-east-2.amazonaws.com/auth0%7C63f56917c8c54d340a113412/profile_photo"
          alt="logo"
          height={30}
          width={30}
        />
        <div>
          <h1 className="font-bold">
            The Nat0110tan <span className="text-violet-500">AI</span> Image
            Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL·E 2, Chat GPT & Microsoft Azure!
          </h2>
        </div>
      </div>

      <div className="flex divide-x text-gray-500 items-center text-xs md:text-base">
        <Link
          href="https://www.linkedin.com/in/yiling-tan-b354281a9/"
          className="px-2 font-light text-right"
        >
          Linkedin
        </Link>
        <Link
          href="https://github.com/Nat0110tan/Chatgpt-Photo-Generator"
          className="px-2 font-light"
        >
          Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
