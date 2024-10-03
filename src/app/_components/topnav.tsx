"use client"; //Declaring this is a client side component

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SimpleUploadButton } from "./simple-upload-btn";
export default function TopNav() {

  return (
    <nav className="flex items-center  justify-between border-b p-4 text-xl font-semibold">
      <Link href={'/'}><div> Vagabond Gallery</div></Link>
      <div className="flex gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/* <UploadButton
            endpoint="imageUploader" //name of the endpoint in core.ts
            onClientUploadComplete={() => {
              router.refresh();
            }} //auto reload on image upload
          /> */}

          <SimpleUploadButton/>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
