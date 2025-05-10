import {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  TrendingUp,
  Database,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Applications",
      description: "Cross-platform mobile apps with seamless experiences.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Designs that enhance usability, accessibility, and beauty.",
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-Commerce Solutions",
      description: "Custom online stores with secure payment integrations.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Helping brands reach and grow their audience effectively.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Web Applications",
      description: "Custom web apps tailored to your business needs.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-3 text-lg text-gray-600">We offer a wide range of digital solutions</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-transparent hover:bg-gradient-to-br from-blue-100/40 to-indigo-100/60 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
