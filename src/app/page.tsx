'use client'
import { IconHeart, IconHeartFilled } from "@tabler/icons-react"
import { Suspense, useEffect, useState } from "react"
import Header from "@/components/Header"
import Image from "next/image"
import { useSession } from "next-auth/react"
import Loading from "@/components/Loading"

interface IMyImagesMan {
  id: number
  src: string
  alt: string
  liked: boolean
  likes: number
}

const myImagesMan = [
  {
    id: 0,
    src: '/images/ReyMysterio.png',
    alt: 'Rey Mysterio',
    liked: false,
    likes: 0
  },
  {
    id: 1,
    src: '/images/JohnCena.jpg',
    alt: 'John Cena',
    liked: false,
    likes: 0
  },
  {
    id: 2,
    src: '/images/TheRock.jpg',
    alt: 'The Rock',
    liked: false,
    likes: 0
  }
] as IMyImagesMan[]

interface IMyImagesWoman {
  id: number
  src: string
  alt: string
  liked: boolean
  likes: number
}

const myImagesWoman = [
  {
    id: 0,
    src: '/images/Asuka.jpg',
    alt: 'Asuka',
    liked: false,
    likes: 0
  },
  {
    id: 1,
    src: '/images/RheaRipley.jpg',
    alt: 'Rhea Ripley',
    liked: false,
    likes: 0
  },
  {
    id: 2,
    src: '/images/SashaBanks.jpg',
    alt: 'Sasha Banks',
    liked: false,
    likes: 0
  }
] as IMyImagesWoman[]

export default function Home() {
  const { data: session } = useSession();
  const [imagesDataMan, setImagesDataMan] = useState<IMyImagesMan[]>(myImagesMan)
  const [imagesDataWoman, setImagesDataWoman] = useState<IMyImagesWoman[]>(myImagesWoman)

  const handleLikedImageMan = (item: IMyImagesMan) => {
    if (session) {
      setImagesDataMan(oldValues => {
        return oldValues.map(oldItem => {
          if (oldItem.id === item.id) {
            myImagesMan.forEach(element => {
              if (element.id != item.id && element.likes > 0) {
                element.likes--
                element.liked = false
              }
            });
            oldItem.liked = !item.liked
            return oldItem
          }
          return oldItem
        })
      })
    }
  }

  const handleLikedImageWoman = (item: IMyImagesWoman) => {
    if (session) {
      setImagesDataWoman(oldValues => {
        return oldValues.map(oldItem => {
          if (oldItem.id === item.id) {
            myImagesWoman.forEach(element => {
              if (element.id != item.id && element.likes > 0) {
                element.likes--
                element.liked = false
              }
            });
            oldItem.liked = !item.liked
            return oldItem
          }
          return oldItem
        })
      })
    }
  }
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      {isLoading ? (
        <Loading />
      ) : (

        <div className="flex flex-wrap w-screen h-screen bg-custom-bg bg-cover bg-center border-solid border-2 border-slate-50">
          <Header />
          <h1 className="flex flex-wrap text-slate-100 text-5xl items-center justify-center w-screen">Who is the best male fighter?</h1>
          <div className="inline-flex flex-wrap w-screen justify-around items-center">
            {imagesDataMan.map((item) => (
              <div key={item.id} className="inlineflex items-center border-solid border-2 border-black bg-slate-50 rounded-xl overflow-hidden">
                <Image src={item.src} alt={item.alt} width="250" height="300" />
                {item.liked && session ? (
                  <IconHeartFilled className="cursor-pointer" 
                    onClick={(event) => { handleLikedImageMan(item); if (event.target && session) { item.likes-- } }}
                  />
                ) : (
                  <IconHeart className="cursor-pointer" 
                    onClick={(event) => { handleLikedImageMan(item); if (event.target && session) { item.likes++ } }}
                  />
                )}
                <span>{item.likes}</span>
              </div>
            ))}
          </div>
          <h1 className="flex flex-wrap text-slate-100 text-5xl items-center justify-center w-screen">Who is the best female fighter?</h1>
          <div className="inline-flex flex-wrap w-screen justify-around items-center">
            {imagesDataWoman.map((item) => (
              <div key={item.id} className="inlineflex items-center border-solid border-2 border-black bg-slate-50 rounded-xl overflow-hidden">
                <Image src={item.src} alt={item.alt} width="250" height="300" />
                {item.liked && session ? (
                  <IconHeartFilled className="cursor-pointer" 
                    onClick={(event) => { handleLikedImageWoman(item); if (event.target && session) { item.likes-- } }}
                  />
                ) : (
                  <IconHeart className="cursor-pointer" 
                    onClick={(event) => { handleLikedImageWoman(item); if (event.target && session) { item.likes++ } }}
                  />
                )}
                <span>{item.likes}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Suspense>
  )
}
