import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const email = "kotlasidhartha25@gmail.com";

  return (
    <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8 fade-in-on-load">
      <Card className="max-w-xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl font-headline text-primary text-center">Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-base sm:text-lg leading-relaxed font-body text-center">
          <p>
            We'd love to hear from you! If you have any questions, suggestions, or feedback, please don't hesitate to reach out.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Mail className="h-6 w-6 text-accent" />
            <a href={`mailto:${email}`} className="text-accent hover:underline font-medium text-xl">
              {email}
            </a>
          </div>
          <p>
            We typically respond within 24-48 hours. Thank you for contacting SVKFACTS!
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
