import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className=''>
      <Link href="/">
        <Image 
          src={'/logo.png'} 
          alt="Trend Mrey Ecommerce"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="text-md font-medium">Mrey Ecom</p>
      </Link>
    </div>
  );
};

export default NavBar;