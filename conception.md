# Conception

Quand on modélise une base de données, il est important de conserver l'atomicité des propriétés (en gros une case ne contient qu'une seule valeur). Dans notre cas par exemple, il est préférable de modéliser la relation entre les questions et les réponses associées en liant chaque réponse à une question plutot qu'en liant une question à plusieurs réponses.

## Cas d'utilisation

Les cas d'utilisation correspondent à l'ensemble des actions réalisées par une application en interaction avec ses utilisateurs pour arriver à un objectif donné.

| en tant que... | J'ai besoin de...                             | afin de...                                       |
| -------------- | --------------------------------------------- | ------------------------------------------------ |
| visiteur       | pouvoir accéder à un formulaire d'inscription | pouvoir m'inscrire                               |
| visiteur       | pouvoir accéder à un formulaire de connexion  | pouvoir me connecter                             |
| visiteur       | pouvoir reinitialiser mon mot de passe        | pour pouvoir me connecter                        |
| membre         | me déconnecter                                | changer de compte                                |
| membre         | visualiser la liste des quizz                 | choisir le quizz auquel je souhaite répondre     |
| membre         | accéder à un quizz                            | pouvoir répondre aux questions                   |
| membre         | répondre aux questions                        | vérifier mes connaissances                       |
| membre         | visualiser les réponses                       | savoir les erreurs commises, connaitre mon score |
| membre         | d'accéder à mon profil                        | le visualiser                                    |

## Propositions

| en tant que... | J'ai besoin de...                                             | afin de...                                |
| -------------- | ------------------------------------------------------------- | ----------------------------------------- |
| admin          | pouvoir accéder à espace d'administration                     | pouvoir gérer le contenu du site de quizz |
| membre         | pouvoir consulter les scores des quizz auquels j'ai participé | connaitre mon évolution                   |
| membre         | pouvoir filtrer/trier les quizz                               | choisir celui qui m'interesse             |
| membre         | pouvoir signaler un problème                               | permettre à l'admin de le corriger             |

## wireframe

https://whimsical.com/DRSDegDS671YRmZxjA4jFq