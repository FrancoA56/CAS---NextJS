export function VideoComponent() {
  return (
    <video width="320" height="240" controls preload="none">
      <source src="../public/video/contenidoVideo.webm" type="video/webm" />
      
      Your browser does not support the video tag.
    </video>
  )
}