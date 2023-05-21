import me from '@/app/avatar.jpg'
import { EmailIcon, GitHubIcon, LinkedinIcon } from '@/components/icons'

export const githubUrl = 'https://github.com/imanolortega'
export const siteUrl = process.env.URL
export const linkedinUrl = 'https://www.linkedin.com/in/imanol-ortega-dev/'
export const email = 'imanolortega.dev@gmail.com'
export const name = 'Imanol Ortega'
export const avatar = me
export const title = 'Imanol Ortega | Front-end Developer'
export const description =
  'I am a Front-end Developer and designer based in Puerto Madryn, Argentina. I mainly work with NextJS, TypeScript and SCSS. My focus today is on the user experience: fast, intuitive and accessible websites.'

export const about = () => {
  return (
    <>
      Hi, I&rsquo;m Imanol,{' '}
      <b>
        <a
          href="https://easytechgreen.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Front-end Developer at Easytechgreen
        </a>
      </b>
      . Before that, I was a graphic designer, digital marketing manager and a
      Communication Social Bachelor&rsquo;s degree student.
    </>
  )
}

export const bio = () => {
  return (
    <>
      I started programming with Python in 2018 as a hobby, and since the end of
      2019, I have been studying web programming.
      <br />
      Since 2021, I have been working as a developer. My focus today is on the
      user experience: fast, intuitive, and accessible websites.
    </>
  )
}

export const technologies = () => {
  return (
    <>
      Working with NextJS on the Frontend and usually with some CMS (headless or
      not) on the Backend. I use JavaScript or TypeScript depending on the
      project. I have also worked with VueJS and React Native. My focus today is
      on the user experience: fast, intuitive, and accessible websites.
    </>
  )
}

export const introAbout = () => {
  return (
    <>
      I&rsquo;m a Front-end Developer obsessed with the web. Currently, I live
      in Puerto Madryn, Argentina.
    </>
  )
}

export const interest = () => {
  return (
    <>
      I have a wide range of interests, including design, marketing, music,
      history, politics, and much more. Passionate about coding and the web,
      I&rsquo;m always eager to learn the latest trends in the industry.
    </>
  )
}

export const projects = () => {
  return (
    <>
      In the beginning, I worked on projects with React (and some with Vue).
      Clones, challenges, API consumption, Firebase authentication, Firebase or
      Google Sheets database, and so on. The latest projects I worked on were
      &quot;personal tools&quot;, challenges and testing new technologies.
    </>
  )
}

export const projectsList = [
  {
    title: 'Más Canales',
    link: 'https://mascanales.net/',
  },
  {
    title: 'MacOS Dock',
    link: 'https://mac-dock.vercel.app/',
  },
  {
    title: 'Last Challenge',
    link: 'https://challenge-imanolortega.vercel.app/',
  },
  {
    title: 'Facebook Clone',
    link: 'https://clone-sepia.vercel.app/',
  },
  {
    title: 'Covid Tracker',
    link: 'https://covid-tracker-vue.vercel.app/',
  },
  {
    title: 'More Projects',
    link: githubUrl,
  },
]

export const aboutLinks = [
  {
    title: 'Email',
    link: `mailto:${email}`,
    icon: <EmailIcon />,
  },
  {
    title: 'GitHub',
    link: githubUrl,
    icon: <GitHubIcon />,
  },
  {
    title: 'LinkedIn',
    link: linkedinUrl,
    icon: <LinkedinIcon />,
  },
]

export const homeLinks = [
  {
    text: 'more about me',
    link: '/about',
    type: 'internal',
  },
  {
    text: 'check my projects',
    link: '/projects',
    type: 'internal',
  },
  {
    text: 'send me an email',
    link: `mailto:${email}`,
    type: 'external',
  },
]

export const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
]
