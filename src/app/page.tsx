import { db } from "~/server/db";

export const dynamic = 'force-dynamic'

const mockUrls = [
  'https://utfs.io/f/eUakOPTIDZvLg4MndPLcbhSXp2AVzLx7u18jYewoyPEsRMm6',
  'https://utfs.io/f/eUakOPTIDZvLqPPyVm4FiNY5WHbsLzDapQMRfZE3n1UG2h0u',
  'https://utfs.io/f/eUakOPTIDZvLDz3LcxXO3lYdckDGjzAyLbZn2XgSMrUE6HR0',
  'https://utfs.io/f/eUakOPTIDZvLeKfuTlIDZvLeSrBzpcmkOVI8tPWdTa5gouxj',
  'https://utfs.io/f/eUakOPTIDZvLyLsuznFqdBouyMZN7WQ8n201sftT6cH3PILD'
]

const mockImages = mockUrls.map((url, index ) => ({
  id:index +1,
  url,
  
}))
export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">

        {
          posts.map((post) => (
            <div key={post.id}>
              {post.name}
            </div>
          ))
        }

        {
          mockImages.map((img)=>(
            <div key={img.id} className="w-48 p-4">
              <img src={img.url} alt="vagabond image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}
