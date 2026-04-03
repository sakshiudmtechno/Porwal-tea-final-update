import { useState } from 'react';
import { Mail, Phone, Globe, MapPin, CheckCircle, MessageSquare, Clock } from "lucide-react";

import AnimateIn from "../components/AnimateIn";


const contactInfo = [
  {
    icon: Globe,
    label: 'Website',
    value: 'www.porwalderimax.com',
    href: 'https://www.porwalderimax.com',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@porwalderimax.com',
    href: 'mailto:info@porwalderimax.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+971 00 000 0000',
    href: 'tel:+97100000000',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'UAE — Export & Distribution Hub',
    href: '#',
  },
];

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'MOQs vary by packaging format. Box packaging starts at 240 units, jars from 280 units, and tea bags from 21,600 dips. Contact us for a full breakdown.',
  },
  {
    q: 'How long does production take?',
    a: 'Standard lead time is 2–3 weeks after design approval and deposit confirmation. Rush orders may be accommodated depending on capacity.',
  },
  {
    q: 'Can I get a sample before placing a large order?',
    a: 'Yes — sample requests are available. Please contact our team with your blend preferences and we will arrange sample shipment.',
  },
  {
    q: 'Do you handle export documentation?',
    a: 'Absolutely. PTDM provides full export documentation support including certificates of origin, customs paperwork, and shipping coordination.',
  },
];

interface FormState {
  name: string;
  company: string;
  location: string;
  countryCode: string;
  phone: string;
  interests: string[];
  message: string;
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    company: '',
    location: '',
    countryCode: '+971',
    phone: '',
    interests: [],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormState(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const interestText = formState.interests.length > 0
      ? formState.interests.join(', ')
      : 'Not selected';

    const message = `
*New Tea Inquiry*

Name: ${formState.name}
Company: ${formState.company}
Location: ${formState.location}
Phone: ${formState.countryCode} ${formState.phone}

Interest: ${interestText}

Message: ${formState.message || 'N/A'}
    `.trim();

    const whatsappNumber = "971564171070";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[40vh] sm:h-[50vh] min-h-[280px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1233530/pexels-photo-1233530.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Contact PTDM"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#152912]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16 sm:pt-20">
          <AnimateIn>
            <p className="text-xs font-semibold text-[#c2c89a] uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Let's Grow Together
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              Whether you're launching a new tea brand or scaling an existing one — our team is ready to help.
            </p>
          </AnimateIn>
        </div>
      </div>

      <section className="py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {contactInfo.map((item, i) => (
              <AnimateIn key={item.label} delay={i * 70}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#152912]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-50 group-hover:bg-[#152912] rounded-xl flex items-center justify-center mb-3 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#152912] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-xs font-medium text-[#152912] leading-tight">{item.value}</p>
                </a>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimateIn variant="left">
              <div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-4">Partner with PTDM</p>
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#152912] leading-tight mb-4">
                  Our door is<br />always open
                </h2>
                <h3 className="font-dancing text-3xl text-[#5d3033] mb-6">Growing Together in Tea</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Ready to launch your own tea brand? Porwal Tea & Deri Max Beverages provides complete private label solutions since 1980. From sourcing and blending to packaging, storage, and logistics — we handle it all so you can focus on sales and growth.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Clock, text: 'Response within 24 hours' },
                    { icon: CheckCircle, text: 'Free consultation & blend sampling' },
                    { icon: MessageSquare, text: 'Dedicated account manager assigned' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm text-gray-600">
                      <item.icon className="w-4 h-4 text-[#152912] flex-shrink-0" />
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-stone-50 rounded-2xl border border-gray-100">
                  <p className="font-dancing text-xl text-[#152912] mb-1">Promotional Offer</p>
                  <p className="text-sm text-gray-600"><strong className="text-[#5d3033]">10% discount</strong> available on tea prices for new private label partners. Mention this offer when you contact us.</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn variant="right" delay={150}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#152912] mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    const form = e.currentTarget;
                    const formData = new FormData(form);

                    const code = formData.get("CountryCode");
                    const mobile = formData.get("Mobile");

                    if (!formData.get("Name") || !formData.get("remarks") || !formData.get("Address") || !code || !mobile) {
                      alert("Please fill all required fields");
                      return;
                    }

                    const fullMobile = `${code} ${mobile}`;
                    formData.set("Mobile", fullMobile);

                    const params = new URLSearchParams(formData as any).toString();

                    fetch(`https://salesnayak.com/API/AddLead?${params}`, {
                      method: "POST",
                      mode: "no-cors",
                    })
                      .then(() => {
                        setSubmitted(true);
                        window.location.href = "https://porwalderimax.com/";
                      })
                      .catch(() => {
                        setSubmitted(true);
                        window.location.href = "https://porwalderimax.com/";
                      });
                  }}
                  className="bg-gray-100 p-8 rounded-2xl shadow-sm space-y-6 w-full"
                >
                  <h3 className="text-xs font-bold tracking-widest text-gray-700">CONTACT</h3>

