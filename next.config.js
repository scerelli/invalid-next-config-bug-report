/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')
const { i18n } = require('./next-i18next.config')

module.exports = withPlugins(
  [
    [withBundleAnalyzer, {
      enabled: process.env.ANALYZE === 'true'
    }],
    [withImages],
  ],
  {
    i18n,
    reactStrictMode: true,
    images: {
      domains: [
        'cdn.sanity.io',
      ],
    },
    trailingSlash: true,
    experimental: {
      esmExternals: false
    },
  }
)
