import Portfolio from '@/components/Portfolio';
import {locales, type Locale} from '@/lib/content';
import {notFound} from 'next/navigation';
export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <Portfolio locale={locale as Locale}/>;
}
