import { Router } from 'express';
import PDFDocument from 'pdfkit';
import axios from 'axios';

const router = Router();

// Generate transparency report
router.get('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    
    // Input validation - prevent injection attacks
    if (!productId || productId.length > 100 || !/^[a-zA-Z0-9-_]+$/.test(productId)) {
      return res.status(400).json({ error: 'Invalid product ID' });
    }
    
    // TODO: Fetch product from database with parameterized queries
    // const product = await db.products.findById(productId);
    
    // Get transparency score from AI service
    const aiResponse = await axios.post(
      `${process.env.AI_SERVICE_URL || 'http://localhost:8000'}/transparency-score`,
      {
        product_data: {
          ingredients_disclosed: true,
          sourcing_info: true,
          certifications: ['organic'],
          environmental_impact: 'low'
        }
      },
      {
        timeout: 10000, // 10 second timeout
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).catch((error) => {
      console.error('AI Service error:', error.message);
      return {
        data: {
          score: 85,
          breakdown: {
            ingredients: 20,
            sourcing: 25,
            certifications: 20,
            environmental: 20
          },
          recommendations: ['Add supply chain transparency']
        }
      };
    });
    
    res.json({
      productId,
      productName: 'Organic Granola',
      category: 'Food',
      score: aiResponse.data.score,
      breakdown: aiResponse.data.breakdown,
      recommendations: aiResponse.data.recommendations,
      generatedAt: new Date()
    });
  } catch (error) {
    console.error('Report generation error:', error);
    res.status(500).json({ error: 'Failed to generate report' });
  }
});

// Download PDF report
router.get('/:productId/pdf', async (req, res) => {
  try {
    const { productId } = req.params;
    
    // Input validation - prevent injection attacks
    if (!productId || productId.length > 100 || !/^[a-zA-Z0-9-_]+$/.test(productId)) {
      return res.status(400).json({ error: 'Invalid product ID' });
    }
    
    // Create PDF
    const doc = new PDFDocument();
    
    // Set response headers for secure download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=product-${productId}-report.pdf`);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // Pipe PDF to response
    doc.pipe(res);
    
    // Add content
    doc.fontSize(24).text('Product Transparency Report', { align: 'center' });
    doc.moveDown();
    doc.fontSize(16).text(`Product ID: ${productId}`);
    doc.fontSize(12).text(`Generated: ${new Date().toLocaleDateString()}`);
    doc.moveDown();
    
    doc.fontSize(18).text('Transparency Score: 85/100');
    doc.moveDown();
    
    doc.fontSize(14).text('Score Breakdown:');
    doc.fontSize(12).text('• Ingredient Disclosure: 20/25');
    doc.text('• Sourcing Information: 25/25');
    doc.text('• Certifications: 20/25');
    doc.text('• Environmental Impact: 20/25');
    doc.moveDown();
    
    doc.fontSize(14).text('Recommendations:');
    doc.fontSize(12).text('• Add supply chain transparency');
    doc.text('• Include carbon footprint data');
    
    // Finalize PDF
    doc.end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

export default router;
