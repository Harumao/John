"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
// import {AcmeIcon} from "./acme.js";
import { CircularProgress } from "@nextui-org/react";
import poke from "@/requests/poke";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function BNav() {
  const [pokemon, setPokemon] = useState();
  const pathname = usePathname();
  const [isSelected, setIsSelected] = useState(false);
  const { theme, setTheme } = useTheme();

  const St = () => {
    // setIsSelected(!isSelected);
    if (isSelected) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    console.log(theme);
  };

  useEffect(() => {
    const getPokemon = async () => {
      const res = await poke(44);
      const pokemonData = {
        name: res.name,
        picture: res.sprites.other["official-artwork"].front_default,
        type: res.types[0].type.name,
      };
      setPokemon(pokemonData);
    };
    console.log(pokemon);
    getPokemon();
  }, []);

  return (
    <Navbar
      classNames={{
        base: "bg-rose-400",
        item: "data-[active=true]:text-black text-white font-serif",
      }}
    >
      <NavbarBrand>
        {/* <p className="font-bold text-inherit">ACME</p> */}
        <Image
          src={pokemon?.picture}
          alt="pk_img"
          width={64}
          className="animate-spin "
        />
        <CircularProgress color="default" aria-label="Loading..." />
        <p>Loading...</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link className="text-inherit" href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"}>
          <Link className="text-inherit" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/contact"}>
          <Link className="text-inherit" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-white text-black font-bold hover:bg-rose-500 hover:text-white shadow-lg"
            href="https://github.com/Harumao"
          >
            Gityanki
          </Button>
        </NavbarItem>
        <Switch color="default" isSelected={isSelected} onValueChange={()=>{setIsSelected(!isSelected);St();}} startContent={<Icon icon = "pixelarticons:moon-star"/>} endContent={<Icon icon = "noto-v1:smiling-face-with-sunglasses" />} />
      </NavbarContent>
    </Navbar>
  );
}
