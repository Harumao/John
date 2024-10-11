export default function Home() {
  return (
    <>
      <section
        id="home"
        className="text-center py-16 bg-gradient-to-r from-purple-50 to-purple-200"
      >
        <h2 className="text-4xl font-roman text-purple-700">
          Welcome to My Creative World
        </h2>
        <p className="mt-4 font-abstract text-lg">
          Discover the Art, the Abstract, the Roman, and the Creative.
        </p>
      </section>

      <section id="about" className="py-16 bg-white text-gray-800">
        <h3 className="text-3xl font-roman">About Me</h3>
        <p className="mt-4 font-art text-lg">
          I&apos;m an artist and developer inspired by ancient Roman architecture and
          modern abstract forms.
        </p>
      </section>

      <section id="contact" className="py-16 bg-gray-100 text-gray-800">
        <h3 className="text-3xl font-roman">Get in Touch</h3>
        <p className="mt-4 font-abstract">
          Feel free to reach out for collaborations or commissions. Let&apos;s create
          something timeless together.
        </p>
        <a
          href="mailto:someone@example.com"
          className="inline-block mt-6 py-3 px-6 bg-purple-500 text-white font-bold rounded"
        >
          Contact Me
        </a>
      </section>
    </>
  );
}
