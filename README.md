# VendingMachine API

This is a simple **VendingMachine API** built with **Node.js** and **Express**, allowing you to simulate inserting coins, purchasing items, checking inventory, and returning coins. A Postman collection is provided to test all endpoints and validate headers, status codes, and responses.

---

## **Technologies / Versions Used**

- **Node.js:** v18.17.1  
- **npm:** v9.6.7  
- **Express:** v4.18.2  
- **Postman:** Latest version recommended  
- **Operating System:** Windows / macOS / Linux (cross-platform)

---

## **Setup & Installation**

1. **Clone the repository**

```bash
git clone https://github.com/jennatarkdev/vend-o-matic.git
cd vend-o-matic
```


| Endpoint         | Method | Description                         | Response / Headers                                                                                                              |
| ---------------- | ------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `/`              | PUT    | Insert a coin                       | 204, `X-Coins: [# of coins accepted]`                                                                                           |
| `/`              | DELETE | Return all inserted coins           | 204, `X-Coins: [# of coins returned]`                                                                                           |
| `/inventory`     | GET    | Get the quantities of all items     | 200, JSON array                                                                                                                 |
| `/inventory/:id` | GET    | Get quantity of a single item by ID | 200, integer quantity or 404 if invalid ID                                                                                      |
| `/inventory/:id` | PUT    | Purchase an item                    | 200, headers `X-Coins`, `X-Inventory-Remaining`, body `{ "quantity": 1 }` <br>404 if out of stock <br>403 if insufficient coins |

2. **Install Dependencies and Run Server**
```bash
npm install
node server.js
```

