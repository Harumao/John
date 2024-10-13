export default function Page() {
  return (
    <>
      <section
        id="home"
        className="text-center py-10 bg-gradient-to-r from-slate-700 to-slate-300"
      >
        <h2 className="text-4xl font-roman text-indigo-100">
          Welcome to My Depressive World
        </h2>
        <p className="mt-4 font-abstract text-lg">Discovering the Someting.</p>
      </section>

      <section
        id="about"
        className="py-16 bg-white text-gray-800 flex justify-center"
      >
        <div className="w-1/2">
          <h3 className="text-3xl font-roman">About Me</h3>
          <p className="mt-4 font-art text-lg">
            I&apos;m an artist and developer inspired by ancient Roman
            architecture and modern abstract forms.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 bg-gray-100 text-gray-800 flex justify-center"
      >
        <div className="w-1/2">
          <h3 className="text-3xl font-roman">Get in Touch</h3>
          <p className="mt-4 font-abstract">
            Feel free to reach out for collaborations or commissions. Let&apos;s
            create something timeless together.
          </p>
          <a
            href="mailto:kingkinghi4@gmail.com"
            className="inline-block mt-6 py-3 px-6 bg-slate-500 text-white font-bold rounded hover:bg-slate-700"
          >
            Do not Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
