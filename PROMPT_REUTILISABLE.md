# Prompt réutilisable — Landing Monsinistre Incendie Habitation

Copie ce prompt pour générer un **nouveau projet identique en architecture et en design**.  
Change uniquement : **textes métier**, **visuels**, **nom de marque**, **liens sociaux** (si barre CTA ajoutée).

**Ne change pas les couleurs** de la landing page : conserver la palette / les tokens du projet de référence.

---

## PROMPT À COPIER

```text
# OBJECTIF

Créer une landing page one-page moderne, premium, responsive, entièrement en français,
en reprenant EXACTEMENT l’architecture, la structure UX et le design (y compris les couleurs)
du projet de référence « Monsinistre Incendie Habitation » décrit ci-dessous.

Je veux changer UNIQUEMENT :
- les textes métier
- les visuels / illustrations abstraites
- le nom de la marque
- les liens réseaux sociaux (si FixedCtaBar est présent)

NE PAS changer :
- les couleurs / la palette / les tokens CSS
- l’architecture des fichiers
- la stack technique
- l’ordre des sections
- les patterns UI (Hero, cards, timeline, comparaison, formulaire multi-step)
- le comportement des CTA (scroll vers le formulaire)
- la typographie de base (Plus Jakarta Sans + Manrope)
- les formes (rounded-2xl cards, badges, CTA)

IMPORTANT :
Reproduire les mêmes couleurs que le projet de référence.
Ne pas inventer une nouvelle palette.
Ne pas “rebrandir” les couleurs.

Utiliser UI UX Pro Max pour harmoniser layout, contraste, responsive et densités
SANS modifier la palette.

==================================================
1. STACK TECHNIQUE (OBLIGATOIRE)
==================================================

- React 19
- Vite
- Tailwind CSS 4 (@tailwindcss/vite)
- Lucide React (icônes)
- CSS custom + variables CSS (@theme design tokens)
- oxlint (lint)
- Langue UI / contenu : français uniquement

Scripts :
- npm run dev
- npm run build
- npm run lint
- npm run preview

Pas de backend.
Pas de fausse API.
Validation formulaire côté client uniquement.

==================================================
2. ARCHITECTURE DU PROJET
==================================================

Créer cette structure :

/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── landingContent.js
    ├── utils/
    │   └── scrollToForm.js          # scroll vers #dossier-form
    ├── pages/
    │   └── HabitationLandingPage.jsx
    └── components/
        ├── AnimatedSection.jsx
        ├── CTAButton.jsx
        ├── SectionHeader.jsx
        ├── AnimatedCard.jsx
        ├── StepCard.jsx
        ├── FormOption.jsx
        ├── FormProgress.jsx
        ├── HeroVisual.jsx             # composition abstraite (pas photo dramatique)
        ├── HeroSection.jsx
        ├── ProblemsSection.jsx
        ├── EligibilitySection.jsx
        ├── SupportSection.jsx
        ├── ProcessSection.jsx
        ├── DamageSourcesSection.jsx
        ├── ComparisonSection.jsx
        ├── AudienceSection.jsx
        ├── UrgencySection.jsx
        ├── PrinciplesSection.jsx
        └── QualificationForm.jsx      # #dossier-form

Règle importante :
- Centraliser listes répétitives (problems, steps, damages, comparison, profiles, principles, options formulaire) dans landingContent.js
- Les CTA scrollent tous vers #dossier-form via scrollToForm()

==================================================
3. STRUCTURE DE LA LANDING (ORDRE FIXE)
==================================================

AUCUN Header / Navbar.
AUCUN Footer classique.

Ordre des sections dans HabitationLandingPage.jsx :

1. HeroSection                 (#accueil)
2. ProblemsSection             (#apres-incendie)
3. EligibilitySection          (#situation)
4. SupportSection              (#accompagnement)
5. ProcessSection              (#methode)
6. DamageSourcesSection        (#dommages)
7. ComparisonSection           (#comparaison)
8. AudienceSection             (#profils)
9. UrgencySection              (#urgence)
10. PrinciplesSection          (#principes)
11. QualificationForm          (#dossier-form)

Ne pas ajouter de FAQ, témoignages, tarifs, stats inventées, ni nouvelles sections marketing.

==================================================
4. DÉTAIL DES SECTIONS
==================================================

### A. HERO (#accueil)
Layout desktop : 2 colonnes (texte gauche / composition visuelle droite).
Mobile : stack vertical.

Contient :
- marque (niveau hero)
- H1 exact du brief
- sous-titre / lead
- CTA principal → #dossier-form
- HeroVisual abstrait (dossier, habitation, analyse) — pas de photo d’incendie dramatique

### B. APRÈS L’INCENDIE (#apres-incendie)
- titre + sous-titre
- grille 4 cards (numéro + icône + titre + texte)
- apparition stagger au scroll

### C. SITUATION (#situation)
- titre
- 4 conditions avec checkmarks
- CTA → #dossier-form
- pas de mini-formulaire ici

### D. ACCOMPAGNEMENT (#accompagnement)
- titre + sous-titre + texte complémentaire
- séparation visuelle conséquences / travail technique
- CTA → #dossier-form

### E. MÉTHODE (#methode)
- titre
- timeline verticale 5 étapes (01→05)
- StepCard + reveal progressif

### F. SOURCES DE DOMMAGES (#dommages)
- titre + sous-titre
- 5 catégories (feu, fumée, chaleur, extinction, installations)
- icônes Lucide (pas d’emojis obligatoires)

### G. COMPARAISON (#comparaison)
- titre
- 2 colonnes : Sans analyse approfondie / Avec Monsinistre
- CTA → #dossier-form

### H. PROFILS (#profils)
- titre
- 3 profils
- bloc « Condition essentielle » mis en évidence

### I. URGENCE (#urgence)
- fond contraste (charcoal)
- titre + sous-titre + texte
- CTA → #dossier-form
- pas de compte à rebours / fausse urgence

### J. PRINCIPES (#principes)
- titre
- grille 4 principes

### K. FORMULAIRE (#dossier-form)
Formulaire multi-step avec barre de progression.

Questions (ordre exact) :
1. Type de bien (Maison / Villa / Appartement / Autre habitation) — obligatoire
2. Logement assuré ? (Oui / Non / Je ne sais pas) — obligatoire
   → si Non : message exact « Cette prestation concerne prioritairement les dossiers assurés. »
3. Date de l’incendie — obligatoire
4. Sinistre déclaré ? (Oui / Non) — obligatoire
5. Dossier encore en cours ? (Oui / Non / Je ne sais pas) — obligatoire
6. Décision définitive reçue ? (Non / Oui / Je ne sais pas) — obligatoire
   → si Non : leadPriority = "priority" (interne, non affiché)
7. Première évaluation réalisée ? (Oui / Non)
8. Principal problème — obligatoire (6 options)
9. Documents disponibles (6 options)
10–12. Nom et prénom / Ville / Téléphone WhatsApp — obligatoires

Bouton final : « Faire examiner mon dossier »

Comportement :
- validation FR côté client (date, téléphone)
- conservation des valeurs au retour d’étape
- navigation clavier
- choice cards (FormOption)
- pas de faux backend

==================================================
5. CTA / NAVIGATION
==================================================

Tous les CTA suivants → #dossier-form (smooth scroll) :

- Faire analyser mon dossier incendie
- Oui, je souhaite faire examiner mon dossier
- Demander une prise en charge
- Renforcer mon dossier incendie
- Mon dossier est encore en cours

Pas de navbar.
Pas de footer multi-colonnes.

==================================================
6. DESIGN SYSTEM (À REPRODUIRE, PAS À RÉINVENTER)
==================================================

### Typographie
- Corps : Plus Jakarta Sans
- Titres : Manrope, font-weight 700–800

### Tokens (@theme dans index.css) — NE PAS MODIFIER
--color-ivory
--color-sand
--color-beige
--color-mist
--color-copper            /* CTA primary */
--color-copper-dark
--color-terracotta
--color-ember
--color-ember-soft
--color-charcoal
--color-slate-warm
--color-muted-warm
--color-line
--color-surface

### Formes
- cards : rounded-2xl
- boutons CTA : rounded-xl / rounded-2xl
- badges : pill

### Composants UI récurrents
- SectionHeader
- CTAButton
- AnimatedSection / .reveal-up
- AnimatedCard
- StepCard
- FormOption / FormProgress

### Comportements
- fade-up au scroll + stagger
- hover cards : légère élévation
- hover CTA : translateY léger
- prefers-reduced-motion respecté
- overflow-x: hidden
- breakpoints : 640 / 768 / 1024 / 1280

==================================================
7. COULEURS — NE PAS MODIFIER
==================================================

Conserver EXACTEMENT la palette / les tokens du projet de référence habitation.

NE PAS :
- changer --color-copper / --color-ivory / etc.
- inventer une nouvelle charte
- remplacer le cuivre / terre cuite par une autre famille

Les seuls changements autorisés concernent le contenu et les médias,
pas le style couleur.

==================================================
8. CONTENU À PERSONNALISER
==================================================

Remplacer :
- nom de marque
- titres / sous-titres / textes des sections
- options du formulaire
- labels CTA
- title HTML / meta description
- composition HeroVisual si besoin

Ne pas inventer :
- faux témoignages
- fausses stats
- tarifs / garanties / montants d’indemnisation
- FAQ
- contenu hors incendie habitation

==================================================
9. RESPONSIVE
==================================================

Tester : 320, 375, 390, 768, 1024, 1280, 1440

Vérifier :
- Hero lisible
- grilles → 1 colonne mobile
- formulaire utilisable au pouce
- boutons pleine largeur mobile lorsque pertinent
- aucun overflow horizontal
- couleurs inchangées vs référence

==================================================
10. LIVRABLE
==================================================

1. Initialiser Vite React + Tailwind dans le dossier
2. Reproduire l’architecture ci-dessus
3. Reprendre le design system et les couleurs du projet de référence
4. Brancher le contenu depuis landingContent.js
5. Adapter les textes métier
6. npm run build doit passer

À la fin, indiquer :
- fichiers créés
- confirmation que les couleurs n’ont pas été modifiées
- id du formulaire (#dossier-form)
- comment changer texte / options en 3 minutes (sans toucher aux couleurs)
```

---

## COMMENT UTILISER CE PROMPT

1. Copie le bloc `PROMPT À COPIER`.
2. Remplace la section **8** par tes textes (ou joins un brief métier).
3. Lance la génération du projet.
4. **Ne fournis pas de nouvelle palette** : les couleurs restent celles de la référence.

## CHANGEMENTS RAPIDES SUR UN PROJET EXISTANT

| Élément | Fichier |
| --- | --- |
| Textes / listes / options formulaire | `src/data/landingContent.js` |
| Ordre des sections | `src/pages/HabitationLandingPage.jsx` |
| Formulaire multi-step | `src/components/QualificationForm.jsx` |
| Visuel hero abstrait | `src/components/HeroVisual.jsx` |
| Scroll CTA | `src/utils/scrollToForm.js` |
| Favicon | `public/favicon.png` |
| Title / meta | `index.html` |

> Les couleurs (`src/index.css` tokens `@theme`) ne doivent **pas** être modifiées.

## ID FORMULAIRE

`#dossier-form`
