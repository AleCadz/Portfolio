import Card from "@/components/Card";
import Header from "@/components/Header";
import Image from "next/image";

const About = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen w-screen px-4 sm:px-10 lg:px-20 bg-slate-900 py-5">
        <Header />
        <div className="w-full flex h-full mt-10 flex-col py-10 ">
          <h1 className="text-GrayLetters text-3xl sm:text-4xl md:text-5xl">
            About Me
          </h1>
        </div>
        <div className="flex flex-row items-start justify-between text-GrayLetters">
          <div className="mr-4">
            <h2 className="text-GrayLetters text-3xl mb-4">
              I want to improve my skills!
            </h2>
            <p>
              Im currently working as{" "}
              <span className="font-bold">FullStack</span> web developer,
              developing scalable solutions with React
            </p>
          </div>
          <div>
            <Image
              src="/images/Lobster.png"
              alt="Cool lobster image"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-wrap mt-5 gap-5">
          {Array.from({ length: 10 }, (_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
