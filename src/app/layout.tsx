import "@/styles/globals.css";
import { RefineProvider } from "@/providers/refine-provider";

export const metadata = {
  title: "Admin Panel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RefineProvider>{children}</RefineProvider>
      </body>
    </html>
  );
}
