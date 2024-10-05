import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";


export const dynamic = "force-dynamic";


async function ShowImages() {
  const images = await getMyImages();

  return (
 
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((img) => (
          <div key={img.id} className="flex flex-col h-48 w-48">
            <Link href={`/photos/${img.id}`}>
              <Image
                src={img.url}
                width={190}
                height={190}
                style={{ objectFit: "contain" }}
                alt={img.name}
              />
            </Link>
            
            <p>{img.name}</p>
          </div>
        ))}
      </div>

  );
}

export default function HomePage() {
  return (
    <div>
      <SignedIn>
        <ShowImages />
      </SignedIn>
      <SignedOut>
        <p>please sign in to continue</p>
      </SignedOut>
    </div>
  );
}
