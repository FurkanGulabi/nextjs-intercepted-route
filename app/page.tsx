import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Link href={"/photos"}>
        <Button>Go to photos</Button>
      </Link>
    </div>
  );
};

export default HomePage;
