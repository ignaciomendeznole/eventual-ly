import axios from 'axios';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import { CloudinaryUpload } from '../types/types';

export const cloudinaryImageUpload = async (imageData: ImageInfo) => {
  let base64Img = `data:image/jpg;base64,${imageData.base64}`;
  let data = {
    file: base64Img,
    upload_preset: 'eventually',
  };

  try {
    const {
      data: { secure_url },
    } = await axios.post<CloudinaryUpload>(
      `https://api.cloudinary.com/v1_1/drbctf82b/image/upload`,
      data
    );
    return secure_url;
  } catch (error) {
    console.log(error);
  }
};
