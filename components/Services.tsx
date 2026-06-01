'use client'

export default function Services() {
  const services = [
    {
      title: 'Strategic Planning',
      description: 'Develop comprehensive strategies aligned with your business goals and market opportunities.',
      icon: '📊',
    },
    {
      title: 'Business Development',
      description: 'Accelerate growth through market analysis, partnerships, and expansion strategies.',
      icon: '🚀',
    },
    {
      title: 'Financial Advisory',
      description: 'Expert guidance on financial planning, investment strategy, and risk management.',
      icon: '💰',
    },
    {
      title: 'Operations Optimization',
      description: 'Streamline processes and improve efficiency across your organization.',
      icon: '⚙️',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition bg-gray-50 hover:bg-blue-50"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
