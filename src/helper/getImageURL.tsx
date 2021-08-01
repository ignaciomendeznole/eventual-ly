import axios from 'axios';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

export const cloudinaryImageUpload = async (imageData: ImageInfo) => {
  let base64Img = `data:image/jpg;base64,${imageData.base64}`;
  let data = {
    file: base64Img,
    upload_preset: 'eventually',
  };

  try {
    const response = await axios.post<any>(
      `https://api.cloudinary.com/v1_1/drbctf82b/image/upload`,
      data
    );
    return response.data.secure_url;
  } catch (error) {
    console.log(error);
  }
};
