import { Mail, Phone, MapPin, User } from "lucide-react";

export default function ContactPage() {
  const teamMembers = [
    { name: "Muhammed Muneer", role: "Project Manager" },
    { name: "Athul M", role: "Software Architect" },
    { name: "Adarsh S", role: "Social Media Manager " },
    { name: "Rintu Babu", role: "System Administrator" },
    { name: "Adithyan", role: "Editor" },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-lg text-gray-600">
            We'd love to hear from you. Reach out with your questions or project ideas!
          </p>
        </div>

        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="flex items-center text-gray-700">
              <Mail className="h-6 w-6 text-indigo-600 mr-3" />
              <span>webliosolution@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Phone className="h-6 w-6 text-green-600 mr-3" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-start text-gray-700">
              <MapPin className="h-6 w-6 text-pink-600 mr-3 mt-1" />
              <span>
                Weblio Solutions, <br />
                Kottarakkara, Kollam, Kerala, India
              </span>
            </div>

            {/* Owners Section */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Meet Our Founders</h3>
              <ul className="space-y-4">
                {teamMembers.map((member, idx) => (
                  <li key={idx} className="flex items-center">
                    <User className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <p className="font-medium text-gray-800">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-xl p-8" data-aos="fade-left">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
