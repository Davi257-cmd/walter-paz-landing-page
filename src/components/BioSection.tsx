import { ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface BioSectionProps {
  name: string
  title: string
  bio: string
  photoUrl: string
  ctaText: string
  onCtaClick: () => void
  stats?: Array<{ value: string; label: string }>
  className?: string
}

export const BioSection = ({
  name,
  title,
  bio,
  photoUrl,
  ctaText,
  onCtaClick,
  stats,
  className
}: BioSectionProps) => {
  const [photoRef, photoVisible] = useIntersectionObserver()
  const [contentRef, contentVisible] = useIntersectionObserver()
  const [badgeRef, badgeVisible] = useIntersectionObserver({ rootMargin: '-30px' })

  return (
    <section 
      id="sobre" 
      className={cn(
        "relative pt-32 pb-0 px-4 overflow-hidden bg-gradient-to-b from-black via-gray-900/50 to-black",
        className
      )}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Side */}
          <div
            ref={photoRef}
            className={cn(
              "relative group optimize-render",
              photoVisible ? "fade-in" : "opacity-0"
            )}
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl blur-2xl" />
            
            {/* Photo Container */}
            <div className="relative aspect-square max-w-xs md:max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl" />
              <div className="relative h-full rounded-2xl overflow-hidden border border-red-600/20 shadow-2xl shadow-red-600/10 transition-transform duration-200 hover:scale-[1.02]">
                <img
                  src={photoUrl}
                  alt={name}
                  className="w-full h-full object-contain p-4"
                  loading="lazy"
                  width="300"
                  height="300"
                  decoding="async"
                  fetchPriority="low"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div
                ref={badgeRef}
                className={cn(
                  "absolute -bottom-2 md:-bottom-6 -right-2 md:-right-6 bg-red-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-lg shadow-red-600/50 border border-red-500",
                  badgeVisible ? "fade-in" : "opacity-0"
                )}
                style={{ animationDelay: '0.2s' }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-bold">Especialista</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            ref={contentRef}
            className={cn(
              "space-y-8 optimize-render",
              contentVisible ? "fade-in" : "opacity-0"
            )}
          >
            {/* Badge */}
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium",
                contentVisible ? "fade-in" : "opacity-0"
              )}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              Conheça o especialista
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h2
                className={cn(
                  "text-5xl md:text-6xl font-bold text-white",
                  contentVisible ? "fade-in" : "opacity-0"
                )}
                style={{ animationDelay: '0.2s' }}
              >
                {name}
              </h2>
              <p
                className={cn(
                  "text-2xl text-red-600 font-semibold",
                  contentVisible ? "fade-in" : "opacity-0"
                )}
                style={{ animationDelay: '0.3s' }}
              >
                {title}
              </p>
            </div>

            {/* Bio Text */}
            <p
              className={cn(
                "text-lg text-gray-300 leading-relaxed",
                contentVisible ? "fade-in" : "opacity-0"
              )}
              style={{ animationDelay: '0.4s' }}
            >
              {bio}
            </p>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div
                className={cn(
                  "grid grid-cols-3 gap-6 py-6",
                  contentVisible ? "fade-in" : "opacity-0"
                )}
                style={{ animationDelay: '0.5s' }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <button
              onClick={onCtaClick}
              className={cn(
                "group relative inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full transition-all duration-200 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98]",
                contentVisible ? "fade-in" : "opacity-0"
              )}
              style={{ animationDelay: '0.6s' }}
            >
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Trust Badge */}
            <p
              className={cn(
                "text-sm text-gray-500 flex items-center gap-2",
                contentVisible ? "fade-in" : "opacity-0"
              )}
              style={{ animationDelay: '0.7s' }}
            >
              <span className="inline-flex items-center gap-1">
                ✓ Certificado Google Ads
              </span>
              <span className="text-gray-700">•</span>
              <span className="inline-flex items-center gap-1">
                ✓ Meta Blueprint
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

