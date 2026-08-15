import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.smithforcostamesa.com';
const SITE_NAME = 'Steve Smith for Costa Mesa City Council';
const DEFAULT_IMAGE = `${SITE_URL}/social-share.jpg`;

function Seo({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default Seo;
