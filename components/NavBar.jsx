// components/NavBar.jsx
import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/addSchool">
            <div>Add School</div>
          </Link>
        </li>
        <li>
          <Link href="/showSchools">
            <div>Show Schools</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
