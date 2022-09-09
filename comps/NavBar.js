import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <h2>PokeMarket</h2>
      <Link href="/"><a>Home</a></Link>
      <Link href="/set-list"><a>Set List</a></Link>
      <Link href="/profile"><a>Profile</a></Link>
    </div>
  )
}
export default NavBar;