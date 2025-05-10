import {
    Award,
    Clock,
    Users,
    CheckCircle,
  } from "lucide-react";
  
  export default function AboutSection() {
    const stats = [
      {
        icon: <Clock className="h-6 w-6 text-indigo-600" />,
        value: "0+",
        label: "Years of Experience",
      },
      {
        icon: <CheckCircle className="h-6 w-6 text-green-600" />,
        value: "0+",
        label: "Projects Completed",
      },
      {
        icon: <Users className="h-6 w-6 text-yellow-500" />,
        value: "0+",
        label: "Happy Clients",
      },
      {
        icon: <Award className="h-6 w-6 text-pink-500" />,
        value: "0+",
        label: "Industry Awards",
      },
    ];
  
    return (
      <section id="about" className="py-20 bg-[#121212] text-white"  data-aos="fade-right">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
            {/* About Content */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                About Weblio Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're a team of passionate web developers dedicated to creating
                exceptional digital experiences.
              </p>
  
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2016, Weblio Solutions has been at the forefront of
                  web development innovation. We specialize in creating custom
                  websites and applications that not only look stunning but also
                  perform exceptionally well.
                </p>
                <p>
                  Our approach is client-centric, focusing on understanding your
                  business goals and translating them into effective digital
                  solutions. We combine creativity with technical expertise to
                  deliver projects that exceed expectations.
                </p>
                <p>
                  With a team of experienced developers, designers, and digital
                  strategists, we have the skills and knowledge to tackle projects
                  of any size and complexity.
                </p>
              </div>
  
              <div className="mt-8">
                <a
                  href="/about"
                  className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
  
            {/* Stats */}
            <div className="mt-12 lg:mt-0">
  <div className="rounded-xl shadow-lg p-8 transition hover:shadow-xl bg-[#a0a0a0]">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      Our Achievements
    </h3>
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="flex justify-center mb-2">{stat.icon}</div>
          <div className="text-3xl font-extrabold text-gray-900">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>

    <div className="mt-8 pt-6 border-t border-gray-300">
      <h4 className="font-semibold text-gray-900 mb-4">
        Why Choose Us?
      </h4>
      <ul className="space-y-3">
        {[
          "Expert team with diverse skills",
          "Tailored solutions for your business",
          "Transparent communication",
          "On-time and on-budget delivery",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-1" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
    );
  }
  