'use client';
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { usePathname } from "next/navigation"; // Use Next.js' `usePathname` to get the current path

export default function NavbarMenuItems() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname(); // Get the current path for active link logic

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Research & Development", path: "/research" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contacts", path: "/contacts" },
   
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="text-green-700 font-bold text-xl">GSSAR</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Links */}
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path} isActive={pathname === item.path}>
            <Link
              href={item.path}
              className={`${
                pathname === item.path ? "text-green-600 font-semibold" : "text-gray-700"
              } hover:text-green-600`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link
              href={item.path}
              className={`${
                pathname === item.path ? "text-green-600 font-semibold" : "text-gray-700"
              } w-full`}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
