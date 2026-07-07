import { useState } from "react";
import { Check, Link as LinkIcon } from "lucide-react";

const TravelCard = ({ travel, onTagClick }) => {
  const { title, url, description, photos, tags } = travel;
  const [copied, setCopied] = useState(false);

  const shortDescription = description.slice(0, 100);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("ไม่สามารถคัดลอกลิงก์ได้");
    }
  };

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
            <button
              key={tag}
              type="button"
              onClick={() => onTagClick(tag)}
              className="mr-2"
            >
              <span className="underline">{tag}</span>
            </button>
          ))}
          และ
          <button
            key={tags[tags.length - 1]}
            type="button"
            onClick={() => onTagClick(tags[tags.length - 1])}
            className="underline ml-1"
          >
            {tags[tags.length - 1]}
          </button>
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

      <button
        type="button"
        onClick={handleCopyLink}
        className="hidden md:flex absolute bottom-2 right-2 flex items-center justify-center shrink-0 w-10 h-10 border border-accent-blue rounded-full text-accent-blue hover:bg-accent-blue/5 self-center"
        aria-label={copied ? "คัดลอกลิงก์แล้ว" : "คัดลอกลิงก์บทความ"}
        title={copied ? "คัดลอกแล้ว" : "คัดลอกลิงก์"}
      >
        {copied ? (
          <Check className="size-4" />
        ) : (
          <LinkIcon className="size-4" />
        )}
      </button>

      <button
        type="button"
        onClick={handleCopyLink}
        className="md:hidden absolute top-2 right-2 flex items-center justify-center w-9 h-9 border border-accent-blue rounded-full bg-white/90 text-accent-blue"
        aria-label={copied ? "คัดลอกลิงก์แล้ว" : "คัดลอกลิงก์บทความ"}
        title={copied ? "คัดลอกแล้ว" : "คัดลอกลิงก์"}
      >
        {copied ? (
          <Check className="size-4" />
        ) : (
          <LinkIcon className="size-4" />
        )}
      </button>
    </article>
  );
};

export default TravelCard;
