* Styles de la barre de navigation */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f9fa; /* Couleur de fond de la barre */
    padding: 10px 20px; /* Espacement intérieur */
}

/* Styles pour le menu burger */
.menu-burger {
    cursor: pointer; /* Change le curseur au survol */
    font-size: 24px; /* Taille du symbole menu burger */
}

/* Styles du menu */
.menu {
    list-style-type: none; /* Supprime les puces */
    padding: 0;
    margin: 0;
    display: none; /* Cache le menu par défaut */
}

/* Montre le menu lorsque visible */
.menu.active {
    display: block; /* Affiche le menu */
}

/* Styles des éléments de menu */
.menu-item {
    margin: 0 15px; /* Espacement entre les éléments */
}

.menu-item a {
    text-decoration: none; /* Pas de soulignement */
    color: #0000FF; /* Couleur du lien */
}

/* Styles pour les sections */
.about, .soft-skills {
    padding: 20px; /* Espacement pour les sections */
}

/* Autres styles ici... */
