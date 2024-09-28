
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-400 mb-4">Feel free to reach out to me at:</p>
        <a
          href="mailto:your.email@example.com"
          className="text-cyan-400 text-xl hover:underline"
        >
          my.email@google.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
