import { Link as LinkIcon } from "lucide-react";

const TravelCard = ({ travel }) => {
  const { title, url, description, photos, tags } = travel;

  const shortDescription = description.slice(0, 100);

  return (
    <article className="relative flex flex-col md:flex-row gap-4 w-full items-start">
      <img
        src={photos[0]}
        alt={title}
        className="w-full md:w-[38%] aspect-[4/3] object-cover rounded-2xl shrink-0"
      />

      <div className="flex-1 min-w-0 md:pr-12">
        <h2 className="text-lg md:text-xl font-bold text-black mb-1">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>

        <p className="text-[#666] text-sm leading-relaxed">
          {shortDescription}...{" "}
          <a
            href={url}
            className="text-accent-blue underline hover:text-accent-blue/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            อ่านต่อ
          </a>
        </p>

        <p className="text-[#777] text-sm mt-2">
          หมวด{" "}
          {tags.slice(0, -1).map((tag, index) => (
            <span key={tag}>
              <span className="underline">{tag}</span>
              {index < tags.length - 2 ? " " : ""}
            </span>
          ))}{" "}
          และ <span className="underline">{tags[tags.length - 1]}</span>
        </p>

        <div className="flex gap-2 mt-3">
          {photos.slice(1).map((photo) => (
            <img
              src={photo}
              alt={title}
              key={photo}
              className="w-16 h-16 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex absolute bottom-2 right-2 flex items-center justify-center shrink-0 w-10 h-10 border border-accent-blue rounded-full text-accent-blue hover:bg-accent-blue/5 self-center"
        aria-label="เปิดลิงก์บทความ"
      >
        <LinkIcon className="size-4" />
      </a>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden absolute top-2 right-2 flex items-center justify-center w-9 h-9 border border-accent-blue rounded-full bg-white/90 text-accent-blue"
        aria-label="เปิดลิงก์บทความ"
      >
        <LinkIcon className="size-4" />
      </a>
    </article>
  );
};

export default TravelCard;
