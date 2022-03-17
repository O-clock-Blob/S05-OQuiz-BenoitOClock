# OQuiz

## Jour 1 : Active Record

Les méthodes Active Record du modèle `Level` ont été codées.

On a pu vérifier que ces méthodes fonctionnent en jouant dans `test.js`.

En s'inspirant (très largement) de ce code existant, on passe à la suite, à savoir coder les méthodes Active Record du modèle `User` :

- `findAll(callback)`, qui trouve tous les Users dans la base de données.
- `findById(id, callback)`, qui trouve un User en fonction de son ID.
- `insert(callback)`, qui insert l'instance courante dans la base de données.
- `update(callback)`, qui met à jour l'instance courante dans la base de données.
- `delete(callback)`, qui supprime l'instance courante de la base de données.

En bonus, commencer à réfléchir pour factoriser tout ce code (c'est-à-dire coder toutes les méthodes Active Record dans CoreModel !)

