/**
 * Google Drive's /view page refuses to be framed; /preview is the embeddable
 * form of the same file. Every other URL is returned unchanged.
 */
export function certificatePreviewUrl(url: string): string {
  const driveFile = /^https:\/\/drive\.google\.com\/file\/d\/([^/]+)/.exec(url);
  return driveFile ? `https://drive.google.com/file/d/${driveFile[1]}/preview` : url;
}
