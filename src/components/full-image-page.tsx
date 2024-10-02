import { clerkClient } from '@clerk/nextjs/server';
import { getImage } from '~/server/queries';
// import Image from 'next/image';

export default async function FullPageImageView(props: { id: number }) {

  const image = await getImage(props.id)

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  console.log(uploaderInfo.fullName)

  return(
    <div className='flex h-full w-full min-w-0'>
        <div className='flex-shrink flex-grow'>
            <img src={image.url} alt={image.name} className='object-contain h-full w-full'/>
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
        </div>
    </div>
  ) 
}