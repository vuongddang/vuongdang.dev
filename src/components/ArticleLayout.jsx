import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import BlogSeo from './BlogSeo';
import { ArticleJsonLd, NextSeo } from 'next-seo'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) {
  let router = useRouter()

  const authorName = 'Vuong Dang'
  const baseUrl = 'https://vuongdang.dev'
  const url = `${baseUrl}${router.pathname}`

  if (isRssFeed) {
    return children
  }

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
        
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
