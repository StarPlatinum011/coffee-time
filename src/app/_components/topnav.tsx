import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function TopNav() {
    return(
      <nav className="flex items-center justify-between p-4 text-xl font-semibold border-b">
        <div> Vagabond Gallery</div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </div>
      </nav>
    )
  }