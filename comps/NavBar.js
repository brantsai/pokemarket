import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image 
          src="/pokeball.png" 
          width={77}
          height={77}
        />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/set-list"><a>Set List</a></Link>
      <Link href="/profile"><a>Profile</a></Link>
    </nav>
  )
}
export default NavBar;