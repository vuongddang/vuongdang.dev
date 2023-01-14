import { ArticleJsonLd, NextSeo } from 'next-seo'
import { ReactElement } from 'react'
interface Props {
  meta
}

const baseUrl = 'https://vuongdang.dev'
const authorName = 'Vuong Dang'
export default function BlogSeo({ meta }: Props): ReactElement {
  const url = `${baseUrl}/articles/${meta.slug}`

  return (
    <>
      <NextSeo
        title={`${meta.title} - ${authorName}`}
        description={meta.description}
        canonical={meta.canonicalUrl ?? url}
        openGraph={{
          url,
          title: meta.title,
          description: meta.description,
          article: { publishedTime: meta.date },
        }}
      ></NextSeo>
      {/* Adding Article structured data to your news, blog, and sports article page can enhance your appearance in Google Search results.
        https://developers.google.com/search/docs/data-types/article */}
      <ArticleJsonLd
        useAppDir={true}
        url={url}
        title={meta.title}
        images={[]}
        datePublished={meta.date}
        authorName={authorName}
        publisherName={authorName}
        description={meta.description}
        publisherLogo={`${baseUrl}/images/avatar.jpg`}
      ></ArticleJsonLd>
    </>
  )
}
