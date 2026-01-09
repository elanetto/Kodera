export default function VideoShowcase({ videos }) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="max-w-[450px] flex flex-col  ">
      {videos.map((vid, i) => (
        <video
          key={i}
          src={vid}
          className="w-full "
          autoPlay
          loop
          muted
          playsInline
        />
      ))}
    </div>
  );
}
