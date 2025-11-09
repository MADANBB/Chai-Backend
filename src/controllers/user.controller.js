import {asyncHandler} from '../utils/asyncHandler.js';
import {upload} from '../middlewares/multer.middleware.js';

const registerUser = asyncHandler(async (req, res, next) => {

     res.status(200).json({
        message : "User profile fetched successfully",
    });

    //get user detials from frontend
    //validation - not empty
    // check if user already exists: username, email
    // Check for images, Check for avatar
    // upload to cloudinary
    // create user object and create entry in DB
    // remove password and refresh token from response
    // check for user creation
    // send response


    const{userName,fullName,email,password} = req.body
    console.log("email:", email);

    

   
});




export { registerUser };


