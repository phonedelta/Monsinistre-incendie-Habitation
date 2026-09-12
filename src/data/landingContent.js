export const images = {
  hero: '/images/hero.png',
  expertise: '/images/expertise.png',
  urgency: '/images/urgence.png',
}

export const problems = [
  {
    id: '01',
    title: 'Des dommages peuvent être sous-évalués',
    text: 'L’incendie ne détériore pas uniquement ce qui a brûlé. La chaleur, la fumée et parfois l’eau utilisée lors de l’extinction peuvent également provoquer des dommages',
    image: '/images/problematique/1.png',
  },
  {
    id: '02',
    title: 'Certaines pertes sont difficiles à identifier',
    text: 'Mobilier, équipements, installations électriques, murs, plafonds… certains dommages nécessitent une analyse plus approfondie',
    image: '/images/problematique/2.png',
  },
  {
    id: '03',
    title: 'L’évaluation proposée peut sembler insuffisante',
    text: 'Vous pouvez constater un écart entre les pertes que vous avez réellement subies et l’évaluation retenue dans votre dossier',
    image: '/images/problematique/3.png',
  },
  {
    id: '04',
    title: 'Vous devez prendre des décisions rapidement',
    text: 'Documents, déclarations, évaluations, échanges avec l’assurance… alors que votre priorité est déjà de gérer les conséquences de l’incendie',
    image: '/images/problematique/4.png',
  },
]

export const eligibilityItems = [
  'Votre maison ou appartement a subi un incendie',
  'Votre habitation était assurée au moment du sinistre',
  'Votre dossier est toujours en cours',
  'Et votre compagnie d’assurance n’a pas encore rendu de décision définitive',
]

export const processSteps = [
  {
    number: '01',
    title: 'Analyse du dossier',
    text: 'Nous étudions les informations disponibles, les documents et les premières évaluations liées au sinistre',
  },
  {
    number: '02',
    title: 'Expertise des dommages',
    text: 'Nous examinons les différents dommages causés par l’incendie et ses conséquences',
  },
  {
    number: '03',
    title: 'Évaluation des pertes',
    text: 'Nous évaluons les éléments concernés afin d’obtenir une vision plus complète des pertes',
  },
  {
    number: '04',
    title: 'Constitution technique du dossier',
    text: 'Les dommages et éléments pertinents sont documentés et structurés pour renforcer le dossier',
  },
  {
    number: '05',
    title: 'Accompagnement avec l’assurance',
    text: 'Monsinistre vous accompagne dans le suivi technique du dossier et les échanges liés à l’évaluation des dommages',
  },
]

export const damageSources = [
  {
    id: 'feu',
    title: 'Le feu',
    text: 'Mobilier, équipements, revêtements et éléments directement touchés',
  },
  {
    id: 'fumee',
    title: 'La fumée',
    text: 'Elle peut atteindre des pièces et des biens qui n’ont jamais été directement exposés aux flammes',
  },
  {
    id: 'chaleur',
    title: 'La chaleur',
    text: 'Certains équipements et installations peuvent être altérés sans présenter immédiatement de traces évidentes',
  },
  {
    id: 'extinction',
    title: 'L’extinction',
    text: 'L’eau utilisée pour maîtriser l’incendie peut également provoquer des dommages supplémentaires',
  },
  {
    id: 'installations',
    title: 'Les installations',
    text: 'Les réseaux et équipements électriques peuvent nécessiter une analyse spécifique après le sinistre',
  },
]

export const comparisonWithout = [
  'Dommages visibles principalement pris en compte',
  'Pertes difficiles à identifier',
  'Doutes sur l’évaluation',
  'Assuré seul face à un dossier technique',
]

export const comparisonWith = [
  'Analyse des différentes conséquences du sinistre',
  'Évaluation technique des dommages',
  'Pertes documentées',
  'Dossier structuré',
  'Accompagnement dans le processus d’indemnisation',
]

export const audienceProfiles = [
  {
    title: 'Propriétaires',
    text: 'Votre maison ou villa assurée a subi un incendie',
    image: '/images/profil-proprietaires.png',
  },
  {
    title: 'Copropriétaires',
    text: 'Votre appartement ou une partie de votre logement a été touché',
    image: '/images/profil-coproprietaires.png',
  },
  {
    title: 'Occupants d’un logement assuré',
    text: 'Vous disposez d’un dossier d’assurance lié à un incendie dans votre habitation',
    image: '/images/profil-occupants.png',
  },
]

export const principles = [
  {
    title: 'Une approche technique',
    text: 'Nous ne nous limitons pas à ce qui est immédiatement visible',
  },
  {
    title: 'Une évaluation structurée',
    text: 'Les dommages sont analysés et documentés de manière méthodique',
  },
  {
    title: 'Un accompagnement du dossier',
    text: 'Vous n’avez pas à gérer seul les aspects techniques liés au sinistre',
  },
  {
    title: 'Une mission claire',
    text: 'Faire en sorte que les dommages réellement subis soient correctement identifiés, évalués et défendus dans votre dossier',
  },
]

export const propertyOptions = ['Maison', 'Villa', 'Appartement', 'Autre habitation']
export const yesNoUnknown = ['Oui', 'Non', 'Je ne sais pas']
export const yesNo = ['Oui', 'Non']
export const finalDecisionOptions = ['Non', 'Oui', 'Je ne sais pas']
export const problemOptions = [
  'Je ne sais pas si tous les dommages ont été évalués',
  'L’évaluation me paraît insuffisante',
  'Je ne comprends pas la gestion de mon dossier',
  'Mon dossier prend du retard',
  'J’ai un désaccord avec l’assurance',
  'Autre',
]
export const documentsOptions = [
  'Photos / vidéos',
  'Rapport / expertise',
  'Proposition d’indemnisation',
  'Échanges avec l’assurance',
  'Plusieurs de ces documents',
  'Aucun pour le moment',
]
