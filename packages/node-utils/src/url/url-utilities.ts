import { CommonEnvType } from '../env/common-env';

export const defaultUrlParts: Full<
  Pick<CommonEnvType, 'APP_DOMAIN' | 'APP_PORT' | 'APP_PROTOCOL'>
> = {
  APP_DOMAIN: 'website.com',
  APP_PORT: '443',
  APP_PROTOCOL: 'https',
};

type Full<T> = {
  [P in keyof T]-?: T[P];
};

export function getAppHostConfig(
  options: Partial<CommonEnvType>
): Full<
  Pick<
    CommonEnvType,
    | 'APP_PROTOCOL'
    | 'APP_BRANCH_SUBDOMAIN'
    | 'APP_SUBDOMAIN'
    | 'APP_DOMAIN'
    | 'APP_HOST'
    | 'APP_PORT'
  >
> {
  const APP_PROTOCOL = options.APP_PROTOCOL ? options.APP_PROTOCOL : defaultUrlParts.APP_PROTOCOL;
  const APP_BRANCH_SUBDOMAIN = options.APP_BRANCH_SUBDOMAIN ? options.APP_BRANCH_SUBDOMAIN : '';
  const APP_SUBDOMAIN = options.APP_SUBDOMAIN ? options.APP_SUBDOMAIN : '';
  const APP_DOMAIN = options.APP_DOMAIN ? options.APP_DOMAIN : 'website.com';
  const APP_PORT = options.APP_PORT
    ? options.APP_PORT === '443'
      ? ''
      : `:${options.APP_PORT}`
    : '';
  const APP_HOST = [APP_BRANCH_SUBDOMAIN, APP_SUBDOMAIN, APP_DOMAIN]
    .filter((part) => !!part && !!part.length)
    .join('.');

  return {
    APP_PROTOCOL,
    APP_BRANCH_SUBDOMAIN,
    APP_SUBDOMAIN,
    APP_DOMAIN,
    APP_PORT,
    APP_HOST,
  };
}

export function getAppHost(options: Partial<CommonEnvType>): string {
  const { APP_HOST } = getAppHostConfig(options);

  if (!APP_HOST) {
    throw new Error('invalid app host');
  }

  return APP_HOST;
}

export function getAppUrl(options: Partial<CommonEnvType>): string {
  const { APP_PROTOCOL, APP_HOST, APP_PORT } = getAppHostConfig(options);

  return `${APP_PROTOCOL}://${APP_HOST}${APP_PORT}`;
}
