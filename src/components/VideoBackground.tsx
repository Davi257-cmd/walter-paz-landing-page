import { useRef, useEffect } from 'react'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'brightness(0.5)',
          willChange: 'auto',
        }}
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay leve para legibilidade */}
      <div className="absolute inset-0 bg-black/40" />
    </>
  )
}

