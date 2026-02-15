class VendingMachine {
  constructor() {
    this.coinsInserted = 0;
    this.inventory = [5, 5, 5];
    this.PRICE = 2;
  }

  insertCoin() {
    this.coinsInserted += 1;
  }

  returnCoins() {
    const coins = this.coinsInserted;
    this.coinsInserted = 0;
    return coins;
  }

  getInventory() {
    return this.inventory;
  }

  getItem(id) {
    const index = id - 1;
    if (index < 0 || index >= this.inventory.length) return null;
    return this.inventory[index];
  }

  purchase(id) {
    const index = id - 1;

    if (index < 0 || index >= this.inventory.length) {
      return { status: 'OUT_OF_STOCK' };
    }

    if (this.inventory[index] === 0) {
      return { status: 'OUT_OF_STOCK' };
    }

    if (this.coinsInserted < this.PRICE) {
      return { status: 'INSUFFICIENT_COINS' };
    }

    this.inventory[index] -= 1;
    const change = this.coinsInserted - this.PRICE;
    this.coinsInserted = 0;

    return {
      status: 'SUCCESS',
      change,
      remaining: this.inventory[index]
    };
  }
}

module.exports = VendingMachine;
