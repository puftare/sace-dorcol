import Image from "next/image";

interface CoctailMenuProps {
  src: string;
  title: string;
  description: string;
}

export default function CoctailMenu({
  src,
  title,
  description,
}: CoctailMenuProps) {
  return (
    <div className="bg-surface rounded-lg overflow-hidden shadow-lg flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Text content */}
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm text-offWhite flex-1">{description}</p>
      </div>
    </div>
  );
}
