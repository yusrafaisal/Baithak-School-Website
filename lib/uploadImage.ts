/**
 * Uploads an image file straight from the browser to Cloudinary (free image
 * hosting) and returns the public URL to store on the story.
 *
 * Setup (one-time, free):
 *   1. Create a free account at https://cloudinary.com
 *   2. On your Cloudinary dashboard, copy your "Cloud name".
 *   3. Go to Settings -> Upload -> Upload presets -> "Add upload preset".
 *      Set "Signing Mode" to "Unsigned", save it, and copy its name.
 *   4. In .env.local (create it if it doesn't exist) add:
 *        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
 *        NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-preset-name
 *   5. Restart `npm run dev`.
 *
 * These two values are safe to expose publicly (that's what an "unsigned
 * upload preset" is for) — no secret keys are needed for this flow.
 */
export async function uploadImage(file: File): Promise<string> {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
        throw new Error(
            "Image upload isn't set up yet. Add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET to .env.local (see lib/uploadImage.ts for steps)."
        );
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
    });

    if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error?.message || "Image upload failed. Please try again.");
    }

    const data = await res.json();
    return data.secure_url as string;
}
