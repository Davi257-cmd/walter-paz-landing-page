import { cn } from "@/lib/utils"

interface AvatarCirclesProps {
  numPeople?: number
  avatarUrls?: Array<{
    imageUrl: string
    profileUrl: string
  }>
  className?: string
}

export function AvatarCircles({ 
  numPeople = 99, 
  avatarUrls, 
  className 
}: AvatarCirclesProps) {
  // Imagens reais de clientes
  const clientImages = [
    "/person/imagem 1.png",
    "/person/imagem 2.png",
    "/person/imagem 3.png",
    "/person/imagem 4.png",
    "/person/imagem 5.png"
  ]
  
  return (
    <div className={cn("flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0", className)}>
      <div className="flex -space-x-3 md:-space-x-4">
        {/* Show 5 client images */}
        {clientImages.map((imageUrl, index) => (
          <div
            key={index}
            className="relative inline-block"
          >
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover bg-gray-800"
              src={imageUrl}
              alt={`Cliente ${index + 1}`}
              loading="lazy"
              width="48"
              height="48"
            />
          </div>
        ))}
        {numPeople > 5 && (
          <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
              +{numPeople - 5}
            </span>
          </div>
        )}
      </div>
      <div className="text-xs md:text-sm text-center md:text-left text-gray-300 md:text-gray-400">
        <span className="font-semibold text-white">{numPeople}+</span> clientes satisfeitos
      </div>
    </div>
  )
}