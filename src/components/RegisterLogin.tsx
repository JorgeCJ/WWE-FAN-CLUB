'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { UserCard } from "@/components/UserCard";

export default function RegisterLogin() {

  const { data: session } = useSession();
  if (!session) {
    return (
      <a onClick={() => signIn("google")} className="cursor-pointer hover:brightness-75">
        <span className="hover:border-b border-dashed">
        Create your account or Login
        </span>
      </a>
    )
  } else {
    return (
      <div className="inline-flex items-center text-2xl justify-between space-x-2 rounded-full border-solid border-2 border-slate-50 overflow-hidden">
        <UserCard user={session?.user} />
        <span> Be welcome {session.user?.name} </span>
        <a onClick={() => signOut()} className="cursor-pointer pl-2 pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout-2 hover:brightness-75" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path>
            <path d="M15 12h-12l3 -3"></path>
            <path d="M6 15l-3 -3"></path>
          </svg>
        </a>
      </div>
    )
  }
}
