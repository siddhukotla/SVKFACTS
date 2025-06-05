import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NotFound() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 text-center fade-in-on-load">
      <Card className="max-w-md w-full shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-3xl sm:text-4xl font-headline text-destructive">
            <AlertTriangle className="mr-3 h-10 w-10" />
            Page Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg sm:text-xl font-body text-muted-foreground">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          <p className="font-body">
            It seems you've stumbled upon a fact that's yet to be discovered, or perhaps a page that has ventured off into the unknown.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-headline text-base sm:text-lg">
            <Link href="/facts/1">Go to First Fact</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
