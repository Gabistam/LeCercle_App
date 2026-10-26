# Suivi des visiteurs : réglages à faire dans Google Tag Manager et Google Analytics

Le site charge Google Tag Manager (conteneur GTM-5JJCJ7MZ) pour tous les visiteurs, en mode consentement Google v2 (avancé) : tout est refusé par défaut ; « Accepter » active les cookies Google ; sans accord, Google ne reçoit que des signaux anonymes sans cookie, qu'il utilise pour modéliser les visites et conversions.

## Ce que le site envoie (dataLayer)

| Événement | Quand | Paramètres |
| --- | --- | --- |
| `clic_reserver` | clic sur un bouton Réserver (vers Fresha) | `emplacement`, `page`, `source`, `medium`, `campagne`, `page_arrivee` |
| `clic_appeler` | clic sur un numéro de téléphone | idem |
| `clic_itineraire` | clic sur Itinéraire / Ouvrir dans Maps | idem |
| `clic_avis` | clic vers les avis Google | idem |
| `clic_instagram`, `clic_tiktok` | clic vers les réseaux | idem |
| `formulaire_envoye` | envoi réussi d'un formulaire | `formulaire` (attente, invest, club, contact), `page` |

Valeurs de `emplacement` : `entete`, `barre-mobile`, `accueil-haut`, `accueil-bas`, `homme-haut`, `homme-bas`, `salon-saint-denis`, `salon-infos`, `salon-reserver`, `contact`, `pied-de-page`, `accueil-avis`.

`source` / `medium` / `campagne` : provenance de la visite (paramètres UTM, `gclid` pour Google Ads, `fbclid` pour Meta, sinon site référent ou `direct`).

Les liens Fresha portent aussi `utm_source=lecerclestudio.com&utm_medium=site&utm_campaign=reservation&utm_content=<emplacement>`.

## Réglages GTM

Déjà faits le 26 octobre 2026 dans l'espace de travail du conteneur (import de `docs/gtm-le-cercle.json`), mesure GA4 `G-CPJZYG4PY4`. Il reste à cliquer sur « Envoyer » (publier) au moment de la mise en ligne du nouveau site, pas avant : l'ancien site charge GTM sans bandeau cookies.

Contenu :

1. Balise « Google Tag » avec l'ID de mesure GA4, déclencheur « Initialization - All Pages ».
2. Variables de couche de données : `emplacement`, `page`, `source`, `medium`, `campagne`, `page_arrivee`, `formulaire`.
3. Déclencheur « Événement personnalisé », nom `clic_.*` (expression régulière) + un déclencheur `formulaire_envoye`.
4. Balise « GA4 Event » : nom d'événement `{{Event}}`, paramètres = les variables ci-dessus, déclenchée par ces deux déclencheurs.
5. Publier le conteneur.

## Réglages GA4

1. Une fois les premiers clics reçus, Admin → Événements : marquer `clic_reserver`, `clic_appeler` et `formulaire_envoye` comme événements clés.
2. Admin → Flux de données → Web → Configurer les paramètres du tag → Configurer vos domaines : ajouter `lecerclestudio.com` et `fresha.com` (suivi inter-domaines vers la réservation).
3. Admin → Définitions personnalisées : créer les dimensions `emplacement` et `page_arrivee`.
4. Lier GA4 à Google Ads (Admin → Associations de produits) pour importer les événements clés.

## Réservations terminées

La réservation se termine sur Fresha. Pour la compter dans GA4, renseigner le même ID de mesure GA4 dans Fresha (paramètres de réservation en ligne, suivi / intégrations), comme déjà fait pour Google Ads.
