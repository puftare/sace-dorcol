export default function Contact() {
  return (
    <section className="py-16 bg-gray-900 max-w-2xl mx-auto px-4">
      <h2 className="text-3xl neon mb-4 text-center">Contact</h2>
      <p className="text-center">Gospodar Jovanova 69, Dorćol, Belgrade</p>
      <p className="text-center mt-2">Mon–Thu: 10 AM – 1 AM</p>
      <form className="mt-6 space-y-4">
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-2 bg-gray-800 rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 bg-gray-800 rounded h-24"
        />
        <button
          type="submit"
          className="w-full py-2 neon font-semibold rounded"
        >
          Send
        </button>
      </form>
    </section>
  );
}
