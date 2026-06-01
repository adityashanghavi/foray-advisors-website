import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">About</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-100">
              <Image
                src="/profile photo.jpg"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              Dedicated and results-driven professional with over 25 years of hands-on experience
              in leading and increasing growth of various medium and large scale companies in
              industries such as engineering, manufacturing, IT, media and entertainment.
              Particular expertise, passion and knowledge in incubation of businesses as well as
              development of new products and markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
