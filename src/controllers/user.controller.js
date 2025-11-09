import { asyncHandler } from '../utils/asyncHandler.js';
import { upload } from '../middlewares/multer.middleware.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';

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


    const{username,fullName,email,password} = req.body
    console.log("email:", email);

    if(
        [username,fullName,email,password].some((field)=> field?.trim()==='')
    ){
        throw new ApiError(400, "All fields are required");
    } 

   const existedUser = User.findOne({
     $or: [{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409, "User with given username or email already exists");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImagesLocalPath = req.files?.coverImages[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError (400, "Avatar is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage =  await uploadOnCloudinary(coverImagesLocalPath);

    if(!avatar){
        throw new ApiError(500, "Failed to upload avatar image");
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase(),
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Failed to create user");
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    );

});




export { registerUser };


