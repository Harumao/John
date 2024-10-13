export default function Page() {
  return (
    <>
      <section
        id="home"
        className="text-center py-10 bg-gradient-to-r from-slate-700 to-slate-300"
      >
        <h2 className="text-4xl font-roman text-indigo-100">About</h2>
        <p className="mt-4 font-abstract text-lg">About.</p>
      </section>

      <section
        id="about"
        className="py-10 bg-white text-gray-800 flex justify-center"
      >
        <div className="w-1/2">
          <h3 className="text-3xl font-roman">About Me</h3>
          <p className="mt-4 font-art text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            veniam aspernatur commodi modi delectus quisquam, odio, enim, quos
            error rem quia? Optio tenetur aliquam labore cum ipsum, porro rem
            quod.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="py-10 bg-gray-100 text-gray-800 flex justify-center"
      >
        <div className="w-1/2">
          <h3 className="text-3xl font-roman">Get in Touch</h3>
          <p className="mt-4 font-abstract">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quibusdam praesentium fugit expedita, dignissimos amet ipsa fugiat
            quas explicabo impedit libero, nisi voluptas quos architecto quidem
            vero, itaque commodi vel?
          </p>
          <a
            href="https://www.youtube.com/watch?v=_zD8Z_uInPs&pp=ygUx4LiE4Lij4Li54Lia4Liy4LiK4LmI4Lin4Lii4Lir4Lih4Li54LmA4LiU4LmJ4LiHIA%3D%3D"
            className="inline-block mt-6 py-3 px-6 bg-slate-500 text-white font-bold rounded hover:bg-slate-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            .Touch me.
          </a>
        </div>
      </section>
    </>
  );
}
