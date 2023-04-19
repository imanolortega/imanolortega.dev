import { siteUrl } from '@/lib/info'

export default async function sitemap() {
  const routes = ['', '/about'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
