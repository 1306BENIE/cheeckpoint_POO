// Classe pour représenter un produit
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // Classe pour représenter un élément dans le panier d'achat
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Méthode pour calculer le prix total de l'élément
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // Classe pour représenter le panier d'achat
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Méthode pour obtenir le total des éléments dans le panier
    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Méthode pour ajouter un élément au panier
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; // Augmente la quantité si le produit existe déjà
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // Méthode pour supprimer un élément du panier
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Méthode pour afficher les éléments du panier
    displayItems() {
      if (this.items.length === 0) {
        console.log("Le panier est vide.");
      } else {
        this.items.forEach(item => {
          console.log(
            `${item.product.name} - Quantité : ${item.quantity}, Prix total : ${item.getTotalPrice()} fcfa`
          );
        });
      }
    }
  }
  
  // Test des classes et méthodes
  // Créer des produits
  const product1 = new Product(1, "huile", 1500);
  const product2 = new Product(2, "Biscuit", 2000);
  const product3 = new Product(3, "Bonbons", 1000);
  
  // Créer un panier d'achat
  const cart = new ShoppingCart();
  
  // Ajouter des éléments au panier
  cart.addItem(product1, 2);
  cart.addItem(product2, 6);
  cart.addItem(product3, 3);
  
  // Afficher les éléments du panier
  console.log("Contenu du panier est:");
  cart.displayItems();
  
  // Afficher le total
  console.log(`Total du panier : ${cart.getTotal()}`);
  
  // Supprimer un élément du panier
  cart.removeItem(2);
  
  // Afficher le panier après suppression
  console.log("Panier après suppression :");
  cart.displayItems();
  
  // Afficher le nouveau total
  console.log(`Nouveau total : ${cart.getTotal()}`);
  