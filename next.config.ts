import { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/e-commerce-app-next' : '', 
  assetPrefix: isProd ? '/e-commerce-app-next/' : '',
}

export default nextConfig;
