// src/components/Contact.tsx
export default function Contact() {
  return (
    <section className="py-20 bg-offWhite px-4">
      <div className="max-w-2xl mx-auto bg-surface rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-semibold neon mb-2">Contact</h2>
        <p className="text-base text-offWhite mb-6">
          Gospodar Jovanova 69, Dorćol, Belgrade
        </p>

        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-offWhite mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="
                w-full
                p-3
                bg-bg
                rounded-lg
                border border-transparent
                placeholder:text-gray-400
                focus:outline-none
                focus:border-neon
                focus:ring-2 focus:ring-neon/50
                transition
              "
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-offWhite mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your message…"
              className="
                w-full
                p-3
                bg-bg
                rounded-lg
                border border-transparent
                placeholder:text-gray-400
                focus:outline-none
                focus:border-neon
                focus:ring-2 focus:ring-neon/50
                resize-none
                transition
              "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full
              py-3
              bg-neon
              text-black
              font-semibold
              rounded-lg
              shadow-neon-glow
              hover:scale-105
              transition
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
