import type { Ad } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from "@/lib/utils";

interface AdComponentProps {
  ad: Ad;
  className?: string;
}

const AdComponent: React.FC<AdComponentProps> = ({ ad, className }) => {
  const adSize = ad.size || { width: 200, height: 200 }; // Default size

  return (
    <Card className={cn("w-full h-full flex flex-col items-center justify-center text-center overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg border border-border/50", className)}>
      <CardContent className="p-2 sm:p-3 flex flex-col items-center justify-center w-full h-full">
        <div className="relative w-full h-3/4 mb-1 sm:mb-2">
           <Image
            src={ad.imageUrl}
            alt={ad.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain rounded-md"
            data-ai-hint={ad.aiHint}
          />
        </div>
        <p className="text-xs sm:text-sm font-medium text-foreground/80 truncate w-full px-1">{ad.title}</p>
      </CardContent>
    </Card>
  );
};

export default AdComponent;
