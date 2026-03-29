import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      // Ensure the path matches your project structure (public vs assets)
      const response = await fetch(`/assets/${props.video}`); 
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        rel="noreferrer"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {/* Added dynamic sizing classes */}
        <img 
          src={props.image} 
          alt={props.alt} 
          className="responsive-img" 
        />
        {isVideo && (
          <video 
            src={video} 
            autoPlay 
            muted 
            playsInline 
            loop 
            className="responsive-video"
          ></video>
        )}
      </a>
    </div>
  );
};

export default WorkImage;