const IframeEmbed = ({
  src,
  title,
  width = "100%",
  height = "600px",
}: {
  src: string;
  title: string;
  width?: string;
  height?: string;
}) => (
  <iframe
    src={src}
    title={title}
    width={width}
    height={height}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

export default IframeEmbed;
