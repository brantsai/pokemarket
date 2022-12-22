import Link from "next/link";
import Image from "next/image";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/router";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  const handleSignout = () => {
    logout();
    router.push('/');
  }

  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <div>
            <Image 
              src="/pokeball.png" 
              width={77}
              height={77}
            />
          </div>
        </Link>
      </div>
      <Link href="/set-list"><a>Set List</a></Link>
      {currentUser && <Link href="/profile"><a>Profile</a></Link>}
      {currentUser && <div className="signout" onClick={handleSignout}>Sign Out</div>}
      {!currentUser && <Link href="/auth"><a>Log in</a></Link>}
    </nav>
  )
}
export default NavBar;