import Hero from "./components/Hero";

export const metadata = {
  title: "Lockwood Apartments | 701-725 Lockwood Ln S, Salem, OR 97302",
  description: "Lockwood Apartments | 701-725 Lockwood Ln S, Salem, OR 97302",
  keywords:
    "salem oregon apartments, downtown salem apartments, downtown salem living, 1 bedroom apartments salem oregon, 1 bedroom 1 bath apartments downtown salem, south salem apartments, 1 bed 1 bath south salem",
  openGraph: {
    title: "Lockwood Apartments | 701-725 Lockwood Ln S, Salem, OR 97302",
    description: "Lockwood Apartments | 701-725 Lockwood Ln S, Salem, OR 97302",
    siteName: "Lockwood Apartments",
    type: "website",
    locale: "en_US",
    url: "https://lockwoodsalem.com",
    images: [
      {
        url: "https://lockwoodsalem.com/images/og-image.png",
        alt: "Lockwood Apartments",
      },
    ],
  },
  images: [
    {
      url: "https://lockwoodsalem.com/images/og-image.png",
      alt: "Lockwood Apartments",
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  );
}
