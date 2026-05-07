import jwt from 'jsonwebtoken';

// My files
import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// Protect routes
export const protect = asyncHandler( async (req, res, next) => {
  let token;

  // Read JWT from cookie
  token = req.cookies.jwt
})