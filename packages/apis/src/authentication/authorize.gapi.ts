import { JWTInput, OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';

import { User, USER_TYPE } from '@condohub/models';

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
export function authorize(credentials: {
  installed: JWTInput & { redirect_uris: string[] };
}): OAuth2Client {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  return oAuth2Client;
}
