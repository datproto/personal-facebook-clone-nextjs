import Image from 'next/image'

import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewColumnsIcon
} from '@heroicons/react/24/solid'

import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import HeaderIcon from "./HeaderIcon";
import {signOut, useSession} from "next-auth/react";

function Header() {
  const { data: session } = useSession()

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <div className={"sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md"}>
      {/* Left */}
      <div className={"flex items-center"}>
        <Image
          src={'https://links.papareact.com/5me'}
          width={40}
          height={40}
          alt=""
        />
        <div className={"flex ml-2 items-center rounded-full bg-gray-100 p-2"}>
          <MagnifyingGlassIcon className={"h-6 text-gray-600"} />
          <input className={"hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"} type="text" placeholder={"Search Facebook"}/>
        </div>
      </div>
      {/* Middle */}
      <div className={"flex justify-center flex-grow"}>
        <div className={"flex space-x-6 md:space-x-2"}>
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className={"flex items-center sm:space-x-2 justify-end"}>

        <Image
          onClick={() => signOut()}
          className={"rounded-full cursor-pointer"}
          src={session.user.image}
          width={40}
          height={40}
          alt={"avatar"}
        />

        {/* Profile ava */}
        <p className={"whitespace-nowrap font-semibold pr-3"}>Dat Proto</p>
        <ViewColumnsIcon className={"icon"} />
        <ChatBubbleOvalLeftEllipsisIcon className={"icon"} />
        <BellIcon className={"icon"} />
        <ChevronDownIcon className={"icon"} />
      </div>
    </div>
  )
}

export default Header