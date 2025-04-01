"use client";

import { useEffect } from "react";
import { getCurrentUserById } from "@/actions/user";
import { User } from "@prisma/client";
import { Session } from "next-auth";
import { useStore } from "@/store";

interface SyncUserStoreProps {
  session: Session | null;
}

const SyncUserStore = ({ session }: SyncUserStoreProps) => {
  const { setCurrentUser } = useStore();

  useEffect(() => {
    (async () => {
      if (session && session?.user && session.user.id) {
        const user: User | null = await getCurrentUserById(session.user.id);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    })();
  }, [session, setCurrentUser]);

  return null;
};

export default SyncUserStore;
