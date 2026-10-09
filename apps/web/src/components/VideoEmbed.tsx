import { toEmbedUrl } from "@/lib/video";

/** Видео из блока урока: YouTube/Vimeo — плеером, остальное — просто ссылкой. */
export function VideoEmbed({ url }: { url: string }) {
  const embedUrl = toEmbedUrl(url);

  if (!embedUrl) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="text-[15px] font-semibold text-blue underline">
        Открыть видео →
      </a>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "16 / 9" }}>
      <iframe
        src={embedUrl}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
