import me from '@/app/avatar.jpg'

export const siteUrl = process.env.URL
export const name = 'Imanol Ortega'
export const avatar = me
export const about = () => {
  return (
    <>
      Hi, I&rsquo;m Imanol,{' '}
      <b>
        Front-end Developer at{' '}
        <a href="https://easytechgreen.com/" rel="noopener noreferrer" target="_blank">
          Easytechgreen
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
      I work with NextJS on the Frontend and usually with some CMS (headless or
      not) on the Backend. I use JavaScript or TypeScript depending on the
      project. I also worked with Vue JS and React Native. My focus today is on
      the user experience: fast, intuitive, and accessible websites.
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
