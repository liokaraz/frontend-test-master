import  {NextResponse, type NextRequest} from "next/server";

export function middleware(request: NextRequest) {
  if(request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/news", request.url));
  }
}