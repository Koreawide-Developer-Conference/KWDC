import { geolocation } from '@vercel/functions';
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const geo = geolocation(request);
  return NextResponse.json(geo);
}