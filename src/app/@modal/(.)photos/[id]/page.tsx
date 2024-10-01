import { getImage } from '~/server/queries';
import { Modal } from './modal';
import Image from 'next/image';

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

  const idAsNum = Number(photoId)
  if (Number.isNaN(idAsNum)) throw new Error('Invalid photo id');

  const image = await getImage(idAsNum)
  return <div><Image src={image.url} alt={image.name} width={200} height={200}/></div>;
}