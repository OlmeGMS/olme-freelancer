import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/content';
export function generateStaticParams() { return locales.map(locale => ({locale})); }
export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const en = locale === 'en';
  return {
    title: 'Olme Marin | Software Engineer · Full Stack & iOS',
    description: en ? 'Software engineer with 10+ years of experience in web, backend and iOS development. Freelance projects and international opportunities.' : 'Ingeniero de software con más de 10 años de experiencia en desarrollo web, backend e iOS. Proyectos freelance y oportunidades internacionales.',
    alternates: {languages: {'es': '/es/', 'en': '/en/'}},
    openGraph: {title: 'Olme Marin | Software Engineer', type: 'website'}
  };
}
export default async function LocaleLayout({children, params}: {children: ReactNode; params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!locales.includes(locale as Locale)) return null;
  return children;
}
