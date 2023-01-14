import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { NextSeo } from 'next-seo'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        {/* <title>Uses - Vuong Dang</title>
        <meta
          name="description"
          content="A Glimpse into My Workspace."
        /> */}
      </Head>
              <NextSeo title="Uses - Vuong Dang" description="TEST"/>
      <SimpleLayout
        title="A Glimpse into My Workspace."
        intro="Discover the Tools I Use to Simplify My Workflow and Enhance Efficiency in My Humble Workspace."
      >
        <div className="space-y-20">
          <ToolsSection title="Productivity">
            <Tool title="Alfred" href="https://www.alfredapp.com">
              Alfred is a productivity application for macOS, which boosts your efficiency with hotkeys, keywords and text expansion.
            </Tool>
         
            <Tool title="Rectangle" href="https://rectangleapp.com">
              Move and resize windows in macOS using keyboard shortcuts or snap areas
            </Tool>
            <Tool title="MonitorControl" href="https://github.com/MonitorControl/MonitorControl">
              Controls your external display brightness using sliders or the keyboard.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
