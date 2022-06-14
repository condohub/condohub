import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
export function listFiles(oAuth2Client: OAuth2Client) {
  const drive = google.drive({ version: 'v3', auth: oAuth2Client });
  drive.files.list(
    {
      pageSize: 10,
      fields: 'nextPageToken, files(id, name)',
    },
    (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const files = res?.data.files;
      if (files?.length) {
        console.log('Files:');
        files.map((file) => {
          console.log(`${file.name} (${file.id})`);
        });
      } else {
        console.log('No files found.');
      }
    }
  );
}