                  {/* Name + Company */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Your Name</label>
                      <input
                        name="Name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Company Name</label>
                      <input
                        name="remarks"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                  </div>

                  {/* Location + Phone */}
                  <div className="grid md:grid-cols-2 gap-4 items-start">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Location</label>
                      <input
                        name="Address"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>

                    <div className="w-full">
                      {/* FIX: block + full width keeps label inside */}
                      <label className="text-sm font-medium text-gray-700 block mb-2">
                        Phone
                      </label>

                      <div className="flex gap-2 w-full">
                        <select
                          name="CountryCode"
                          required
                          className="w-[90px] shrink-0 px-2 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
                        >
                          <option value="">Code</option>
                          <option value="+91">India (+91)</option>
                          <option value="+971">UAE (+971)</option>
                          <option value="+1">USA (+1)</option>
                          <option value="+44">UK (+44)</option>
                        </select>

                        <input
                          name="Mobile"
                          required
                          placeholder="Mobile number"
                          className="flex-1 w-6 px-4 py-3 rounded-xl border border-gray-200"
                        />  
                      </div>

                      {/* optional helper text */}
                      <p className="text-xs text-gray-400 mt-1">
                        We'll prepend the country code to your number.
                      </p>
                    </div>
                  </div>

                  {/* Interests */}
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-gray-700 mb-3">
                      WHAT ARE YOU INTERESTED IN?
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <label className="flex items-center gap-2 border border-gray-200 p-3 rounded-xl bg-white hover:border-green-400 cursor-pointer">
                        <input type="checkbox" name="LeadStatus" value="21608" />
                        Buy Loose/Bulk Tea
                      </label>

                      <label className="flex items-center gap-2 border border-gray-200 p-3 rounded-xl bg-white hover:border-green-400 cursor-pointer">
                        <input type="checkbox" name="LeadStatus" value="21609" />
                        Private Label Packaging
                      </label>

                      <label className="flex items-center gap-2 border border-gray-200 p-3 rounded-xl bg-white hover:border-green-400 cursor-pointer">
                        <input type="checkbox" name="LeadStatus" value="21610" />
                        How to Start Tea Business
                      </label>
                    </div>
                  </div>

                  {/* Hidden fields */}
                  <input type="hidden" name="Companycode" value="486029" />
                  <input type="hidden" name="LeadStageCode" value="23446" />
                  <input type="hidden" name="LeadTypeCode" value="133465" />
                  <input type="hidden" name="LeadSourceCode" value="11905" />

                  <button className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-green-500 to-green-700 shadow-lg hover:scale-[1.01] transition">
                    Submit
                  </button>
                </form>
              )}

            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">Common Questions</p>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#152912]">FAQs</h2>
            </div>
          </AnimateIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateIn key={faq.q} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#152912]/20 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-[#152912] text-sm mb-2 flex items-start gap-2">
                    <span className="text-[#5d3033] font-bold flex-shrink-0">Q.</span>
                    {faq.q}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed pl-5">{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

     <section className="py-16 lg:py-20 bg-[#152912]">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <AnimateIn>
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-[#c2c89a] uppercase tracking-widest mb-3">
          Our Clients
        </p>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-3">
          Trusted by Leading Brands
        </h2>
        <p className="text-white/60 text-sm max-w-md mx-auto">
          Join the growing family of businesses that trust PTDM for their private label tea solutions.
        </p>
      </div>
    </AnimateIn>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-10">
      {[
        { src: '/lglogo.png', name: 'LG FMCG Trading' },
        { src: '/hindustan.png', name: 'Hindustan Foods' },
        { src: '/maniza.png', name: 'Maniza' },
        { src: '/tasneem.png', name: 'Tasneem' },
        { src: '/ramz.png', name: 'Ramz' },
        { src: '/nirwana.png', name: 'Nirvana Tea' },
      ].map((brand, i) => (
        <AnimateIn key={brand.name} delay={i * 60}>
          <div className="group flex flex-col items-center gap-3">
            {/* Logo Card */}
            <div className="w-full aspect-square bg-white rounded-xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <img
                src={brand.src}
                alt={brand.name}
                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Brand Name */}
            <p className="text-white/70 text-xs text-center group-hover:text-white transition-colors duration-300 leading-tight">
              {brand.name}
            </p>
          </div>
        </AnimateIn>
      ))}
    </div>

    <AnimateIn>
      <p className="text-center text-white/80 text-sm tracking-wide">
        ...and many more growing brands across the UAE and beyond.
      </p>
    </AnimateIn>
  </div>
</section>
    </div>
  );
}
