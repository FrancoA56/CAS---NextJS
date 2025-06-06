export default function AnimatedVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: "50%",
        height: "auto",
        objectFit: "cover",
        display: "block",
        mixBlendMode: 'screen',
      }}
    >
      <source src="/media/corazonVideo.webm" type="video/webM" />
    </video>
  );
}
