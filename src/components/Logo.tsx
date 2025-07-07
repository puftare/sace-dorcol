import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/images/sace-transparent.png"
        alt="Saće · Dorćol Logo"
        width={400}
        height={225}
        priority
        className="bg-[#E6DDCE]/60"
      />
    </div>
  );
}
