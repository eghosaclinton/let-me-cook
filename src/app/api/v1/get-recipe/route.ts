import { type NextRequest, NextResponse } from 'next/server'

export function POST(req: NextRequest) {
    return NextResponse.json({
        GET: req.body ? 'yeah' : 'nah',
    })
}
