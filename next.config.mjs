/** @type {import('next').NextConfig} */
import localesPlugin from '@react-aria/optimize-locales-plugin';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
import {glob} from 'glob';
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(localesPlugin.webpack({ locales: [] }));
    }
    return config;
  },
  compiler: {
    styledComponents: true,
  },
  transpilePackages: [
    '@adobe/react-spectrum',
    '@react-spectrum/*',
    '@spectrum-icons/*'
  ].flatMap((spec) => glob.sync(`${spec}`, { cwd: 'node_modules/' }))
};

export default withNextIntl(nextConfig);
