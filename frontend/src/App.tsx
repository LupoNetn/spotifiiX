import React from "react";
import { Button } from "./components/ui/button";
import { SignedOut,SignInButton,SignedIn,UserButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <>
      <div className="text-red-500">App</div>
      <Button variant={"outline"}>This is a button</Button>

       <header>
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  );
};

export default App;
