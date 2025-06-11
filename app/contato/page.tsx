import Head from 'next/head';
import { ContactHero } from '@/app/ui/components/contact/ContactHero';
import { ContactInfoSection } from '@/app/ui/components/contact/ContactInfoSection';
import { BusinessHours } from '@/app/ui/components/contact/BusinessHours';

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - Casa do Microondas</title>
        <meta name="description" content="Entre em contato conosco para conserto rápido de microondas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <ContactHero />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-2'>
              <ContactInfoSection />
              <BusinessHours />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}