import CONFIG from "site.config"
import React from "react"
import {
  AiOutlineGlobal,
  AiOutlineMail,
} from "react-icons/ai"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className="block lg:hidden">
      <div className="p-1 mb-3 dark:text-white">💬 Contact</div>
      <ul className="rounded-2xl bg-white dark:bg-zinc-700 p-1 flex flex-col">
        {CONFIG.profile.github && (
          <a
          href={`https://www.morigaoncollege.edu.in/`}
          rel="noreferrer"
          target="_blank"
          className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
        >
          <AiOutlineGlobal className="text-2xl" />
          <div className="text-sm">website</div>
        </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            className="overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiOutlineMail className="text-2xl flex-shrink-0" />
            <div className="text-sm">email</div>
          </a>
        )}
      </ul>
      </div>
  )
}

export default MobileProfileCard
