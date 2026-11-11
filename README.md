# INTER-IT SERVICES INC. — Site Officiel

Site web officiel d'**INTER-IT Services Inc.** (https://inter-itservices.ca), développé avec **Next.js 16**, **React 19**, **TypeScript** et **Tailwind CSS 4**.

## Positionnement Stratégique & Produits

INTER-IT Services développe et déploie des solutions logicielles destinées à répondre aux besoins réels des entreprises et des particuliers :

1. **Odoo Implementation (`DISPONIBLE` / `AVAILABLE`)**
   - Unique solution actuellement commercialisée et proposée activement à nos clients.
   - Analyse des besoins, étude des processus, sélection et configuration des modules (CRM, ventes, achats, facturation, comptabilité, stocks, projets) et accompagnement à la mise en service.

2. **App Simulation Profil (`EN DÉVELOPPEMENT` / `IN DEVELOPMENT`)**
   - Produit logiciel propriétaire d'INTER-IT en cours de développement.
   - Plateforme intelligente d'évaluation de profils utilisant un moteur d'analyse basé sur l'intelligence artificielle (*« Évaluez votre profil en 5 minutes. »*) pour le **Canada**, l'**Europe** et l'**Afrique**.
   - Les liens et boutons d'accès à cette application sont désactivés (`BIENTÔT DISPONIBLE` / `COMING SOON`) jusqu'au lancement officiel (configurés dans `src/data/solutions-catalog.ts`).

## Charte Graphique

- **Bleu foncé (Primaire) :** `#1D2140`
- **Orange (Secondaire) :** `#F39200`
- **Blanc :** `#FFFFFF`

## Architecture Principale

- `src/data/solutions-catalog.ts` : Source de vérité pour les deux solutions (`odoo` et `app-simulation-profil`) et leur statut de disponibilité (`isAvailable`).
- `src/data/locales/fr.json` & `src/data/locales/en.json` : Dictionnaires bilingues (Français & Anglais).
- `src/components/layout/Header.tsx` & `Footer.tsx` : Navigation responsive incluant le menu « Solutions » à deux entrées et la logique de verrouillage d'*App Simulation Profil*.
- `src/components/sections/` : Sections modulaires de la page d'accueil (`HeroSection`, `ServicesSection`, `OdooSectionHome`, `ProprietaryProductSection`, `IntroSection`, `BlogSectionHome`, `ContactSection`).
- `src/middleware.ts` : Gestion de la localisation (`/fr`, `/en`) et redirections permanentes (`308`) des anciennes offres vers les sections pertinentes.

## Commandes Utiles

```bash
# Lancer le serveur de développement
npm run dev

# Vérifier le lint
npm run lint

# Compiler pour la production
npm run build
```
