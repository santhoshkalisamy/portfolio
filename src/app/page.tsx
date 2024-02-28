import Image from "next/image";

export default function Home() {
  return (
      <div className="h-full flex flex-col">
          <div className="h-1/2 relative">
              <Image src="/developer.png" alt="developer" fill className="object-contain"></Image>
          </div>
          <div className="h-1/2">

          </div>
      </div>
  );
}
