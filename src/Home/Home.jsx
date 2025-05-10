export default function HeroSection() {
  return (
    <div className="relative bg-[#121212] overflow-hidden text-white" data-aos="fade-up">
      <div className="relative pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left lg:col-span-6 animate-fade-in-up">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Web Development Experts
                </span>
                <span className="mt-2 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl leading-tight text-blue-900">
                  <span className="block">Transforming Ideas</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                    Into Digital Reality
                  </span>
                </span>
              </h1>
              <p className="mt-4 text-base text-gray-600 sm:mt-6 sm:text-lg lg:text-xl max-w-2xl">
                We build visually captivating, high-performance websites and applications that help your business thrive in the digital world.
              </p>

              {/* Get Started Button */}
              <div className="mt-8">
              <a
  href="/contact"
  className="relative inline-block px-8 py-3 text-lg font-semibold text-white overflow-hidden border border-gray-500 rounded-xl transition-all duration-300 group"
>
  <span className="absolute left-0 top-0 w-0 h-full bg-blue-500 z-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
  <span className="relative z-10 group-hover:text-black">Get Started</span>
</a>

              </div>
            </div>

            {/* Right SVG Graphic with Image Overlay */}
<div className="mt-12 lg:mt-0 lg:col-span-6 flex justify-center animate-fade-in">
  <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl ">
    <div className="relative block w-full  backdrop-blur-md rounded-xl shadow-lg overflow-hidden">

      {/* SVG Illustration */}
      <svg
        className="w-full h-[250px] sm:h-[350px] lg:h-[400px] text-gray-100"
        fill="currentColor"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect width="600" height="400" fill="#D3D3D3" />
        {/* Add any shapes or illustrations here */}
      </svg>

      {/* Image Overlay */}
      <img
        src="https://t3.ftcdn.net/jpg/08/71/60/32/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg"
        alt="Hero Illustration"
        className="absolute top-1/2 left-1/2 w-3/4 sm:w-2/3 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg"
      />
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </div>
  );
}
