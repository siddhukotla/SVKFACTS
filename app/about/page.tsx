import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8 fade-in-on-load">
      <Card className="max-w-3xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl font-headline text-primary text-center">About SVKFACTS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-base sm:text-lg leading-relaxed font-body">
          <p>
            Welcome to SVKFACTS, your daily source for intriguing and concise information across a multitude of fascinating subjects! Our mission is to enlighten and entertain by presenting one unique, thought-provoking fact each day.
          </p>
          <p>
            At SVKFACTS, we believe in the power of knowledge, no matter how small the dose. Each fact is carefully curated to be a single, easily digestible sentence, perfect for a quick learning break in your busy day. We cover a wide array of categories, including:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Finance & Investing</li>
            <li>Health & Wellness</li>
            <li>Education & Career</li>
            <li>Technology & Gadgets</li>
            <li>Automobile & Insurance</li>
            <li>Cryptocurrency & Web3</li>
            <li>Real Estate & Property</li>
            <li>Legal & Law-Related Facts</li>
            <li>Business & Startups</li>
            <li>Travel & Visa Info</li>
          </ul>
          <p>
            Our website is designed for a seamless and focused experience. Navigate through 500 unique facts with a simple click of the "NEXT_FACT" button. We've also ensured our platform adheres to content guidelines, aiming for a user-friendly and AdSense-compliant environment.
          </p>
          <p>
            Thank you for visiting SVKFACTS. We hope you enjoy your journey of discovery, one fact at a time!
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
