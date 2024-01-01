import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="/Ifoto_log.png"
          alt="Ifoto Logo"
          height={50}
          width={100}
          className="w-full rounded-sm shadow-2xl drop-shadow-lg -z-10"
        />
        <div>
          <h1 className="font-bold">
            <span>AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL-E, ChatGPT (OPENAI) & Microsoft Azure
          </h2>
        </div>
      </div>
      <div className="flex text-sm md:text-base items-center text-gray-500">
        <Link
          href="https://github.com/Sylvan452/ifoto.git"
          className="px-2 font-light"
        >
          Check Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
