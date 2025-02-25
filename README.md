<h1 align="center">Calcul de l’itinéraire pour SNCF Réseau (LizMap & JavaScript)</h1>

Ce travail s'inscrit dans le cadre du développement d’une application webmapping pour SNCF Réseau (Sûreté), visant à intégrer des fonctionnalités interactives de calcul d’itinéraire dans LizMap. 

*Mots clés : SIG, Webmapping, JavaScript, API (OpenRouteService), LizMap, SNCF, OpenLayersI*

Points clés :
- Intégration du calcul d’itinéraires dans LizMap : Cette fonctionnalité permet aux utilisateurs de sélectionner une gare SNCF, de cliquer sur un point de la carte, et d’obtenir un itinéraire optimal en fonction des distances calculées via OpenRouteService API.
- Automatisation du traitement des données géospatiales : L’application interagit avec un service WFS pour récupérer les coordonnées des gares et applique une transformation de projections entre WGS84 et le système de coordonnées utilisé dans LizMap.
- Affichage dynamique et interaction utilisateur : Un widget personnalisé a été conçu avec JavaScript pour offrir une interface fluide avec recherche de gare, sélection de point sur la carte, calcul et visualisation de l’itinéraire, ainsi que l'affichage des distances et temps de trajet estimés (à pied et en voiture).

**Résumé :**

🚀 Fonctionnalités
- Sélection d'une gare SNCF et d'un point sur la carte
- Calcul de l’itinéraire optimal (distance et temps de trajet à pied/en voiture)
- Affichage dynamique de l’itinéraire avec OpenLayers
- Requête automatisée vers OpenRouteService API
- Interface interactive en JavaScript & LizMap

🔧 Technologies utilisées
- JavaScript (intégration du widget dans LizMap)
- LizMap (visualisation des données SIG)
- OpenLayers (affichage des cartes et itinéraires)
- OpenRouteService API (calcul des distances)
- WFS (Web Feature Service) (récupération des données des gares)

Cette fonctionnalité fait partie d’un travail plus large sur le développement d’une application LizMap pour SNCF Réseau (Sûreté). Elle pourra être étendue et optimisée, notamment en explorant des solutions alternatives de routage ou en ajoutant des critères supplémentaires pour les itinéraires.

📌 Dans le document PDF, vous trouverez une description détaillée de l'algorithme du code.

