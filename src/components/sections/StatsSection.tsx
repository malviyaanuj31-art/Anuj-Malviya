import { codingStats } from '../../constants/content'
import { Card } from '../ui/card'
import { SectionHeading } from '../SectionHeading'

export function StatsSection() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Coding profiles" title="Quantified momentum" description="A quick view of my activity across the platforms I use to learn, ship, and grow." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {codingStats.map((stat) => (
            <Card key={stat.label} className="p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{stat.detail}</p>
              <p className="mt-4 text-3xl font-semibold text-slate-50">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
