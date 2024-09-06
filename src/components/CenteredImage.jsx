export const CenteredImage = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center">
      <img src={src} alt={alt} className="h-48" />
    </div>
  );
};
