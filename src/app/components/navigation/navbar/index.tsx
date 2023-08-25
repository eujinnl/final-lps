import React from "react";
import Link from "next/link";
import Logo from "./Logo.tsx";

const Navbar = () => {
  return (
    <nav>
      <Logo/>
      <ul>
        <li><Link href="/careers">
                  <p>Careers</p>
            </Link>
        </li>
        <li><Link href="/contact">
                  <p>Contact</p>
            </Link>
        </li>
        <li><Link href="/products">
                  <p>Products</p>
              </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;