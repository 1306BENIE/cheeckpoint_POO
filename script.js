class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.quantity * this.product.price;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push(new ShoppingCartItem(product));
        }
        this.updateTotal();
    }

    removeItem(productId) {
        const itemIndex = this.items.findIndex(item => item.product.id === productId);
        if (itemIndex > -1) {
            if (this.items[itemIndex].quantity > 1) {
                this.items[itemIndex].quantity--;
            } else {
                this.items.splice(itemIndex, 1);
            }
        }
        this.updateTotal();
    }

    updateTotal() {
        const total = this.items.reduce((sum, item) => sum + item.getTotalPrice(), 0);
        document.querySelector('.total').textContent = `${total} $`;
    }

    displayItems() {
        // Logique pour afficher les éléments du panier
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cart = new ShoppingCart();

    document.querySelectorAll('.fa-plus-circle').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const id = card.dataset.id;
            const name = card.querySelector('.name').textContent;
            const price = parseFloat(card.querySelector('.unit-price').textContent);
            const product = new Product(id, name, price);
            cart.addItem(product);
            card.querySelector('.quantity').textContent = cart.items.find(item => item.product.id === id).quantity;
        });
    });

    document.querySelectorAll('.fa-minus-circle').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const id = card.dataset.id;
            cart.removeItem(id);
            const item = cart.items.find(item => item.product.id === id);
            card.querySelector('.quantity').textContent = item ? item.quantity : 0;
        });
    });

    document.querySelectorAll('.fa-trash-alt').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const id = card.dataset.id;
            cart.removeItem(id);
            card.remove();
        });
    });

    document.querySelectorAll('.fa-heart').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });

    cart.updateTotal();
});