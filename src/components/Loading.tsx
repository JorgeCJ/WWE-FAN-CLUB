import Image from "next/image"

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-800 to-gray-950">
      <Image src="/images/Loading.gif" alt="loading" width="40" height="40" />
    </div>
  )
}

