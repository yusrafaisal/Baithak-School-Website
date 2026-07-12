/**
 * Uploads a PDF file straight from the browser to Cloudinary and returns
 * the public URL to store on the report record.
 *
 * Reuses the same Cloudinary account/preset as lib/uploadImage.ts:
 *   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
 *   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
 *
 * IMPORTANT one-time Cloudinary setting for PDFs specifically:
 *   Go to Settings -> Security -> and enable "Allow delivery of PDF and ZIP
 *   files". Cloudinary blocks raw/PDF delivery by default (anti-abuse), so
 *   without this the uploaded PDF will 401 when someone tries to view it.
 */
export async function uploadReport(file: File): Promise<string> {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
        throw new Error(
            "Report upload isn't set up yet. Add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET to .env.local."
        );
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    // "auto" lets Cloudinary detect this is a raw/PDF file rather than an
    // image, since we're hitting the same preset used for images.
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: "POST",
        body: formData,
    });

    if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error?.message || "Report upload failed. Please try again.");
    }

    const data = await res.json();
    return data.secure_url as string;
}