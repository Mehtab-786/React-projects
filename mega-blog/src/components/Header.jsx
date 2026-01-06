import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Container from './container/Container'
import LogoutBtn from './LogoutBtn'

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state?.auth?.status);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Sign-up",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All-Posts",
      slug: "/allposts",
      active: authStatus,
    },
    {
      name: "Add-Posts",
      slug: "/addposts",
      active: authStatus,
    },
  ];

  return <header>
    <Container>
      <nav>
        <Link to='/'>
          Blog
        </Link>
        <ul className="flex ml-auto">
        {navItems.map(value => (
          value.active ? (
            <li key={value.name}>
              <button onClick={() => navigate(value.slug ) }>{value.name}</button>
            </li>
          ) : null
        ))}
        {authStatus && <li><LogoutBtn  /></li>}
        </ul>
      </nav>
    </Container>
  </header>;
}

export default Header;
