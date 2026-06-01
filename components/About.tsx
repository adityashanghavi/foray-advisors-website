const basePath = process.env.NODE_ENV === 'production' ? '/foray-advisors-website' : ''

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-100 mb-6">
          <img
            src={`${basePath}/profile.jpg`}
            alt="Ajay Shanghavi"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ajay Shanghavi</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
          Dedicated and results-driven professional with over 25 years of hands-on experience
          in leading and increasing growth of various medium and large scale companies in
          industries such as engineering, manufacturing, IT, media and entertainment.
          Particular expertise, passion and knowledge in incubation of businesses as well as
          development of new products and markets.
        </p>
      </div>
    </section>
  )
}
