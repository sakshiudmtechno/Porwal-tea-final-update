import { ArrowRight } from 'lucide-react';
import AnimateIn from './AnimateIn';

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative py-24 lg:py-16"
        style={{
          backgroundImage: 'url(https://media.istockphoto.com/id/157308877/photo/growing-tea-leaves.jpg?s=612x612&w=0&k=20&c=88qSETCeJX2Y2d3M-8_nYUeizN5V_q17NgA0OG1XLh4=)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-green-950/80" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Launch your own tea brand with PTDM
            </h2>
          </AnimateIn>
          <AnimateIn delay={150}>
            <p className="text-green-200 text-sm mb-8">Get the latest updates on new blends, packaging formats & exclusive offers — straight to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-center sm:items-stretch">
              <button className="px-6 py-3 bg-white text-green-900 font-semibold text-sm rounded-full hover:bg-green-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap sm:ml-28">
                Connect With Us Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
