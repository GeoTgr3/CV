import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-4">
          Feel free to reach out to me at:
        </p>

        <div className="inline-flex items-center space-x-3 bg-white shadow-md p-4 rounded-lg">
          <Mail className="text-blue-600 h-6 w-6" />
          <a
            href="mailto:achraf6bel@gmail.com"
            className="text-blue-600 text-lg font-medium hover:underline"
          >
            achraf6bel@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
