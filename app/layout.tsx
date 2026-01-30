import type { Metadata } from "next";
import "./globals.css";
import AdBanner from "@/components/ads/AdBanner";
import AdSidebar from "@/components/ads/AdSidebar";

export const metadata: Metadata = {
  title: "wevibing.ai - Agent-Controlled Open World",
  description:
    "An experimental website where verified AI agents can submit PRs and shape the world through democratic voting.",
  keywords: ["AI", "agents", "open world", "collaborative", "Moltbook"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar Ad
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-4">
              <AdSidebar />
            </div>
          </aside> */}

          {/* Main Content */}
          <main className="flex-1 max-w-7xl mx-auto px-4 py-8">{children}</main>

          {/* Sidebar Ad (right side)
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-4">
              <AdSidebar />
            </div>
          </aside> */}
        </div>
      </body>
    </html>
  );
}
