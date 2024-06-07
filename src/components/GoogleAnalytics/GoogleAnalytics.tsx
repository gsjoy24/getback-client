import config from '@/lib/config';
import Script from 'next/script';
import React from 'react';

const GoogleAnalytics = () => {
	return (
		<>
			<Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`} />

			<Script id='' strategy='lazyOnload'>
				{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.googleAnalyticsId}', {
              page_path: window.location.pathname,
              });
          `}
			</Script>
		</>
	);
};

export default GoogleAnalytics;
