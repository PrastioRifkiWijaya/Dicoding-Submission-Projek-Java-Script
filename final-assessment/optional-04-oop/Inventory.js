/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

import Item from "./Item";

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  listItems() {
    return this.items.map((item) => item.displayDetails()).join("\n");
  }

  updateItem(id, newName, newQuantity) {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      item.name = newName;
      item.quantity = newQuantity;
    }
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
