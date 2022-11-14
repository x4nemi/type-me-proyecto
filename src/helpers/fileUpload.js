export const fileUpload = async (file) => {
    if (!file) throw new Error("no tenemos ningún archivo a subir");
    const cloudUrl = "https://api.cloudinary.com/v1_1/ds8hfmrth/image/upload";
    const formData = new FormData();
    formData.append("upload_preset", "type-me");
    formData.append("file", file);
    try {
        const resp = await fetch(cloudUrl, {
            method: "POST",
            body: formData,
        });
        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw new Error(error.message);
    }
};
