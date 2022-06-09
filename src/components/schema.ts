import { h } from '@vue/runtime-core'

export function WebsiteSchema({ locale, t }) {
  locale
  return h('script', {
    type: 'application/ld+json',
    innerHTML: `{
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "herohero",
      "description": "${t('meta.description')}",
      "url": "https://about.herohero.co",
      "sameAs": [
        "https://twitter.com/heroherocompany",
        "https://www.instagram.com/herohero.co/",
        "http://facebook.com/herohero.co/",
        "https://www.linkedin.com/company/herohero"
      ]
    }`,
  })
}
