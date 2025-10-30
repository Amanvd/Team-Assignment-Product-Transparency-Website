import { Router } from 'express';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();

// Validation schemas
const registerSchema = z.object({
  companyName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

// Register new company
router.post('/register', async (req, res) => {
  try {
    const data = registerSchema.parse(req.body);
    
    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    // TODO: Save to database
    // const user = await db.users.create({
    //   ...data,
    //   password: hashedPassword
    // });
    
    // Generate JWT
    const token = jwt.sign(
      { id: 'temp-user-id', email: data.email },
      process.env.JWT_SECRET || 'your-secret-key-change-in-production',
      { expiresIn: '7d' }
    );
    
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: 'temp-user-id',
        companyName: data.companyName,
        email: data.email
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: 'Validation error', details: error.errors });
    } else {
      res.status(500).json({ error: 'Registration failed' });
    }
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const data = loginSchema.parse(req.body);
    
    // TODO: Fetch user from database
    // const user = await db.users.findByEmail(data.email);
    // if (!user) {
    //   return res.status(401).json({ error: 'Invalid credentials' });
    // }
    
    // TODO: Verify password
    // const isValid = await bcrypt.compare(data.password, user.password);
    // if (!isValid) {
    //   return res.status(401).json({ error: 'Invalid credentials' });
    // }
    
    // Generate JWT
    const token = jwt.sign(
      { id: 'temp-user-id', email: data.email },
      process.env.JWT_SECRET || 'your-secret-key-change-in-production',
      { expiresIn: '7d' }
    );
    
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: 'temp-user-id',
        email: data.email,
        companyName: 'Sample Company'
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: 'Validation error', details: error.errors });
    } else {
      res.status(500).json({ error: 'Login failed' });
    }
  }
});

// Refresh token
router.post('/refresh', async (req, res) => {
  try {
    const { token } = req.body;
    
    if (!token) {
      return res.status(401).json({ error: 'Token required' });
    }
    
    // Verify old token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-change-in-production') as any;
    
    // Generate new token
    const newToken = jwt.sign(
      { id: decoded.id, email: decoded.email },
      process.env.JWT_SECRET || 'your-secret-key-change-in-production',
      { expiresIn: '7d' }
    );
    
    res.json({ token: newToken });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

export default router;
