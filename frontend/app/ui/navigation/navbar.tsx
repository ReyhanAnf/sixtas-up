'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button, Dropdown, Avatar, DropdownTrigger, DropdownItem, DropdownMenu } from "@nextui-org/react";
import { ThemeSwitcher } from "../themeSwither";
import Image from "next/image";
import Link from "next/link";
import logoutUser from "@/app/lib/auth/logoutUser";
import { reactLocalStorage } from 'reactjs-localstorage';


export default function NavbarUI() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let userAuth = reactLocalStorage.get('userToken');

  const menuItems = [
    { name: "Dashboard", href: "/" },
  ];



  return (
    <div>
      <Navbar
        shouldHideOnScroll
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={true}
        className="items-center"
      >
        <NavbarContent className="" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          <NavbarBrand>
            <Link href='/' className="font-bold text-inherit hover:scale-90 transition-all duration-200">SIXTAS-UPP</Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <NavbarItem className="lg:flex">
            <button className="hover:scale-90 transition-all duration-200">
              <Link
                href='/search'
              >
                <Image
                  className="rounded-sm transition-transform pt-1"
                  src="/search.svg"
                  alt="profile logo"
                  width={34}
                  height={34}
                  priority
                />
              </Link>
            </button>
          </NavbarItem>
          <NavbarItem className="lg:flex hover:scale-90 transition-all duration-200">
            <ThemeSwitcher />
          </NavbarItem>
          {isMenuOpen ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Image
                  className="rounded-sm transition-transform"
                  src="/profile_default.gif"
                  alt="profile logo"
                  width={36}
                  height={36}
                  priority
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <div className="font-semibold">Signed in as</div>
                  <div className="font-semibold">Rey</div>
                </DropdownItem>
                <DropdownItem key="myprofile"><Link href='/profile'>My Profile</Link></DropdownItem>
                <DropdownItem key="message">Message</DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={() => logoutUser()}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem>
              <Button as={Link} color="primary" href="/auth/login" variant="flat" className="hover:scale-90 scale-85 transition-all duration-200">
                Sign In
              </Button>
            </NavbarItem>
          )}

        </NavbarContent>

        <NavbarMenu className="flex flex-row flex-wrap px-4 py-2 justify-around h-24">
          <NavbarMenuItem key={111} className="w-[20%] h-12 text-center py-3">
            <Button as={Link} color="primary" href="/posts/upload" variant="flat" className="hover:scale-90 scale-85 transition-all duration-200">
              U
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem key={111} className="w-[20%] h-12 py-3">
            <Button as={Link} color="primary" href="/notify" variant="flat" className="hover:scale-90 scale-85 transition-all duration-200">
              N
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem key={111} className="w-[20%] h-12 py-3">
            <Button as={Link} color="primary" href="/posts/my" variant="flat" className="hover:scale-90 scale-85 transition-all duration-200">
              M
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem key={111} className="w-[20%] h-12 py-3">
            <Button as={Link} color="primary" href="/posts/saved" variant="flat" className="hover:scale-90 scale-85 transition-all duration-200">
              S
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
