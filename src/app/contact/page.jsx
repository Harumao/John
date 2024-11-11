export default function Page() {
  return (
    <>
      <section
        id="home"
        className="text-center py-10 bg-rose-300 border-8"
      >
        <h2 className="text-4xl font-roman text-indigo-100">Contact</h2>
        <p className="mt-4 font-abstract text-lg">to Who?</p>
        
      </section>

      <section
        id="about"
        className="py-10 bg-white text-gray-800 flex justify-center"
      >
        <div className="w-1/2">
          <h3 className="text-3xl font-roman">Me :</h3>
          <p className="mt-4 font-art text-lg">
            
          </p>
          <a
            href="https://www.facebook.com/Mir4Cle.S/"
            className="inline-block mt-6 py-3 px-6 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
          >
            อะไร
          </a>
        </div>
        
      </section>

      <section
        id="contact"
        className="py-10 bg-gray-100 text-gray-800 flex justify-center"
      >
        <div className="w-1/2">
          <h3 className="text-3xl font-roman">Get in Touch</h3>
          <p className="mt-4 font-abstract">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptate, in doloremque modi et sapiente nam minima, dolores quisquam beatae excepturi enim at non! Nostrum alias eius excepturi dicta rerum!
          </p>
          
        </div>
      </section>
    </>
  );
}
