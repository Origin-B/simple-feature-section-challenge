import { type Feature } from "../data-type";

export default function FeatureCard({ feature }: { feature: Feature }) {
  const { heading, paragraph, icon, images } = feature;

  return (
    <article className="bg-card-bg flex max-w-90 flex-col items-start justify-between gap-2 rounded-xl p-6">
      <span className={`rounded-full p-2 text-2xl ${icon.bg}`}>
        {icon.text}
      </span>
      <h3 className="text-card-heading max-w-[25ch]">{heading}</h3>
      <p className="max-w-[25ch]">{paragraph}</p>

      <div className="overflow-hidden rounded-xl">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.path}
            alt={heading + `${img.id}`}
            className={`w-full ${img.id === 1 ? "hidden" : "block"} md:${img.id === 1 ? "block" : "hidden"}`}
          />
        ))}
      </div>
    </article>
  );
}
