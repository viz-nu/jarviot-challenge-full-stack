import mongoose from "mongoose"

const userModel = mongoose.Schema(
    {
        id: { unique: true, type: String },
        name: { type: String, required: true },
        picture: { type: String, default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" },
        tokens: {type:Object}
    },
    { timestamps: true }
);

const users = mongoose.model("Gdrive_users", userModel, "users");

export default users