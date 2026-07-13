/**
 * Given a Cloudinary PDF url (from lib/uploadReport.ts), derives a URL that
 * renders page 1 of that PDF as a JPG — used as the report's cover image.
 *
 * Turns:
 *   https://res.cloudinary.com/<cloud>/image/upload/v123/reports/abc.pdf
 * into:
 *   https://res.cloudinary.com/<cloud>/image/upload/pg_1,w_400,h_520,c_fill,f_jpg/v123/reports/abc.jpg
 */
export function getReportCoverUrl(pdfUrl: string): string {
    const uploadMarker = "/upload/";
    const idx = pdfUrl.indexOf(uploadMarker);
    if (idx === -1) return pdfUrl;

    const before = pdfUrl.slice(0, idx + uploadMarker.length);
    const after = pdfUrl.slice(idx + uploadMarker.length).replace(/\.pdf$/i, "");

    return `${before}pg_1,w_400,h_520,c_fill,f_jpg/${after}.jpg`;
}