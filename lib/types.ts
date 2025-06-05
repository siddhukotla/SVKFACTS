export interface Fact {
  id: number;
  text: string;
  category: string;
}

export interface Ad {
  id: string; // Unique identifier for the ad, e.g., "page1-slot1"
  pageId: number;
  slotIndex: number;
  title: string;
  imageUrl: string;
  linkUrl: string; // Placeholder
  size?: { width: number; height: number };
  aiHint: string;
}
