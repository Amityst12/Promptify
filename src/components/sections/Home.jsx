import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        
        <section 
        
        id="home"
        className="pt-12 min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <picture>
                    <source srcSet={`${import.meta.env.BASE_URL}/Transpromptify.png`} type="image/png"/>
                    <img
                        src={`${import.meta.env.BASE_URL}/Transpromptify.png`}
                        alt="Promptify Logo"
                        className=" sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover mx-auto -m-12"
                    />  
                </picture>
            <div className="text-center z-10 px-4">
                {/*Main */}
                <h1 className="text-6xl sm:text-5xl md:text-7xl font-bold mb-6 
                    bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent 
                    leading-tight break-words text-center w-full px-2">
                    Welcome to Promptify
                </h1>

                <p className="text-black text-lg max-w-2xl mx-auto text-center mb-8">
                <span className="text-blue-400 font-semibold">Promptify</span> helps you get better answers from AI by turning simple questions into powerful prompts.
                <br /><br />
                Whether you're writing, researching, or just curious — we help you ask smarter and achieve more.
                </p>


                {/*Buttons */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a  href="#better"
                        className="bg-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">
                        Click here to start!
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
};