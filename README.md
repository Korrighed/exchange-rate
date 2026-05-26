# Projet Vue - Taux de Change XPF

Application Vue 3 pour afficher les taux de change en XPF avec API ExchangeRate.

## Installation

### Dépendances principales
- Vue 3
- Vue Router
- Pinia (state management)

### Installer
```bash
npm install
```

### CLI Netlify (pour développement avec serverless functions)
```bash
npm install -g netlify-cli
```

## Configuration

### Variables d'environnement

Crée un fichier `.env` à la racine :
```
VUE_APP_EXCHANGE_RATE_API_KEY=ta_clé_api
```

Obtiens ta clé sur https://www.exchangerate-api.com/

## Développement

### Avec Netlify Functions (local)
```bash
netlify dev
```
L'app tourne sur `http://localhost:8888`

### Sans Netlify Functions
```bash
npm run serve
```
L'app tourne sur `http://localhost:8080`

## Architecture

- **src/components/exchangeRate/ExchangeRate.vue** : Composant qui récupère les données
- **src/stores/exchangeRateStore.js** : Store Pinia pour les taux
- **netlify/functions/getExchangeRates.js** : Fonction serverless (protège la clé API)

## Build
```bash
npm run build
```

## Déploiement Netlify

1. Push sur GitHub
2. Connecte le repo à Netlify
3. Ajoute la variable d'env `EXCHANGE_RATE_API_KEY` dans les paramètres Netlify
4. Deploy
