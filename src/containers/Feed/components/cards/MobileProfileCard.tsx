import CONFIG from "site.config"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className="block lg:hidden">
      <div className="p-1 mb-3 dark:text-white">👤 Portfolio</div>
      <div className="p-2 rounded-2xl bg-white dark:bg-zinc-700 mb-4">
        <a
          href={`${CONFIG.projects[0].href}`}
          rel="noreferrer"
          target="_blank"
          className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
        >
          <AiOutlineUser className="text-2xl" />
          <div className="text-sm">{CONFIG.projects[0].name}</div>
        </a>
        </div>
      </div>
  )
}

export default MobileProfileCard
