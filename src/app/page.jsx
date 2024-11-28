"use client";
/* eslint-disable @next/next/no-img-element */
import poke from "@/requests/poke";
import { useEffect, useState } from "react";

export default function Page() {
  const [number, setNumber] = useState(0);
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const getPokemon = async () => {
      const res = await poke(1);
      const pokemonData = {
        name: res.name,
        picture: res.sprites.back_default,
        type: res.types[0].type.name,
      };
      // console.log(pokemonData)
      setPokemon(pokemonData);
    };
    getPokemon();
  }, []);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <section id="home" className="text-center py-10 bg-rose-400 border-8">
        <h2 className="text-4xl font-roman text-indigo-100 animate-jump animate-infinite animate-duration-[505ms] animate-delay-0 animate-ease-in">
          Welcome to My Depressive World
        </h2>
        <p className="mt-4 font-abstract text-lg">Discovering the Someting.</p>
      </section>

      <section
        id="about"
        className="py-16 bg-white text-gray-800 flex justify-center dark:bg-gray-700 dark:text-white"
      >
        <div className=" border-4  p-4">
          <h3 className="text-xl font-mono">
            <img src={pokemon?.picture} alt="pk_img" className="w-auto animate-spin hover:animate-[bounce_0.1s_infinite] "/>
            
          </h3>
          <p className="mt-4 font-sans text-mg">
            {/* Image file size is too large [.jpg] <br /> */}
            <br />
            <img
              src="https://images.squarespace-cdn.com/content/v1/5fd56e513c1f6275809ed7d1/1633502681708-2N00GGCCYRTPVONA8KBF/Cranky+cat.PNG"
              className="rounded-full w-40 h-40 skew-x-6 animate-jump animate-infinite animate-duration-[505ms] animate-delay-0 animate-ease-in"
              alt="profile"
            />
            <br />
            Name : Sittichocke Niyomtusn <br />
            Studying in KMUTNB.
            <br />
            Mathemetic for Computer Science.
            <br />
            Interesting in : Technology , Coding ,<br /> Music , Art , Game , AI
            <br />
            Want to be : Deverloper , Baker <br />
            Special list : Good at Coding ( Python,C#,JS ) <br />
            Sex : Male <br />
            LinkedIn : <br />
            Github : https://github.com/Harumao <br />
            Birth day : 04/30/04
            <br />
            <br />
            [Maintenance Keep Waiting for Update]
            <br />
            [I am learning for doing animate website]
            <br />
            <br />
            <br />
            [Looking for resume? Go to About page.
            <br />
            It&apos;s on the right top of screen.]
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 bg-orange-50 text-gray-800 flex justify-center"
      >
        <div className="w-1/2">
          <h3 className="text-3xl font-roman">Get in Touch</h3>
          <p className="mt-4 font-abstract"></p>
          For now. Do not contact me. <br />
          <a
            href="mailto:kingkinghi4@gmail.com"
            className="inline-block mt-6 py-3 px-6 bg-red-300 text-white font-bold rounded hover:bg-red-400"
          >
            Do not Contact Me.
          </a>
          <button onClick={handleClick}>Increase number</button>
          <p>{number}</p>
        </div>
      </section>
    </>
  );
}
