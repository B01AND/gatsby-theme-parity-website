import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';
import NewsletterModal from '../components/NewsletterModal';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import EventCard from '../components/EventCard';
import eventsData from '../../content/events/events.json';

export default function EventsPage() {
  const intl = useIntl();
  const { events } = eventsData;

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'events-page-seo' })} />
      <section className="bg-hero-pattern-dark bg-parityGray bg-cover bg-center bg-no-repeat -mt-32 w-screen">
        <div className="h-full md:pt-32">
          <div className="container h-full text-center pt-48 md:pt-24 pb-12 px-2 md:flex md:flex-col md:justify-center md:max-w-screen-md">
            <h3 className="text-textDark text-center font-normal md:text-5xl md:mb-8">
              {intl.formatMessage({ id: 'events-page-title' })}
            </h3>
          </div>
        </div>
      </section>
      <section className="bg-parityGray pb-20">
        <div className="container">
          <div className="flex flex-wrap justify-center md:justify-start">
            {events.map((event: any, index) => {
              return (
                <div key={index}>
                  <EventCard
                    dateTime={event.dateTime}
                    location={event.location}
                    title={event.title}
                    description={event.description}
                    cta={event.cta}
                    link={event.link}
                    image={event.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-parityGray">
        <div className="container">
          <div className="flex flex-col justify-center text-center py-16 md:py-24">
            <h3 className="font-normal mb-4 md:text-4xl">{intl.formatMessage({ id: 'contact-page-footer-title' })}</h3>
            <div className="mb-4">
              <NewsletterModal />
            </div>
            <p className="text-sm text-textLight">
              {intl.formatMessage({ id: 'contact-page-footer-subcta-one' })}{' '}
              <LocalizedLink className="text-parityPink" to="/blog">
                {intl.formatMessage({ id: 'contact-page-footer-subcta-two' })}
              </LocalizedLink>
            </p>
          </div>
        </div>
      </section>
      <Social />
    </Layout>
  );
}
