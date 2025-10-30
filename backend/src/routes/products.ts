import { Router } from 'express';
import { z } from 'zod';
import axios from 'axios';

const router = Router();

// Validation schema
const productSchema = z.object({
  product_name: z.string().min(1),
  category: z.string(),
  description: z.string(),
  answers: z.record(z.any()).optional()
});

// Create new product submission
router.post('/', async (req, res) => {
  try {
    const data = productSchema.parse(req.body);
    
    // TODO: Save to database
    // const product = await db.products.create(data);
    
    // Generate follow-up questions from AI service
    const aiResponse = await axios.post(
      `${process.env.AI_SERVICE_URL}/generate-questions`,
      {
        product_category: data.category,
        previous_answers: data.answers || {}
      }
    );
    
    res.status(201).json({
      message: 'Product created successfully',
      product: { id: 'temp-id', ...data },
      followUpQuestions: aiResponse.data.questions
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: 'Validation error', details: error.errors });
    } else {
      res.status(500).json({ error: 'Failed to create product' });
    }
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // TODO: Fetch from database
    // const product = await db.products.findById(id);
    
    res.json({
      id,
      product_name: 'Organic Granola',
      category: 'Food',
      description: 'Healthy organic granola',
      created_at: new Date()
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    // TODO: Fetch from database with pagination
    // const products = await db.products.findAll();
    
    res.json({
      products: [],
      total: 0,
      page: 1,
      limit: 10
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = productSchema.partial().parse(req.body);
    
    // TODO: Update in database
    // const product = await db.products.update(id, data);
    
    res.json({
      message: 'Product updated successfully',
      product: { id, ...data }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // TODO: Delete from database
    // await db.products.delete(id);
    
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

export default router;
