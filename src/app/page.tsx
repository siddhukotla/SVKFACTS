import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/facts/1');
  // return null; // Or a loading state, but redirect is cleaner
}
