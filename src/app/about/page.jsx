export default function Page() {
  return (
    <>
      <section
        id="home"
        className="text-center py-10 bg-gradient-to-r from-slate-700 to-slate-300"
      >
        <h2 className="text-4xl font-roman text-indigo-100">ABOUT</h2>
        <p className="mt-4 font-abstract text-lg">^RESUME^</p>
      </section>

      <section
        id="about"
        className="py-10 bg-white text-gray-800 flex justify-center"
      >
        <div className="w-1/2">
          <h3 className="text-3xl font-roman"></h3>
          
          <pre className="mt-4 font-art text-lg">
            <br />
            <img src="data:image/jpeg;base64,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" alt="profile" />
            <br />
            Name : Sittichocke Niyomtusn <br />
            Studying in KMUTNB.<br />
            Mathemetic for Computer Science.<br />
            Interesting in : Technology , Coding ,<br />                 Music , Art , Game , AI<br />
            Want to be : Deverloper , Baker <br />
            Special list : Good at Coding <br />
            Sex : Male <br />
            LinkedIn : <br />
            Github : https://github.com/Harumao <br />
            Birth day : 04/30/04<br />
            <br />

            [Maintenance Keep Waiting for Update]<br />
            [I am learning for doing animate website]
            

          </pre>
        </div>
      </section>

      <section
        id="contact"
        className="py-10 bg-gray-100 text-gray-800 flex justify-center"
      >
        <div className="w-1/2">
          <h3 className="text-3xl font-roman">Get in Touch</h3>
          <a
            href="https://www.youtube.com/watch?v=_zD8Z_uInPs&pp=ygUx4LiE4Lij4Li54Lia4Liy4LiK4LmI4Lin4Lii4Lir4Lih4Li54LmA4LiU4LmJ4LiHIA%3D%3D"
            className="inline-block mt-6 py-3 px-6 bg-slate-500 text-white font-bold rounded hover:bg-slate-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            .คาบู คูบา.
          </a>
        </div>
      </section>
    </>
  );
}
