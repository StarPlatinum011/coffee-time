import { SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import { getMyImages } from '~/server/queries';
export const dynamic = 'force-dynamic'

async function ShowImages() {
  const images = await getMyImages();

  return(

    <main className="">
    <div className="flex flex-wrap gap-4 justify-center">
      {
        images.map((img)=>(
          <div key={img.id} className=" w-48 p-4 justify-center">
            <Image src={img.url} 
              width={190}
              height={190}
              style={{objectFit: "contain"}} 
              alt={img.name} 
            />
              <p>{img.name}</p>
          </div>
        ))
      }
    </div>
  </main>
  )
}

export default  function HomePage() {

  
  
  return (
    <div>
      <SignedIn>
        <ShowImages/>
      </SignedIn>
      <SignedOut>
        <p>please sign in to continue</p>
      </SignedOut>
    </div>
   
  );
}
