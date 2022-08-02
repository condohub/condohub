import { JWTInput, OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';

/**
 * Utility functions for Google Authentication APIs
 *
 * @see https://developers.google.com/workspace/guides/auth-overview
 * @see https://developers.google.com/workspace/guides/configure-oauth-consent
 */

/**
 * Create an OAuth2 client with the given credentials
 */
export function getAuthorizedClient(credentials: {
  installed: JWTInput & { redirect_uris: string[] };
}): OAuth2Client {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  return oAuth2Client;
}
