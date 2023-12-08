export const ConvertImageToBase64 = async (data) => {
    try {
        const reader = new FileReader();
        return await new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(data);
        }).then(base64String => base64String.replace(/data:image\/(jpeg|png|png);base64,/g, ''));
    }
    catch (err) {
        console.error("Error in ConvertImageToBase64:", err);
        throw err;
    }
};