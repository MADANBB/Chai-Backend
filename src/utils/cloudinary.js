import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME , 
        api_key: process.env.CLOUDINARY_API_KEY , 
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

const uploadOnCloudinary = async (filePath) => {
    try {
        if(!fs.existsSync(filePath)){
            throw new Error("File does not exist");
        }
        const response = await cloudinary.uploader.upload(filePath,{
            resource_type: "auto",
        })
        // console.log("file is uploaded to cloudinary",response.url);
        fs.unlinkSync(filePath); //delete the file from local storage
        return response;
    } catch (error) {
        fs.unlinkSync(filePath); //delete the file from local storage
        return null;
    }
}


export { uploadOnCloudinary };





