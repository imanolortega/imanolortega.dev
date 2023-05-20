'use client'

import { avatar, name, navItems } from '@/utils/info'
import { DarkModeProps } from '@/utils/interfaces'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import ToggleTheme from '../toggle-theme'

function Avatar() {
  return (
    <Link aria-label="Imanol Ortega" href="/">
      <Image
        alt={name}
        className="rounded-full grayscale"
        src={avatar}
        placeholder="blur"
        width={70}
        priority
      />
    </Link>
  )
}

export default function Aside({
  darkMode,
  handleDarkModeToggle,
}: DarkModeProps) {
  const pathname = usePathname() || '/'

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0">
      <div className="lg:sticky lg:top-20">
        <div className="flex flex-col md:flex-row items-start mb-4 px-6 md:px-0">
          <Avatar />
        </div>
        <nav
          className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <ul className="space-x-1 md:space-x-0 flex flex-row md:flex-col pr-10 mb-2 mt-2 md:mt-0">
            {navItems.map(({ name, path }) => {
              const isActive = path === pathname
              return (
                <li className="flex items-center" key={path}>
                  <Link
                    href={path}
                    className={clsx(
                      'transition-all hover:text-slate-800 dark:hover:text-slate-200 flex align-middle',
                      {
                        'text-slate-500': !isActive,
                        'font-semibold': isActive,
                      },
                    )}
                  >
                    <span className="text-base relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <div
                          className="absolute inset-0
                          ring-slate-300 hover:ring-1 dark:ring-slate-600
                          text-slate-400 hover:text-slate-600
                          rounded-md z-[-1]"
                        />
                      ) : null}
                    </span>
                  </Link>
                </li>
              )
            })}
            <li className="flex md:hidden items-center">
              <ToggleTheme
                darkMode={darkMode}
                handleDarkModeToggle={handleDarkModeToggle}
              />
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
