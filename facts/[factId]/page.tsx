import { getFactById } from '@/data/facts';
import { getAdsForPage } from '@/lib/ads';
import type { Fact, Ad } from '@/lib/types';
import { TOTAL_FACTS } from '@/lib/constants';
import AdComponent from '@/components/ads/AdComponent';
import { Button, buttonVariants } from "@/components/ui/button";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface FactPageProps {
  params: {
    factId: string;
  };
}

export default async function FactPage({ params }: FactPageProps) {
  const awaitedParams = await params;
  const factId = parseInt(awaitedParams.factId, 10);

  if (isNaN(factId) || factId < 1 || factId > TOTAL_FACTS) {
    notFound();
  }

  const fact: Fact | undefined = getFactById(factId);
  const ads: Ad[] = getAdsForPage(factId);

  if (!fact) {
    notFound();
  }

  const nextFactId = factId + 1;
  const hasNextFact = nextFactId <= TOTAL_FACTS;

  const adSpots = [
    { ad: ads[0], className: "col-span-2 md:col-span-1 row-span-1" },
    { ad: ads[1], className: "col-span-2 md:col-span-1 row-span-1" },
    { ad: ads[2], className: "col-span-4 md:col-span-2 row-span-1" },
    { ad: ads[3], className: "col-span-2 md:col-span-1 row-span-2 md:row-span-1" }, 
    { ad: ads[4], className: "col-span-2 md:col-span-1 row-span-2 md:row-span-1 md:col-start-4" },
    { ad: ads[5], className: "col-span-2 md:col-span-1 row-span-2 md:row-span-1 md:row-start-3" },
    { ad: ads[6], className: "col-span-2 md:col-span-1 row-span-2 md:row-span-1 md:col-start-4 md:row-start-3" },
    { ad: ads[7], className: "col-span-2 md:col-span-2 row-span-1 md:col-start-1 md:row-start-4" },
    { ad: ads[8], className: "col-span-2 md:col-span-2 row-span-1 md:col-start-3 md:row-start-4" },
  ];

  return (
    <main className="flex-grow p-3 sm:p-4 md:p-6 fade-in-on-load">
      <div className="grid grid-cols-4 grid-rows-4 gap-3 sm:gap-4 md:gap-5 w-full h-[calc(100vh-120px)] sm:h-[calc(100vh-140px)]">
        {/* Fact Area */}
        <Card className="col-span-4 row-span-2 md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-2 flex flex-col items-center justify-center text-center shadow-2xl z-10 bg-card/95 backdrop-blur-md p-4 sm:p-6 md:p-8 border border-primary/20 rounded-xl">
          <CardContent className="flex flex-col items-center justify-center w-full">
            <h2 className="font-headline text-xl sm:text-2xl md:text-3xl text-primary mb-3 sm:mb-4">
              Fact #{factId}
            </h2>
            <p className="font-body text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 md:mb-12 leading-tight text-foreground/90">
              {fact.text}
            </p>
            {hasNextFact ? (
              <Link href={`/facts/${nextFactId}`} passHref legacyBehavior>
                <a
                  className={`${buttonVariants({ size: "lg" })} bg-accent text-accent-foreground hover:bg-accent/90 font-headline text-md sm:text-lg py-3 px-6 sm:py-3 sm:px-8 transition-transform hover:scale-105 shadow-lg rounded-lg`}
                >
                  NEXT FACT <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Link>
            ) : (
              <Button size="lg" disabled className="font-headline text-md sm:text-lg py-3 px-6 sm:py-3 sm:px-8 shadow-md rounded-lg">
                END OF FACTS
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Ads surrounding the fact area */}
        {adSpots.map((spot) => (
          <div key={spot.ad.id} className={spot.className}>
            <AdComponent ad={spot.ad} className="w-full h-full rounded-lg" />
          </div>
        ))}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const paths = Array.from({ length: TOTAL_FACTS }, (_, i) => ({
    factId: (i + 1).toString(),
  }));
  return paths;
}
