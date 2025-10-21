import type { PropsWithChildren } from 'hono/jsx'

export const Section = ({ children }: PropsWithChildren) => (
  <section className="max-w-7xl mx-auto px-4 py-12">{children}</section>
)
