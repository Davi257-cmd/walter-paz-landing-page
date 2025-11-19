export default function VideoBackground() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'brightness(0.5)',
        }}
        onLoadedData={(e) => {
          // Garantir que o vídeo seja reproduzido
          const video = e.currentTarget
          video.play().catch(() => {
            // Ignorar erros de autoplay
          })
        }}
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay leve para legibilidade */}
      <div className="absolute inset-0 bg-black/40" />
    </>
  )
}

