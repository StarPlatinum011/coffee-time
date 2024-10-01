"use client"; //Declaring this is a client side component

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
export default function TopNav() {

  const router = useRouter();

    return(
      <nav className="flex items-center justify-between p-4 text-xl font-semibold border-b">
        <div> Vagabond Gallery</div>
        <div className="flex">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton 
              endpoint="imageUploader" //name of the endpoint in core.ts
              onClientUploadComplete={() => {
                router.refresh();
              }} //auto reload on image upload
            />
            <UserButton/>
          </SignedIn>
        </div>
      </nav>
    )
  }