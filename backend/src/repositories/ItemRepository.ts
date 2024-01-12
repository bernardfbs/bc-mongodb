import Item from '../models/Item';

class ItemRepository {
  async getAllItems() {
    return Item.find();
  }

  async getItemById(id: string) {
    return Item.findById(id);
  }

  async createItem(data: any) {
    return Item.create(data);
  }

  async updateItem(id: string, data: any) {
    return Item.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteItem(id: string) {
    return Item.findByIdAndDelete(id);
  }
}

export default new ItemRepository();