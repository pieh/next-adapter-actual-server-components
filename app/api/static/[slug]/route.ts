import { NextRequest, NextResponse } from 'next/server'

export function generateStaticParams() {
  return [{ slug: 'first' }, { slug: 'second' }]
}

export const GET = (_req: NextRequest, { params }) => {
  return NextResponse.json({ params })
}
