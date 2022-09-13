import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>PokeMarket</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/set-list"><a>Set List</a></Link>
      <Link href="/profile"><a>Profile</a></Link>
    </nav>
  )
}
export default NavBar;