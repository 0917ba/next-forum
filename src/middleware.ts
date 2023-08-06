import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.URL as string;

export async function middleware(request: NextRequest) {
  //signin page redirect
  if (
    request.nextUrl.pathname.startsWith("/signin") &&
    !request.nextUrl.searchParams?.get("prev")
  ) {
    const prev = request.headers.get("referer")?.replace(baseUrl, "") || "/";
    return NextResponse.redirect(baseUrl + `/signin?prev=${prev}`);
  }

  // signup page redirect
  else if (
    request.nextUrl.pathname.startsWith("/signup") &&
    !request.nextUrl.searchParams?.get("prev")
  ) {
    const prev = request.headers.get("referer")?.replace(baseUrl, "") || "/";
    return NextResponse.redirect(baseUrl + `/signup?prev=${prev}`);
  }

  // write/edit page protection
  // accessToken not applied
  else if (
    request.nextUrl.pathname.startsWith("/edit") ||
    request.nextUrl.pathname.startsWith("/write")
  ) {
    const session: any = await getToken({ req: request });
    if (!session?.user?._id) {
      return NextResponse.redirect(baseUrl + "/signin?prev=%2F");
    }
  }
}
