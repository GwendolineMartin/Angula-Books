# Angular

- Refaites une installation d'Angular pour ce nouveau projet.

- Installez bootstrap comme dans le projet app-music.

## Page principale 

Affichez les trois premiers livres et mettez en place le menu principal. L'item home affiche les trois derniers livres et l'item books affiche tous les livres. Chaque titre de livre est cliquable et affiche le détails d'un livre (voir le wireframe de la page livre ci-après) :

```text
------------------------------------------
Books    [home]    books
------------------------------------------
    - title : [Things Fall Apart]

    - title :[ Fairy tales]

    - title : [The Divine Comedy]
```

## Page d'un livre

Vous afficherez sur cette page l'ensemble des informations d'un livre. Récupérez le lien vers la page Wikipédia des écrivains et rendez-le cliquable.

```text
------------------------------------------
Books    home    books
------------------------------------------
    author: Hans Christian Andersen,
    country: Denmark,
    imageLink: images/fairy-tales.jpg,
    language: Danish,
    link: [wikipédia]
    pages: 784,
    title: Fairy tales,
    year: 1836
```

## Page books 

Cette page affiche l'ensemble des livres avec de la pagination. Mettez en place la pagination que nous avons déjà vu en cours.

## Page langue facultatif 

Ajoutez un lien vers une page affichant les livres par langue. Ce lien sera accessible sur la page affichant le détail d'un livre, voir le Wireframe ci-dessous :

Remarques : si il y a plusieurs langue pour un livre vous afficherez ce livre dans toutes ses langues.

```text
------------------------------------------
Books    home    books 
------------------------------------------
    author: Hans Christian Andersen,
    country: Denmark,
    imageLink: images/fairy-tales.jpg,
    language: [Danish],  <-- lien cliquable langue Danish
    link: wikipédia
    pages: 784,
    title: Fairy tales,
    year: 1836
```