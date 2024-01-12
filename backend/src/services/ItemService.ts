import ItemRepository from '../repositories/ItemRepository';

class ItemService {
  async getAllItems() {
    return ItemRepository.getAllItems();
  }

  async getItemById(id: string) {
    return ItemRepository.getItemById(id);
  }

  async createItem(data: any) {
    return ItemRepository.createItem(data);
  }

  async updateItem(id: string, data: any) {
    return ItemRepository.updateItem(id, data);
  }

  async deleteItem(id: string) {
    return ItemRepository.deleteItem(id);
  }
}

export default new ItemService();