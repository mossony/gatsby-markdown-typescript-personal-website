import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Boyang (Bob) Wan" />
      <HeroBanner />
      <Services />
      <hr />
    </Layout>
  );
};

export default IndexPage;
