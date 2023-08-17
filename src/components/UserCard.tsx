import { DefaultSession } from "next-auth";
import Image from "next/image";

export function UserCard({ user }: { user: DefaultSession["user"] }) {
  return (
    <Image src={`${user?.image}`} alt={`${user?.name}`} className="card-image" width="48" height="48" />
  )
}