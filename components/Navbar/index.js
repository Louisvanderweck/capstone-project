import Link from "next/link";
import { useRouter } from "next/router";
import { Nav, NavLink } from "../../styles";
import { useEffect, useState } from "react";
import VDWLogo from "../../public/VDW_Logo.png";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const router = useRouter();
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    !isSSR && (
      <header>
        <Nav>
          <Link href="/">
            <NavLink active={router.pathname === "/" ? true : false}>
              <p>Shop</p>
            </NavLink>
          </Link>
          <Link href="/">
            <Image alt="VDWLogo" src={VDWLogo} width={40} height={40} />
          </Link>
          <Link href="/warenkorb">
            <NavLink active={router.pathname === "/warenkob" ? true : false}>
              <FiShoppingCart />
            </NavLink>
          </Link>
        </Nav>
      </header>
    )
  );
};

export default Navbar;
