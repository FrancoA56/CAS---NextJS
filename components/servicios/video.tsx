export default function Video() {
  return (
    <video
      width="240"
      height="320"
      autoPlay
      loop
      muted
      preload="auto"
      playsInline
      className="relative left-8 top-[155px] rounded-lg "
    >
      <source
        src="/video/contenidoVideo.webm"
        type="video/webm"
      />
      <source
        src="/video/contenidoVideo.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}
