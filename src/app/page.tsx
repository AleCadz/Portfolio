import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-screen px-4 sm:px-10 lg:px-20 bg-slate-900 py-5">
        <Header />
        <div className="w-full flex justify-center h-full my-auto">
          <article className="flex self-center flex-col gap-y-5 mx-4 sm:mx-10 lg:mx-52">
            <h1 className="text-GrayLetters text-3xl sm:text-4xl md:text-5xl animate-bounce">
              Hi, I am Alejandro del Castillo
            </h1>

            <p className="text-GrayLetters leading-9">
              As a Junior Developer, my primary objective is to harness my
              enthusiasm for technology and my problem-solving skills to
              contribute effectively to my work environment. I am dedicated to
              developing creative and innovative solutions that not only meet
              but exceed expectations, always striving for efficiency in my
              approach.
            </p>
            <p className="text-GrayLetters leading-9">
              I view myself as a resourceful and self-motivated professional,
              continuously seeking opportunities to enhance my knowledge and
              adapt to the ever-evolving landscape of technology. I thrive on
              challenges and embrace learning as an integral part of my journey,
              leveraging my growing expertise to tackle complex projects.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
