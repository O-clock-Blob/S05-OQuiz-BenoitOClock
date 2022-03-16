# Plan de création d'une application Express

## Dans le cas d'un projet venant d'un tiers

Une étude préliminaire est nécessaire afin de bien comprendre la demande.

- Analyse de la demande `./docs/brief_analysis.svg`
- Création des Users Stories `./docs/user_stories.svg`
- MCD (Modèle Conceptuel de données) `./docs/MCD.svg`

## Étapes


1. Soit le dépôt a été créé sur GitHub et on le récupère (`git clone …`) 
2. Soit on initialise le dépôt avec (`git init`) pour ajouter plus tard le dépôt distant (GitHub ou autre).
3. Mise en place de l'arborescence du dossier devant acueillir notre application
    - assets
    - app
      - router
      - dataMappers
      - controllers
      - views
    - data (jsons, script import sql…)
    - docs (brief, mcd, users stories…)
4. Initialisation du gestionnaire de modules (npm) `npm init -y`
5. Installation des modules nécessaires `npm i …`
6. Ajout du fichier .gitignore (node_module/, .env, …)
7. Ajout du fichier .env et .env.example
8. Seeding (ajouter des données réelles ou de test) > Exécution des scripts d'import
9. Point d'entrée de l'application (serveur web) `./index.js`
10. Création des dataMappers `./app/dataMappers`
11. Controllers `./app/controllers`
12. Views
    1. les partials `./views/partials/`
        1. Entête de page `./views/partials/header.ejs`
        2. Pied de page `./views/partials/footer.ejs`
    2. les pages principales qui vont inclure les partials
13. Router `./app/router.js`
14. Les test des routes
