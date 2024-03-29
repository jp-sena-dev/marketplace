import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem({ children, to }) {
  return (
    <Link to={to} className="font-bold text-sm hover:underline">
      <li className="h-full text-center">
        {children}
      </li>
    </Link>
  );
}
