import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ActionLink } from "@/components/ui-kit";
import { restaurant } from "@/data/restaurant";
import { restaurantSchema, websiteSchema, absoluteUrl } from "@/lib/schema";
import { ReservationPrompt } from "@/components/ReservationPrompt";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function NotFoundComponent() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5 py-20">
      <div className="max-w-md text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-3 font-display text-5xl text-primary">404</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          This page has wandered off, like a guest lost in a haveli corridor. Let us bring you back to the
          table.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <ActionLink to="/">Return Home</ActionLink>
          <ActionLink to="/menu" variant="outline">
            Explore the Menu
          </ActionLink>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    // Error reporting removed (previously forwarded to Lovable)
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5 py-20">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-primary">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. Please try again, or call us on {restaurant.phone}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <Link
            to="/"
            className="hairline-gold inline-flex min-h-11 items-center rounded-md px-6 text-sm font-semibold text-primary"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${restaurant.name} | Authentic Village Inspired Vegetarian Restaurant in ${restaurant.city}` },
      {
        name: "description",
        content: `Experience authentic village inspired vegetarian cuisine at ${restaurant.name} in ${restaurant.city}. Traditional thalis, family dining and warm hospitality.`,
      },
      { property: "og:site_name", content: restaurant.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#6E1F2A" },
      { property: "og:image", content: absoluteUrl("/favicon.jpeg") },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.jpeg", type: "image/jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Yatra+One&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(restaurantSchema) },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <ReservationPrompt />
      <WhatsAppButton />
      <Footer />
    </QueryClientProvider>
  );
}
