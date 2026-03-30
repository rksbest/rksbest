'use client'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Column - Name and Description */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Gratitude Universe
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
            Welcome to a space dedicated to appreciation, growth, and meaningful connections.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
                About
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of gratitude to transform lives and build stronger communities.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating a universe where appreciation drives innovation and connection.
              </p>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-3 bg-accent text-background font-semibold rounded hover:bg-accent-dark transition-colors duration-200">
              Get Started
            </button>
            <button className="px-8 py-3 border border-accent text-accent font-semibold rounded hover:bg-accent hover:text-background transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-dark/20 rounded-lg blur-3xl" />
            <div className="relative z-10 text-center">
              <div className="inline-block p-8 border border-accent/30 rounded-lg bg-card-bg/50 backdrop-blur">
                <p className="text-accent text-4xl font-bold mb-2">✨</p>
                <p className="text-foreground text-lg font-semibold">Gratitude Universe</p>
                <p className="text-muted-foreground text-sm mt-2">Building connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
