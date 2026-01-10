const testimonials = [
  { name: '100+ microempresas', business: '', status: 'En lista de espera', quote: 'Sé de los primeros →' },
]

export const SocialProofSection: React.FC = () => {
  // Duplicate the testimonials to create seamless loop
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {extendedTestimonials.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="inline-flex items-center mx-8"
            >
              <span className="text-gray-700 font-medium">{item.name}</span>
              {item.business && (
                <>
                  <span className="mx-2 text-gray-100">|</span>
                  <span className="text-gray-700">{item.business}</span>
                </>
              )}
              <span className="mx-2 text-gray-100">|</span>
              <span className="text-green font-medium">{item.status}</span>
              <span className="mx-2 text-gray-100">|</span>
              <span className="text-gray-700 italic">"{item.quote}"</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
