import Link from "next/link";

const Nav = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/list">
        <a>Pokemon</a>
      </Link>
    </li>
    <li>
      <Link href="/restrito">
        <a>restrito</a>
      </Link>
    </li>
  </ul>
);

export default Nav;
