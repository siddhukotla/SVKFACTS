import type { Ad } from '@/lib/types';
import { ADS_PER_PAGE } from '@/lib/constants';

const adCategories = [
  "Shopping Deals", "Tech Gadgets", "Financial Services", "Health Products", "Online Courses", 
  "Travel Packages", "Automotive Offers", "Home Improvement", "Subscription Boxes", "Gaming Gear",
  "Fashion Trends", "Eco Friendly", "Pet Supplies", "Software Tools", "Fitness Apps"
];

// Generate 9 unique ads for a given pageId
export const getAdsForPage = (pageId: number): Ad[] => {
  const ads: Ad[] = [];
  const baseAdIndex = (pageId - 1) * ADS_PER_PAGE;

  const adSizes = [
    { width: 300, height: 250 }, // Medium Rectangle
    { width: 160, height: 600 }, // Wide Skyscraper
    { width: 728, height: 90 },  // Leaderboard
    { width: 320, height: 100 }, // Large Mobile Banner
    { width: 250, height: 250 }, // Square
    { width: 300, height: 600 }, // Half Page
    { width: 120, height: 240 }, // Vertical Banner
    { width: 468, height: 60 },  // Banner
    { width: 200, height: 200 }, // Small Square
  ];


  for (let i = 0; i < ADS_PER_PAGE; i++) {
    const uniqueAdId = baseAdIndex + i + 1;
    const category = adCategories[uniqueAdId % adCategories.length];
    const size = adSizes[i % adSizes.length];
    const adText = `Ad #${uniqueAdId}: ${category}`;
    
    ads.push({
      id: `page${pageId}-slot${i + 1}`,
      pageId,
      slotIndex: i + 1,
      title: adText,
      imageUrl: `https://placehold.co/${size.width}x${size.height}.png?text=Ad+${uniqueAdId}`,
      linkUrl: '#', // Placeholder link
      size: size,
      aiHint: `${category.split(' ')[0].toLowerCase()} advertisement` // e.g. "shopping advertisement"
    });
  }
  return ads;
};
