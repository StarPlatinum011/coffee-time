import { clerkClient } from '@clerk/nextjs/server';
import { deleteImage, getImage } from '~/server/queries';
import { Button } from './ui/button';

export default async function FullPageImageView(props: { photoId: string }) {

  const idAsNumber = Number(props.photoId)
  console.log('photo id, ', idAsNumber)
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")

  const image = await getImage(idAsNumber)

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  console.log(uploaderInfo.fullName)

  return(
    <div className='flex h-full w-full min-w-0 p-4'>
        <div className='flex-shrink flex-grow'>
            <img src={image.url} alt={image.name} className='object-contain h-full w-full '/>
        </div>

        <div className='flex flex-col w-48 flex-shrink-0 border-l'>
            <div className='text-lg border-b text-center p-2'>{image.name}</div>
            <div className='flex flex-col p-2'>
              <span>Uploaded By: </span>
              <span>{uploaderInfo.fullName}</span>
            </div>
            <div className='flex flex-col p-2'>
              <span>Created On: </span>
              <span>{new Date(image.createdAt).toLocaleDateString()}</span>
            </div>

            <div>
              <form action={ async ()=> {
                'use server';
                await deleteImage(idAsNumber);
              }}>
                <Button type='submit' variant={'destructive'}>Delete</Button>
              </form>
            </div>
        </div>
    </div>
  ) 
}