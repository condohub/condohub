/**
 * Local user config file
 *
 * @example
 *  channel: latest
    last_checked_at: 2022-04-20T13:53:28.083177-04:00
    latest_release:
      version: v0.0.320
      prerelease: false
      download_url: https://github.com/superfly/flyctl/releases/download/v0.0.320/flyctl_0.0.320_macOS_arm64.tar.gz
      timestamp: 2022-04-13T16:04:48Z
 *
 */

export type UserConfig = {
  /**
   * Version of the CLI (reflecting when it was last run)
   */
  cliVersion?: string;
  /**
   * Email used for OAuth authorization
   */
  googleUsername?: string;
  /**
   * Locally stored Google Access Token
   */
  googleAccessToken?: string;
  /**
   * Last updated at timestamp
   */
  lastUpdatedAt: string;
};
