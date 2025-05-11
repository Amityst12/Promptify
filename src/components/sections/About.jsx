import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white text-gray-800 px-6 py-20 -mt-40"
    >
        <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
            About Promptify!
          </h2>

          <p className="text-lg sm:text-xl leading-relaxed mb-6">
            <span className="text-blue-500 font-semibold">Promptify</span> was born from a simple idea:
            most people don't know how to ask AI the right way — and that's okay.
            We’re here to bridge that gap.
          </p>
            </RevealOnScroll>
            <RevealOnScroll>
          <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a student, developer, writer, or just curious — Promptify helps
            you craft smarter prompts effortlessly. We believe that great prompts unlock
            great results, and our mission is to make advanced AI accessible to everyone.
          </p>
          <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto mt-5">
            Found a bug or something not working quite right? Feel free to reach out at <span className="text-blue-500 font-medium">amityst12@gmail.com</span> — I’d love to hear from you.
          </p>
          </RevealOnScroll>
        </div>
    </section>
  );
};
