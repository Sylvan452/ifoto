import Image from 'next/image';

function Header() {
  return (
    <header>
      <div className="flex space-x-2 items-center">
        <Image src="/Ifoto_logo.png" height={50} width={100} alt="logo" />
        <div>
          <h1 className="font-bold text-red-500">
            <span>AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL-E, ChatGPT (OPENAI) & Microsoft Azure
          </h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
