export default function Page() {
  return (
    <>
      <section
        id="home"
        className="text-center py-10 bg-gradient-to-r from-slate-700 to-slate-300"
      >
        <h2 className="text-4xl font-roman text-indigo-100">Contact</h2>
        <p className="mt-4 font-abstract text-lg">to Who?</p>
        
      </section>

      <section
        id="about"
        className="py-10 bg-white text-gray-800 flex justify-center"
      >
        <div className="w-1/2">
          <h3 className="text-3xl font-roman">No one :</h3>
          <p className="mt-4 font-art text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ullam eligendi odio doloribus animi nesciunt sed, et exercitationem quis vel non reiciendis quaerat repellat esse similique praesentium commodi atque architecto.
          </p>
          <a
            href="mailto:kingkinghi4@gmail.com"
            className="inline-block mt-6 py-3 px-6 bg-slate-500 text-white font-bold rounded hover:bg-slate-700"
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
