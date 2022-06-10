import { getAppHost, getAppUrl } from '../url/url-utilities.js';

describe(`url-utilities`, () => {
  describe(`${getAppHost.name}`, () => {
    it('should build valid host from partial infos', () => {
      expect(
        getAppHost({
          APP_DOMAIN: 'website.com',
        })
      ).toEqual('website.com');

      expect(
        getAppHost({
          APP_BRANCH_SUBDOMAIN: 'pr-222',
          APP_SUBDOMAIN: 'api',
          APP_DOMAIN: 'website.com',
        })
      ).toEqual('pr-222.api.website.com');

      expect(
        getAppUrl({
          APP_BRANCH_SUBDOMAIN: 'pr-222',
          APP_SUBDOMAIN: 'api',
          APP_DOMAIN: 'website.com',
        })
      ).toEqual('https://pr-222.api.website.com');

      expect(
        getAppUrl({
          APP_BRANCH_SUBDOMAIN: '',
          APP_SUBDOMAIN: '',
          APP_DOMAIN: 'localhost',
          APP_PROTOCOL: 'http',
          APP_PORT: '8080',
        })
      ).toEqual('http://localhost:8080');
    });
  });
});
