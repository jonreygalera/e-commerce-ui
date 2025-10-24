import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>
      <Link href="/" className="flex items-center">
        <Image 
          src={'/logo.png'} 
          alt="Trend Mrey Ecommerce"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="text-md font-mediu tracking-wider">Mrey Ecom</p>
      </Link>
      <div className=''>right</div>
    </nav>
  );
};

export default NavBar;