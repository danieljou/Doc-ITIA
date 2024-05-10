<!-- @format -->

# Frontend

## Prérequis

- Node : 20.9.0
- Vous devez au préalable insttaller node

## I - Installation en développement

- 1 - cloner le projet

  ```

  git clone https://liengit/user-projet/repository

  ```

## II - Configurer les variables d'environnement

\*- lancer le projet

```bash

  npm run dev

```

## III - Lancer le projet en développement

- 2 - installer les dépendances

  ```bash

  npm install

  ```

# Backend

Pour lancer et déployer un projet Django, vous pouvez suivre les étapes ci-dessous :

## Prérequis

- Python 3.10.7
- pip 23.2.1

1. **Cloner le référentiel** : Utilisez la commande `git clone` pour cloner le référentiel sur votre machine locale. Assurez-vous d'avoir Git installé sur votre système. Par exemple :

```
git clone https://github.com/votre_utilisateur/votre_projet.git
```

2. **Accéder au répertoire du projet** : Utilisez la commande `cd` pour accéder au répertoire du projet que vous venez de cloner. Par exemple :

```
cd votre_projet
```

3. **Créer un environnement virtuel** : Il est recommandé d'utiliser un environnement virtuel pour isoler les dépendances du projet. Créez un nouvel environnement virtuel en utilisant la commande `python -m venv`. Par exemple :

```
python -m venv venv
```

-- Rassurerz vous d'avoir vitrualenv

```
    pip list
```

Si non

```
    pip install virtualenv
```

Activez ensuite l'environnement virtuel. Les commandes d'activation varient en fonction du système d'exploitation. Par exemple, sur Windows :

```
venv\Scripts\activate
```

Et sur macOS/Linux :

```
source venv/bin/activate
```

4. **Installer les dépendances** : Utilisez la commande `pip install` pour installer les dépendances du projet à partir du fichier `requirements.txt`. Par exemple :

```
pip install -r requirements.txt
```

5. **Effectuer les migrations** : Exécutez les migrations pour créer la structure de base de données en utilisant la commande `python manage.py migrate` :

```
python manage.py migrate
```

6. **Lancer le serveur de développement** : Utilisez la commande `python manage.py runserver` pour démarrer le serveur de développement de Django :

```
python manage.py runserver 0.0.0.0:8001
```

Le serveur de développement sera accessible à l'adresse `http://x.x.x.x:8001`. x.x.x.x etant considéré comme l'adresse de la machine et 8000 comme etant le port

7. **Effectuer des ajustements** : Selon les besoins de votre projet, vous devrez peut-être apporter des ajustements supplémentaires, tels que la configuration des paramètres, la création de superutilisateurs, etc. Consultez la documentation du projet Django pour obtenir des instructions détaillées.

Pour déployer le projet Django, les étapes peuvent varier en fonction de la plateforme de déploiement que vous utilisez. Voici une approche générale :

1. **Configurer la plateforme de déploiement** : Suivez les instructions spécifiques à la plateforme de déploiement que vous utilisez. Cela peut impliquer la création d'un compte, la configuration des variables d'environnement, etc.
2. **Préparer le déploiement** : Assurez-vous d'avoir configuré les paramètres de déploiement appropriés dans votre projet Django, tels que les clés secrètes, les paramètres de base de données, etc. Vous devrez peut-être adapter votre fichier `settings.py` pour le déploiement.
