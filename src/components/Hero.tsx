export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#c2c89a]" aria-label="Hero section - Private Label Tea Manufacturer Dubai">

      <img
        src="/new_spoon-removebg-preview.png"
        alt="Premium tea spoon for tea blending services in Dubai"
        className="absolute top-[300px] left-[10px] sm:left-[40px] lg:top-[240px] lg:left-[320px] w-[110px] sm:w-[180px] lg:w-[350px] z-10 animate-float-subtle"
        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        loading="lazy"
      />

      <img
        src="/leaf.png"
        alt="Fresh tea leaf representing quality Assam and Darjeeling tea sourcing"
        className="absolute top-[420px] right-[20px] sm:right-[60px] lg:top-[360px] lg:left-[670px] w-[40px] sm:w-[60px] lg:w-[80px] z-20 animate-float-subtle"
        loading="lazy"
      />

      <img
        src="/kettle.png"
        alt="Traditional tea kettle for authentic Karak and Samovar tea preparation"
        className="absolute top-[40px] left-[10px] sm:left-[20px] lg:top-[50px] lg:left-[30px] w-[120px] sm:w-[180px] lg:w-[240px] z-10 animate-slide-left animate-kettle-sway"
        style={{ animationFillMode: 'both' }}
        loading="lazy"
      />

      <div className="relative flex flex-col lg:flex-row min-h-[520px] sm:min-h-[620px] lg:min-h-[850px]">

        <header className="w-full lg:w-[66%] relative flex items-center px-5 sm:px-8 lg:px-20 z-20 pt-28 sm:pt-36 lg:pt-0 pb-24 sm:pb-28 lg:pb-0">
          <div className="max-w-[900px] mb-6 lg:mb-24 text-center lg:text-left">

            <h1 className="text-[clamp(2.4rem,8vw,6rem)] leading-[0.95] text-[#152912] font-bold tracking-tight uppercase mb-3">
              <span
                className="block mt-6 sm:mt-10 lg:mt-44 animate-fade-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
              >
                Private Label
              </span>
              <span
                className="block pl-0 sm:pl-8 lg:pl-20 animate-fade-up"
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
              >
                Tea Manufacturer
              </span>
            </h1>

            <p
              className="mt-3 text-sm sm:text-base lg:text-lg text-[#3e5734] max-w-[90%] sm:max-w-[480px] lg:max-w-[720px] mx-auto lg:mx-0 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.55s', animationFillMode: 'both' }}
            >
              <strong>Dubai's trusted tea manufacturer since 1980.</strong> Complete private label solutions with 25+ premium blends, custom packaging, and 5,000 kg daily production capacity. Serving UAE, GCC, and international markets.
            </p>

            <div
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-up"
              style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
            >
              <a href="/services" aria-label="View our private label tea services">
                <button className="h-10 sm:h-12 lg:h-14 px-4 sm:px-5 lg:px-6 rounded-lg border border-gray-900 text-white bg-[#152912] text-sm lg:text-lg hover:bg-[#5d3033] hover:scale-105 transition-all duration-300">
                  Our Services
                </button>
              </a>
              <a href="/contact" aria-label="Get a free consultation for your tea brand">
                <button className="h-10 sm:h-12 lg:h-14 px-4 sm:px-5 lg:px-6 rounded-lg bg-[#5d3033] text-white text-sm lg:text-lg hover:bg-[#152912] hover:scale-105 hover:shadow-lg transition-all duration-300">
                  Get Free Quote
                </button>
              </a>
            </div>

          </div>
        </header>

        <img
          src="/cup.png"
          alt="Premium tea cup showcasing PTDM quality tea blends available in Dubai UAE"
          className="pointer-events-none select-none absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-[7%] bottom-[0px] sm:bottom-[10px] lg:bottom-[80px] w-[140px] sm:w-[220px] md:w-[300px] lg:w-[760px] object-contain z-10 opacity-80 lg:opacity-100"
          loading="lazy"
        />

        <aside
          className="hidden lg:flex w-[34%] bg-[#113116] relative items-left justify-center z-30 animate-slide-right"
          style={{ animationFillMode: 'both' }}
          aria-label="Featured product showcase"
        >
          <img
            src="/slider-text-img-1.png"
            alt="Golden Morning Premium Tea - Best selling Karak tea blend in Dubai"
            className="w-[70%] object-contain mt-40 mr-24 animate-fade-in animate-float-subtle"
            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
            loading="lazy"
          />
        </aside>

      </div>

    </section>
  );
}
