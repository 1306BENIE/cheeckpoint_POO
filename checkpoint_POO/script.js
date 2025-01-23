/*
Instructions

Créez une classe d'objet pour le produit afin de stocker les propriétés pour l'id, le nom et le prix du produit.
Créez une classe d'objet pour l'élément du panier d'achat afin de stocker les propriétés pour le produit et sa quantité.
Ajoutez à la classe d'objet précédente la méthode pour calculer le prix total de l'élément.
Créez une autre classe d'objet pour le panier d'achat qui contient un tableau d'instances de ShoppingCartItem.
Ajoutez les méthodes suivantes à l'objet panier d'achat.
Ajoutez les méthodes pour :
Obtenir le total des éléments à l'intérieur du panier
Ajouter des éléments
Supprimer des éléments
Afficher les éléments du panier
Passez à tester la capacité de nos objets à :
Créer des produits
Créer un panier d'achat
Ajouter des éléments au panier
Afficher le panier
Supprimer un élément du panier
*/

class Produit {
    constructor(id, nom, prix){
        this.id = id
        this.nom = nom
        this.prix = prix
    }
}

class Panier extends Produit{
    constructor(id, nom, prix, quantite){
        super()
        this.quantite = quantite
    }
}