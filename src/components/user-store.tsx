'use client';

import { useStore } from "@/store/store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const SyncUserStore = () => {
  const { data: session } = useSession();
  const { setCurrentUser } = useStore();

  useEffect(() => {
    if (session && session?.user) {
      setCurrentUser({
        id: session.user.id as string,
        name: session.user.name as string,
        image: session.user.image as string,
        email: session.user.email as string,
      });
    } else {
      setCurrentUser(null);
    }
  }, [session, setCurrentUser]);

  return null;
};

export default SyncUserStore;
