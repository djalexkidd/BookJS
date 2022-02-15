<p align="center">
    <img src="assets/logo.png">
</p>

# BookJS

BookJS est un gestionnaire de bibliothèque littéraire écrit en HTML, CSS et JavaScript.

Ce site a été fait pour un devoir à rendre pour l'IMTS le Vendredi 18 Février 2022 à 9:00.

[Lien du site](https://djalexkidd.github.io/BookJS)

## Documentation

Pour réaliser ce projet je me suis basé sur ma [Todo List](https://github.com/djalexkidd/todo-list) faite précédement.

Lorsque qu'un livre est enregistré, les données du formulaire sont enregistrés dans l'objet ```bookList``` qui est lui même sauvegardé dans le localStorage au format JSON.

Le bouton "Tout péter" permet de remettre à zéro l'objet ```bookList``` et recharge la page.

Pour changer de thème j'ai fait une une règle CSS pour le ```<body>``` pour lui faire changer la couleur du fond et du texte, avec un ```classList``` à toggle.