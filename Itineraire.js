lizMap.events.on({
    'uicreated': function () {
        console.log('Interface LizMap créée.');

        // Création du widget  
        // Création de l'élément HTML pour le conteneur du widget utilisateur  
        const container = document.createElement('div'); 
        
        // Mise en forme du widget  
        container.style.position = 'absolute';
        container.style.top = '100px';
        container.style.left = '50%';
        container.style.transform = 'translateX(-50%)';
        container.style.padding = '10px';
        container.style.backgroundColor = 'white';
        container.style.border = '1px solid #ccc';
        container.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
        container.style.zIndex = '1000';
        container.style.cursor = 'move';

        // Ajout de la possibilité de déplacer la fenêtre du widget sur l'écran  
        let isDragging = false;
        let offsetX = 0, offsetY = 0;

        // Ajout du gestionnaire d'événements lors de l’appui sur le conteneur, composé de trois parties :
        // appui sur le conteneur - mousedown, déplacement - mousemove, relâchement de la souris - mouseup
        container.addEventListener('mousedown', function (event) {
            isDragging = true;
            offsetX = event.clientX - container.offsetLeft;
            offsetY = event.clientY - container.offsetTop;
            container.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', function (event) {
            if (isDragging) {
                container.style.left = `${event.clientX - offsetX}px`;
                container.style.top = `${event.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', function () {
            isDragging = false;
            container.style.cursor = 'move';
        });


        // Étape 1 : Entrez une gare
        // Création du conteneur pour la section de saisie de la gare  
        const stationSection = document.createElement('div');

        // Création d'un label pour indiquer à l'utilisateur d'entrer le nom de la gare  
        const stationLabel = document.createElement('label');
        stationLabel.textContent = '1. Entrez le nom de la gare :';
        stationLabel.style.display = 'block';
        stationLabel.style.marginBottom = '5px';

        // Création du conteneur pour regrouper le champ de saisie et le bouton de recherche  
        const stationInputContainer = document.createElement('div');
        stationInputContainer.style.display = 'flex';
        stationInputContainer.style.alignItems = 'center';
        stationInputContainer.style.marginBottom = '15px';

        // Création du champ de saisie pour entrer le nom de la gare  
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.style.flex = '1';
        inputField.style.padding = '5px';
        inputField.style.border = '1px solid #ccc';
        inputField.style.marginRight = '5px';

        // Création du bouton de recherche  
        const searchButton = document.createElement('button');
        searchButton.textContent = 'Rechercher';
        searchButton.style.padding = '5px 10px';
        searchButton.style.backgroundColor = '#007bff';
        searchButton.style.color = 'white';
        searchButton.style.border = 'none';
        searchButton.style.cursor = 'pointer';

        // Ajout du champ de saisie et du bouton dans le conteneur  
        stationInputContainer.appendChild(inputField);
        stationInputContainer.appendChild(searchButton);

        // Ajout du label et du conteneur dans la section de la gare  
        stationSection.appendChild(stationLabel);
        stationSection.appendChild(stationInputContainer);

        // Étape 2 : Cliquez sur la carte
        // Création du conteneur pour la section de sélection sur la carte  
        const mapSection = document.createElement('div');

        // Création du label pour indiquer à l'utilisateur de cliquer sur la carte  
        const mapLabel = document.createElement('label');
        mapLabel.textContent = '2. Cliquez sur la carte :';
        mapLabel.style.display = 'block';
        mapLabel.style.marginBottom = '5px';

        // Création d’un élément pour afficher les coordonnées du point sélectionné  
        const clickInfo = document.createElement('div');
        clickInfo.style.marginBottom = '15px';
        clickInfo.style.padding = '5px';
        clickInfo.style.backgroundColor = '#f9f9f9';
        clickInfo.style.border = '1px solid #ddd';
        clickInfo.textContent = 'Coordonnées :';

        // Ajout du label et du conteneur de coordonnées dans la section  
        mapSection.appendChild(mapLabel);
        mapSection.appendChild(clickInfo);

        // Étape 3 : Calculer l’itinéraire
        // Création du conteneur pour la section de calcul d'itinéraire  
        const routeSection = document.createElement('div');

        // Création du bouton pour déclencher le calcul d’itinéraire  
        const calculateButton = document.createElement('button');
        calculateButton.textContent = '3. Calculer l’itinéraire';
        calculateButton.style.padding = '5px 10px';
        calculateButton.style.backgroundColor = '#28a745';
        calculateButton.style.color = 'white';
        calculateButton.style.border = 'none';
        calculateButton.style.cursor = 'pointer';

        // Ajout du bouton dans la section de calcul d'itinéraire  
        routeSection.appendChild(calculateButton);

        // Étape 4 : Informations sur l’itinéraire
        // Création du conteneur pour afficher les informations du trajet  
        const infoSection = document.createElement('div');

        // Création du label pour indiquer que les informations sur l’itinéraire seront affichées ici  
        const infoLabel = document.createElement('label');
        infoLabel.textContent = '4. Informations sur l’itinéraire :';
        infoLabel.style.display = 'block';
        infoLabel.style.marginBottom = '5px';

        // Création des éléments pour afficher les détails du trajet  
        const distanceInfo = document.createElement('div');
        const walkTimeInfo = document.createElement('div');
        const driveTimeInfo = document.createElement('div');

        // Définition du texte par défaut affiché pour chaque élément  
        distanceInfo.textContent = 'Distance : — km';
        walkTimeInfo.textContent = 'Temps à pied : —';
        driveTimeInfo.textContent = 'Temps en voiture : —';

        // Ajout du label et des informations sur l’itinéraire dans la section  
        infoSection.appendChild(infoLabel);
        infoSection.appendChild(distanceInfo);
        infoSection.appendChild(walkTimeInfo);
        infoSection.appendChild(driveTimeInfo);

        // Étape 5 : Réinitialiser
        // Création du conteneur pour la section de réinitialisation  
        const resetSection = document.createElement('div');

        // Création du bouton pour réinitialiser les champs et l'affichage  
        const resetButton = document.createElement('button');
        resetButton.textContent = '5. Réinitialiser';
        resetButton.style.padding = '5px 10px';
        resetButton.style.backgroundColor = '#dc3545';
        resetButton.style.color = 'white';
        resetButton.style.border = 'none';
        resetButton.style.cursor = 'pointer';

        // Ajout du bouton de réinitialisation dans la section  
        resetSection.appendChild(resetButton);

        // Ajouter toutes les sections au conteneur
        container.appendChild(stationSection);
        container.appendChild(mapSection);
        container.appendChild(routeSection);
        container.appendChild(infoSection);
        container.appendChild(resetSection);

        document.body.appendChild(container);

        // Lancer la logique des boutons
        // Définition de l'URL du service WFS pour récupérer les données des gares  
        const wfsUrl = 'https://sigsurete.prod.st.sncf.fr/index.php/lizmap/service/?repository=test1&project=TestSNCF&SERVICE=WFS&TYPENAME=gares-de-voyageurs&REQUEST=GetFeature&VERSION=1.1.0&outputFormat=application/json';

        // Déclaration des variables pour stocker les données utilisateur  
        let selectedStation = null; // Stocke les coordonnées de la gare sélectionnée
        let clickedPoint = null; // Stocke les coordonnées du point cliqué sur la carte  
        let routeLayer = null; // Stocke l'itinéraire  

        // Gestion du bouton de recherche de gare  
        searchButton.addEventListener('click', () => {
            const searchValue = inputField.value.trim().toLowerCase();
            if (!searchValue) {
                alert('Veuillez entrer le nom de la gare.');
                return;
            }

            // Envoi de la requête au serveur WFS pour récupérer la liste des gares  
            fetch(wfsUrl)
                .then(response => response.json())
                .then(data => {
                    const station = data.features.find(feature =>
                        feature.properties.Nom.toLowerCase() === searchValue
                    );

                    if (station) {
                        selectedStation = station.geometry.coordinates;
                        const lonLat = new OpenLayers.LonLat(selectedStation[0], selectedStation[1])
                            .transform('EPSG:4326', lizMap.map.getProjectionObject());
                        lizMap.map.setCenter(lonLat, 14);
                    } else {
                        alert('Gare introuvable.');
                    }
                })
                .catch(error => console.error('Erreur lors de la requête WFS :', error));
        });

        // Gestion du clic sur la carte pour enregistrer un point  
        lizMap.map.events.register('click', lizMap.map, function (event) {
            const lonLat = lizMap.map.getLonLatFromPixel(event.xy);
            const transformed = lonLat.clone().transform(
                lizMap.map.getProjectionObject(),
                'EPSG:4326'
            );
            clickedPoint = [transformed.lon, transformed.lat];
            clickInfo.textContent = `Coordonnées : Longitude ${transformed.lon.toFixed(5)}, Latitude ${transformed.lat.toFixed(5)}`;
        });

        // Gestion du calcul de l’itinéraire  
        calculateButton.addEventListener('click', () => {
            if (!selectedStation || !clickedPoint) {
                alert('Veuillez sélectionner une gare et cliquer sur la carte.');
                return;
            }

            // Définition de l'URL de l'API de calcul d'itinéraire  
            const routeUrl = 'https://api.openrouteservice.org/v2/directions/driving-car';
            const body = {
                coordinates: [selectedStation, clickedPoint],
                format: 'geojson'
            };

            // Envoi de la requête POST à l'API de routage  
            fetch(routeUrl, {
                method: 'POST',
                headers: {
                    'Authorization': '5b3ce3597851110001cf6248b9f4e67de31d4c92bb98785bff0b56e6',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erreur de routage : ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (!data.routes || data.routes.length === 0) {
                        throw new Error('Aucun itinéraire trouvé dans la réponse de l’API.');
                    }

                    // Récupération des données du premier itinéraire trouvé  
                    const route = data.routes[0];
                    const distanceKm = route.summary.distance / 1000; // Distance en kilomètres
                    const walkTime = (distanceKm / 5); // Temps à pied, 5 km/h
                    const driveTime = (distanceKm / 60); // Temps en voiture, 60 km/h

                    // Mise à jour de l'affichage des informations sur l'itinéraire  
                    distanceInfo.textContent = `Distance : ${distanceKm.toFixed(2)} km`;
                    walkTimeInfo.textContent = `Temps à pied : ${formatTime(walkTime)}`;
                    driveTimeInfo.textContent = `Temps en voiture : ${formatTime(driveTime)}`;

                    // Décodage de la polyligne renvoyée par l'API  
                    const decodedCoordinates = decodePolyline(route.geometry);
                    const coordinates = decodedCoordinates.map(coord => {
                        return new OpenLayers.Geometry.Point(coord[0], coord[1]).transform(
                            'EPSG:4326',
                            lizMap.map.getProjectionObject()
                        );
                    });

                    if (routeLayer) {
                        lizMap.map.removeLayer(routeLayer);
                    }

                    // Création d’un nouveau calque pour afficher l’itinéraire  
                    routeLayer = new OpenLayers.Layer.Vector('Itinéraire');
                    const line = new OpenLayers.Geometry.LineString(coordinates);
                    const feature = new OpenLayers.Feature.Vector(line, null, {
                        strokeColor: '#ff0000',
                        strokeWidth: 3,
                        strokeOpacity: 0.8
                    });

                    routeLayer.addFeatures([feature]);
                    lizMap.map.addLayer(routeLayer);
                })
                .catch(error => {
                    console.error('Erreur lors de la requête d’itinéraire :', error);
                    alert('Impossible de calculer l’itinéraire. Consultez la console pour plus de détails.');
                });
        });

        // Gestion du bouton de réinitialisation  
        resetButton.addEventListener('click', () => {
            selectedStation = null;
            clickedPoint = null;

            // Réinitialisation des champs et affichages  
            inputField.value = '';
            clickInfo.textContent = 'Coordonnées :';
            distanceInfo.textContent = 'Distance : — km';
            walkTimeInfo.textContent = 'Temps à pied : —';
            driveTimeInfo.textContent = 'Temps en voiture : —';

            // Suppression de l'itinéraire affiché sur la carte  
            if (routeLayer) {
                lizMap.map.removeLayer(routeLayer);
                routeLayer = null;
            }
        });

        // Fonction pour décoder une polyligne encodée  
        function decodePolyline(encoded) {
            let coordinates = [];
            let index = 0;
            let len = encoded.length;
            let lat = 0, lng = 0;

            while (index < len) {
                let b, shift = 0, result = 0;
                do {
                    b = encoded.charCodeAt(index++) - 63;
                    result |= (b & 0x1f) << shift;
                    shift += 5;
                } while (b >= 0x20);
                let dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
                lat += dlat;

                shift = 0;
                result = 0;
                do {
                    b = encoded.charCodeAt(index++) - 63;
                    result |= (b & 0x1f) << shift;
                    shift += 5;
                } while (b >= 0x20);
                let dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
                lng += dlng;

                coordinates.push([lng * 1e-5, lat * 1e-5]);
            }

            return coordinates;
        }

        // Fonction pour formater le temps en jours, heures et minutes  
        function formatTime(hours) {
            const days = Math.floor(hours / 24);
            const remainingHours = Math.floor(hours % 24);
            const minutes = Math.round((hours % 1) * 60);

            let timeString = '';
            if (days > 0) timeString += `${days} j `;
            if (remainingHours > 0) timeString += `${remainingHours} h `;
            if (minutes > 0) timeString += `${minutes} min`;

            return timeString.trim() || '0 min';
        }
    }
});
