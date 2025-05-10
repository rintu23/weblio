import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';
import mun from "../assets/muneer.jpg";

export default function ContactPage() {
  const teamMembers = [
    {
      name: "Muhammed Muneer",
      role: "Project Manager",
      image: mun,
    },
    {
      name: "Athul M",
      role: "Software Architect",
      image: "/founders/athul.jpg",
    },
    {
      name: "Adarsh S",
      role: "Social Media Manager",
      image: "/founders/adarsh.jpg",
    },
    {
      name: "Rintu Babu",
      role: "System Administrator",
      image: "/founders/rintu.jpg",
    },
    {
      name: "Adithyan",
      role: "Editor",
      image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
  ];
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(
      'service_gikke6t',        // Your service ID
      'template_nfwn9hj',        
      e.target,                 // The form
      'K0LTkASXbfHIbhzmF'       // Your public key
    )
    .then(
      (result) => {
        alert('Message sent successfully!');
        console.log(result.text);
        e.target.reset(); // optional: clear form after send
      },
      (error) => {
        console.error('Email send error:', error);
        alert('Failed to send message. Please try again.');
      }
    );
  };
  
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="bg-[#121212] min-h-screen py-20 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900">Contact Us</h2>
            <p className="mt-2 text-lg text-gray-600">
              We'd love to hear from you. Reach out with your questions or project ideas!
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 mb-12" data-aos="fade-up">
            <div className="flex items-center text-gray-700">
              <Mail className="h-6 w-6 text-indigo-600 mr-3" />
              <span>webliosolution@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Phone className="h-6 w-6 text-green-600 mr-3" />
              <span>+91 81296 51596</span>
            </div>
            <div className="flex items-start text-gray-700">
              <MapPin className="h-6 w-6 text-pink-600 mr-3 mt-1" />
              <span>
                Weblio Solutions, <br />
                Kottarakkara, Kollam, Kerala, India
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#a0a0a0] shadow-md rounded-xl p-8" data-aos="fade-up">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                name="e_name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                name="email_from"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                name="e_msg"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
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
      </section>

      {/* Founders Section */}
      <section className="bg-[#121212] min-h-screen py-20 text-white px-4 sm:px-6 lg:px-8" data-aos="fade-down">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-4xl font-bold text-blue-900 mb-14">Meet Our Founders</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          className="group [perspective:1000px]"
        >
          <div className="relative h-64 w-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute inset-0 bg-[#a0a0a0] rounded-2xl shadow p-4 flex flex-col items-center justify-center backface-hidden">
              <p className="text-lg font-semibold text-gray-800">{member.name}</p>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-[#a0a0a0] rounded-2xl shadow p-4 flex items-center justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-xl border-2 border-blue-500 shadow-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    </>
  );
}
