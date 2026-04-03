import AnimateIn from "./AnimateIn";

const clients = [
  { name: "LG FMCG", logo: "/lglogo.png" },
  { name: "Hindustani Foods", logo: "/maniza.png" },
  { name: "Maniza", logo: "/nirwana.png" },
  { name: "Tasncem", logo: "/ramz.png" },
  { name: "Ramz", logo: "/tasneem.png" },
  { name: "Nirvana Tea", logo: "/hindustan.png" },
];

export default function Clients() {
  return (
    <section className="py-6 sm:py-8 bg-[#fffdf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center font-dancing mt-4 sm:mt-6 text-[#152912] mb-4 sm:mb-6">Trusted by</p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {clients.map((client, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <img
                src={client.logo}
                alt={client.name}
                className="h-14 sm:h-18 lg:h-20 object-contain hover:scale-110 transition duration-300 cursor-pointer"
              />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}