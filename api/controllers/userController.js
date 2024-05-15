const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "15d",
    }
  );
};

// Register a new user without OTP and email verification
exports.registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      telephone,
      postcode,
      address1,
      address2,
      city,
      password,
      passwordConfirm,
      role,
      profileImage,
    } = req.body;

    const errors = [];

    // Check each required field individually
    if (!firstName) {
      errors.push("First name is required");
    }
    if (!lastName) {
      errors.push("Last name is required");
    }
    if (!email) {
      errors.push("Email is required");
    }
    if (!phone) {
      errors.push("Phone number is required");
    }
    if (!telephone) {
      errors.push("Telephone number is required");
    }
    if (!postcode) {
      errors.push("Postcode is required");
    }
    if (!address1) {
      errors.push("Address line is required");
    }
    if (!city) {
      errors.push("City is required");
    }
    if (!password) {
      errors.push("Password is required");
    }

    // Check if passwords match
    if (password !== passwordConfirm) {
      errors.push("Passwords do not match");
    }

    // If any errors exist, return 400 with error messages
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Check if the error is due to duplicate key (email already exists)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      telephone,
      postcode,
      address1,
      address2,
      city,
      password: hashedPassword,
      role,
      profileImage,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res
      .status(201)
      .json({ data: savedUser, message: "User Registered Successfully" });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login user and return JWT token
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if password is correct
    const passwordMatch = await bcryptjs.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user);
    res.cookie("accessToken", token, {
      httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
      secure: process.env.NODE_ENV === "production", // Set secure flag in production
    });

    res.status(200).json({ data: user, token, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// API endpoint to get user details (requires authentication)
exports.getUser = async (req, res) => {
  try {
    // Get the user ID from the decoded token attached by the auth middleware
    const userId = req.params.userId;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the user details as a response
    res
      .status(200)
      .json({ data: user, message: "User details retrieved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// Update user details
exports.updateUser = async (req, res) => {
  try {
    const { name, email, gender, address, salutationPreference, profileImage } =
      req.body;
    const userId = req.body.userId; // Assuming userId is provided in the request body or can be obtained from the JWT token

    // Find the user by ID
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data
    user.name = name || user.name;
    // Check if the provided email is different from the current email
    if (email && email !== user.email) {
      user.email = email;
    }
    user.gender = gender || user.gender;
    user.address = address || user.address;
    user.salutationPreference =
      salutationPreference || user.salutationPreference;
    user.profileImage = profileImage || user.profileImage;

    // Save the updated user data
    user = await user.save();

    // Send the updated user details as a response
    res
      .status(200)
      .json({ data: user, message: "User details updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    // Extract role from request query or body
    const { role } = req.query || req.body;

    // Define query filter based on role
    const queryFilter = role ? { role } : {};

    // Find all users if no role is provided
    const users = role
      ? await User.find(queryFilter)
      : await User.find().sort({ createdAt: -1 });

    // Check if there are no users
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    // Send the list of users as a response
    res
      .status(200)
      .json({ data: users, message: "Users retrieved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
