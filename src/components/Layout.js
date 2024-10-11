import Link from "next/link";
export default function Layout() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <header className="py-5 bg-gradient-to-r from-purple-400 to-red-500 text-white">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-3xl font-bold font-roman ml-20">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-4 mr-20 my-auto">
              <li>
                <Link href="/home" className="hover:text-gray-300">
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
      <main className="container mx-auto px-4 py-8 flex-grow"></main>
      <footer className="py-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <p className="font-art">&copy; 2024 - My Art Portfolio</p>
        </div>
      </footer>
    </div>
  );
}
