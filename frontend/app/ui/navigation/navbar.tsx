'use client';

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button, Dropdown, Avatar, DropdownTrigger, DropdownItem, DropdownMenu } from "@nextui-org/react";
import { ThemeSwitcher } from "../themeSwither";
import checkAuth from "@/app/lib/auth/checkAuth";
import Image from "next/image";
import Link from "next/link";
import logoutUser from "@/app/lib/auth/logoutUser";

export default function NavbarUI() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  checkAuth();
  let userAuth = typeof localStorage === 'undefined' ? 'you have use server' : localStorage.getItem('userToken');
  console.log(userAuth);

  const menuItems = [
    { name: "Dashboard", href: "/" },
    { name: "Posts", href: "/posts" },
  ];

  const getprof = async () => {
  }
  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={true}
    >
      <NavbarContent className="" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        <NavbarBrand>
          <p className="font-bold text-inherit">SIXTAS-UPP</p>
        </NavbarBrand>
      </NavbarContent>


      <NavbarContent as="div" justify="end">
        <NavbarItem className="lg:flex">
          <ThemeSwitcher />
        </NavbarItem>
        {userAuth ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Image
                className="rounded-full transition-transform"
                src="/profile_default.gif"
                alt="profile logo"
                width={36}
                height={36}
                priority
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{userAuth}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={() => logoutUser()}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem>
            <Button as={Link} color="primary" href="/auth/login" variant="flat" className="scale-85" onClick={() => getprof()}>
              Sign In
            </Button>
          </NavbarItem>
        )}


      </NavbarContent>

      <NavbarMenu className="bg-gray-700 bg-opacity-20 backdrop-blur-lg">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-white"
              href={item.href}
              onClick={() => {
                let inter = setInterval(() => {
                  setIsMenuOpen(!isMenuOpen);
                  clearInterval(inter);
                }, 300);
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
