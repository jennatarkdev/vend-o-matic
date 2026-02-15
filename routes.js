const express = require('express');
const VendingMachine = require('./vendingMachine');

const router = express.Router();
const machine = new VendingMachine();

// Insert coin
router.put('/', (req, res) => {
  if (req.body.coin !== 1) {
    return res.sendStatus(400);
  }

  machine.insertCoin();
  res.set('X-Coins', machine.coinsInserted);
  res.sendStatus(204);
});

// Return coins
router.delete('/', (req, res) => {
  const returned = machine.returnCoins();
  res.set('X-Coins', returned);
  res.sendStatus(204);
});

// Get all inventory
router.get('/inventory', (req, res) => {
  res.json(machine.getInventory());
});

// Get inventory by id
router.get('/inventory/:id', (req, res) => {
  const qty = machine.getItem(req.params.id);
  if (qty === null) return res.sendStatus(404);
  res.json(qty);
});

// Purchase item
router.put('/inventory/:id', (req, res) => {
  const result = machine.purchase(req.params.id);

  if (result.status === 'OUT_OF_STOCK') {
    res.set('X-Coins', machine.coinsInserted);
    return res.sendStatus(404);
  }

  if (result.status === 'INSUFFICIENT_COINS') {
    res.set('X-Coins', machine.coinsInserted);
    return res.sendStatus(403);
  }

  res.set('X-Coins', result.change);
  res.set('X-Inventory-Remaining', result.remaining);
  res.json({ quantity: 1 });
});

module.exports = router;
