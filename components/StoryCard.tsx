import Image from 'next/image'

interface StoryCardProps {
  name: string
  src: string
  profile: string
}

function StoryCard({ name, src, profile }: StoryCardProps) {
  return (
    <div className={"relative h-14 w-14"}>
      <Image
        className={"absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"}
        src={profile}
        width={40}
        height={40}
        alt={""}
      />
      <Image
        className={"object-cover filter brightness-75 rounded-full lg:rounded-3xl"}
        width={40}
        height={40}
        src={src}
        alt={""}
      />
    </div>
  )
}

export default StoryCard