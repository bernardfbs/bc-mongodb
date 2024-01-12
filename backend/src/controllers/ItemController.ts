import { Request, Response } from 'express';
import ItemService from '../services/ItemService';

class ItemController {
  async getAllItems(req: Request, res: Response) {
    try {
      const items = await ItemService.getAllItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching items' });
    }
  }

  async getItemById(req: Request, res: Response) {
    try {
      const item = await ItemService.getItemById(req.params.id);
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching item by ID' });
    }
  }

  async createItem(req: Request, res: Response) {
    try {
      const item = await ItemService.createItem(req.body);
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Error creating item' });
    }
  }

  async updateItem(req: Request, res: Response) {
    try {
      const item = await ItemService.updateItem(req.params.id, req.body);
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Error updating item' });
    }
  }

  async deleteItem(req: Request, res: Response) {
    try {
      await ItemService.deleteItem(req.params.id);
      res.json({ message: 'Item deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting item' });
    }
  }
}

export default new ItemController();