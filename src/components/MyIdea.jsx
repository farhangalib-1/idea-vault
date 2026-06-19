"use client";

import { authClient } from "@/lib/auth-client";
import IdeaCard from "./IdeaCard";
import { Button } from "@heroui/react";

const MyIdea = ({ data }) => {
  const { data: session } = authClient.useSession();

  const user = session?.user || null;
  const id = user?.id;

  const myIdeas = data.filter(
    (idea) => idea.userId === id
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-11/12 mx-auto">
      {myIdeas.map((idea) => (
        <IdeaCard
          key={idea._id}
          idea={idea}
        />
      ))}
      
    </div>
  );
};

export default MyIdea;