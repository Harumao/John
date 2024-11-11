import Link from "next/link";
import React from "react";
export default function Nav() {
  return (
    <>
      <div>
        {/* <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col"> */}
        <header className="py-5 bg-gradient-to-r from-rose-400 to-rose-300 text-white">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-3xl font-bold font-roman ml-20">
              My Portfolio
            </h1>
            <nav>
              <ul className="flex space-x-4 mr-20 my-auto">
                <li>
                  <Link href="/" className="hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
