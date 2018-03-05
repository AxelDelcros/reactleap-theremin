# LeapMotion Theremin with ReactJs

*Pour explorer le potentiel hallucinant du LeapMotion à travers le monde du web, j'ai développé une web application de thérémine avec un framework que j'utilise habituellement : ReactJs.*

## How to

```sh
	npm install
	npm start
```

## Introduction
Il existe très peu de projets utilisants leapJs, et seulement un [petit projet](https://github.com/pawelgalazka/react-leap) pour wrapper une app avec LeapJs dans un composant ReactJs.
Le système de LeapJs (et tous [les SDK pour leapMotion](https://developer.leapmotion.com/documentation/index.html?proglang=current) en général) fonctionnant sur une loop extrêmement rapide mettant à jour les informations récupérées par le device LeapMotion.
Avec ces considérations, J'avais d'avance compris que les changements de state très dynamiques (update ~1000 fois par seconde) allaient être compromis:
Les changements de state étant asynchrones et le DOM virtuel ayant une limite de la fréquence de modification des states pour prévenir les boucles infinies empêchent d'utiliser ReactJs de façon "standard".


## [LeapJs](https://github.com/leapmotion/leapjs) :
Pour faire simple, la librairie leapJS modifie un objet contenant toutes les variables détectées par le Leap Motion à chaque tour de loop.

Cet objet met à jour 1 tableau de "Hands", qui liste les mains détectées,
puis dans chacune des mains de tableau on retrouve les 5 doigts de celles-ci.

Pour chacun de ces objet, on retrouve sa position sous forme de vecteur, ainsi que des infos complémentaires (ex : sa direction, est-ce que le doigt est tendu ou non, les différents os de chaque doigt, leurs distances entre-eux...)

## [ToneJs](https://tonejs.github.io/)
Librairie JS utilisée dans un wrapper react, [react-tone](https://www.npmjs.com/package/react-tone), qui permet de produire un son, et le moduler à sa guise.
J'ai surtout souhaiter faire simple en faisant seulement varier la fréquence de la tonalité et le volume de ce son.

## Résultat
Pour cette app, j'ai essentiellement utilisé :

#### Pour l'affichage des "mains" à l'écran :
 * les distances des paumes de main
 * leur direction
 * la fermeture des doigts pour afficher ou non ceux-ci

#### Pour la synchronisation du son :
 * La distance des paumes de main
 * Le type de main (main droite ou gauche ?)
 * La fermeture de tous les doigts de la main droite pour stopper le son (comme un maestro)