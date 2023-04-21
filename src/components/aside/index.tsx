'use client'

import { avatar, name, navItems } from '@/lib/info'
import { LigthIcon, NigthIcon } from '@/components/icons'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useSystemColorMode } from '@/hooks/useSystemColorMode'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

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

export default function Aside() {
  const pathname = usePathname() || '/'
  const [darkMode, setDarkMode] = useState(false)
  const systemColorMode = useSystemColorMode()

  useEffect(() => {
    const storedValue = localStorage.getItem('darkMode')
    if (storedValue !== null) {
      setDarkMode(storedValue === 'true')
    } else {
      setDarkMode(
        typeof systemColorMode === 'boolean' ? systemColorMode : false,
      )
    }
  }, [systemColorMode])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="flex flex-col md:flex-row items-start mb-4 px-6 md:px-0">
          <Avatar />
        </div>
        <nav
          className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <ul className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {navItems.map(({ name, path }) => {
              const isActive = path === pathname
              return (
                <li className="flex items-center" key={path}>
                  <Link
                    href={path}
                    className={clsx(
                      'transition-all hover:text-slate-800 dark:hover:text-slate-200 flex align-middle mb-1',
                      {
                        'text-slate-500': !isActive,
                        'font-semibold': isActive,
                      },
                      inter.className,
                    )}
                  >
                    <span className="text-base relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-md z-[-1]" />
                      ) : null}
                    </span>
                  </Link>
                </li>
              )
            })}
            <li className="flex items-center pb-1 md:pb-0">
              <button className="h-10 w-10" onClick={handleDarkModeToggle}>
                <span className="flex items-center justify-center text-slate-400 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200">
                  {darkMode ? <LigthIcon /> : <NigthIcon />}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
