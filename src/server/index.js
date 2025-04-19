
const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Database path
const dbPath = path.join(__dirname, 'data', 'menu.json');

// Ensure directory exists
const ensureDirectoryExists = async () => {
  try {
    await fs.mkdir(path.join(__dirname, 'data'), { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error);
  }
};

// Initialize database with sample data if it doesn't exist
const initializeDatabase = async () => {
  try {
    await ensureDirectoryExists();
    
    try {
      await fs.access(dbPath);
      console.log('Database already exists.');
    } catch (error) {
      // File doesn't exist, create it with sample data
      const initialData = {
        categories: [
          { id: 'featured', name: 'Featured' },
          { id: 'specials', name: 'Specials' },
          { id: 'momos', name: 'Momo Bowls' },
          { id: 'dalbhat', name: 'Dal Bhat Sets' },
          { id: 'streetfood', name: 'Street Food' },
          { id: 'drinks', name: 'Drinks' }
        ],
        items: [
          {
            id: 'f1',
            name: 'Everest Momo Platter',
            description: 'Selection of our finest momos including chicken, buff, and vegetable varieties with three signature dipping sauces',
            price: '$18.99',
            image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            category: 'featured',
            isNewItem: true
          },
          {
            id: 'f2',
            name: 'Himalayan Thali',
            description: 'Traditional Nepali thali with rice, lentils, vegetables, pickles, and your choice of protein',
            price: '$22.99',
            image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            category: 'featured',
            isVegetarian: true
          },
          // More items would be added here...
        ]
      };
      
      await fs.writeFile(dbPath, JSON.stringify(initialData, null, 2));
      console.log('Database initialized with sample data.');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

// Read database
const readDatabase = async () => {
  try {
    const data = await fs.readFile(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { categories: [], items: [] };
  }
};

// Write to database
const writeDatabase = async (data) => {
  try {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing to database:', error);
    return false;
  }
};

// Routes

// Get all menu categories
app.get('/api/categories', async (req, res) => {
  try {
    const db = await readDatabase();
    res.json(db.categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Get all menu items
app.get('/api/items', async (req, res) => {
  try {
    const db = await readDatabase();
    res.json(db.items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// Get menu items by category
app.get('/api/categories/:categoryId/items', async (req, res) => {
  try {
    const { categoryId } = req.params;
    const db = await readDatabase();
    const items = db.items.filter(item => item.category === categoryId);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items by category' });
  }
});

// Add new menu item
app.post('/api/items', async (req, res) => {
  try {
    const newItem = req.body;
    
    // Validate required fields
    if (!newItem.name || !newItem.description || !newItem.price || !newItem.category) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Generate a unique ID
    newItem.id = `item-${Date.now()}`;
    
    const db = await readDatabase();
    db.items.push(newItem);
    
    const success = await writeDatabase(db);
    if (success) {
      res.status(201).json(newItem);
    } else {
      res.status(500).json({ error: 'Failed to save item' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item' });
  }
});

// Update menu item
app.put('/api/items/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const updatedItem = req.body;
    
    const db = await readDatabase();
    const index = db.items.findIndex(item => item.id === itemId);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }
    
    db.items[index] = { ...db.items[index], ...updatedItem };
    
    const success = await writeDatabase(db);
    if (success) {
      res.json(db.items[index]);
    } else {
      res.status(500).json({ error: 'Failed to update item' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update item' });
  }
});

// Delete menu item
app.delete('/api/items/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    
    const db = await readDatabase();
    const index = db.items.findIndex(item => item.id === itemId);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }
    
    db.items.splice(index, 1);
    
    const success = await writeDatabase(db);
    if (success) {
      res.json({ message: 'Item deleted successfully' });
    } else {
      res.status(500).json({ error: 'Failed to delete item' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

// Start the server
app.listen(PORT, async () => {
  await initializeDatabase();
  console.log(`Server running on port ${PORT}`);
});
