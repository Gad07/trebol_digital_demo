import { notFound } from 'next/navigation';
import DynamicLandingRenderer from '../../../components/DynamicLandingRenderer';
import { getLandingsFromDB } from '@/lib/db';

export const revalidate = 300;

export default async function CustomLandingPage({ params }) {
  const { slug } = await params;

  let landing = null;
  try {
    const landings = await getLandingsFromDB();
    landing = (landings || []).find((l) => l && l.slug === slug) || null;
  } catch (err) {
    console.warn('[Landing Page Error]:', err.message);
  }

  if (!landing) notFound();

  return <DynamicLandingRenderer landing={landing} />;
}
