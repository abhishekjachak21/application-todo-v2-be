import {User} from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"


// Function to handle user information
const userInfo = async (req, res) => {
    const { username, userage, studyingProfession, oneBigAchievement,  nextGoal } = req.body;

    try {
        // Check if any required fields are missing
        if (!username || !userage || !nextGoal) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new user object
        const newUser = new User({
            username,
            userage,studyingProfession, oneBigAchievement,
            nextGoal
        });

        // Save the new user to the database
        await newUser.save();

        // Return the newly created user in the response
        return res.status(201).json(newUser);
    } catch (error) {
        // Handle any errors that occur during user creation
        return res.status(400).json({ error: error.message });
    }
};

export { userInfo };
