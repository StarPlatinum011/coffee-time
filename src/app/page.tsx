import { SignedIn, SignedOut } from '@clerk/nextjs';
import { db } from "~/server/db";

export const dynamic = 'force-dynamic'

async function ShowImages() {
  const images = await db.query.image.findMany({
    orderBy: (model, { desc }) => desc(model.id), //ordering the items in a descending order
  });
  return(

    <main className="">
    <div className="flex flex-wrap gap-4">

     

      {
        images.map((img)=>(
          <div key={img.id} className="w-48 p-4">
            <p>{img.name}</p>
            <img src={img.url} alt="vagabond image" />
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
