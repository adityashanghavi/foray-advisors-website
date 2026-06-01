'use client'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
          Expert Advisory Services
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Foray Advisors provides strategic guidance and professional advisory services to help your business thrive in an ever-changing market.
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition text-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
