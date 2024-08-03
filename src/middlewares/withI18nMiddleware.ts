import createMiddleware from 'next-intl/middleware';

export const i18nMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'de', 'fr'],

    // Used when no locale matches
    defaultLocale: 'en'
});