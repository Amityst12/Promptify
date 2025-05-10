import { useEffect } from "react"

export const Navbar= ({menuOpen, setMenuOpen}) =>{

    useEffect(() =>{
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]); //If state of menu changes

    return <nav className="fixed top-0 w-full z-40 bg-sky-500 backdrop-blur-lg border-b border-white/10 shadow-lg">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">

      {/* לוגו + טקסט יחד בצד שמאל */}
      <div className="flex items-center space-x-3">
        <picture>
          <source
            srcSet={`${import.meta.env.BASE_URL}/Transpromptify.png`}
            type="image/png"
          />
          <img
            src={`${import.meta.env.BASE_URL}/Transpromptify.png`}
            alt="Promptify Logo"
            className="w-25 h-25 sm:w-25 sm:h-25"
          />
        </picture>

        <a
          href="#home"
          className="font-mono text-xl font-bold text-white hover:scale-105 transition-transform duration-300"
        >
          Promptify, <span className="text-green-300">Ask better.</span>
        </a>
      </div>

      {/* תפריט ניווט בצד ימין */}
      <button
        className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-2xl"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        &#9776;
      </button>

      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#home"
          className="text-white font-bold hover:scale-110 transition duration-300"
        >
          Home
        </a>
        <a
          href="#better"
          className="text-white font-bold hover:scale-110 transition duration-300"
        >
          Application
        </a>
        <a
          href="#about"
          className="text-white font-bold hover:scale-110 transition duration-300"
        >
          About
        </a>
      </div>
    </div>
  </div>
</nav>

}