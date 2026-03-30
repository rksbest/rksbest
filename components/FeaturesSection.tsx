'use client'

export default function FeaturesSection() {
  const features = [
    {
      title: 'Connection',
      description: 'Build meaningful relationships through shared values and appreciation.',
      icon: '🤝',
    },
    {
      title: 'Growth',
      description: 'Develop personally and professionally with tools and resources.',
      icon: '📈',
    },
    {
      title: 'Community',
      description: 'Join a vibrant community of like-minded individuals.',
      icon: '🌍',
    },
    {
      title: 'Innovation',
      description: 'Explore new ideas and creative solutions together.',
      icon: '💡',
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8 bg-card-bg/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Values</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What drives everything we do at Gratitude Universe
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 border border-border rounded-lg bg-background hover:border-accent/50 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
