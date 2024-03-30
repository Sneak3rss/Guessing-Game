👉🏻 Petit projet JavaScript 😁 !

Le but est de trouvé de trouvé un nombre entre 1 et 10 inclus.

📚 Guess Nuumber 📚

-> Il y a deux fichier dans ce projet :
  -> Le premier est un fichier HTML 🟧.
  -> Le second est un fichier JavaScript 🟨.

🚨 EXPLICATIONS 🚨

Dans le fichier HTML, on y retrouve les balises de bases d'un document HTML.

Dans le body, on y retrouve une balise script qui permet de faire le lien avec le fichier JavaScript.

Dans ce fichier, nous y retrouvons une fonction qui intégre plusieurs éléments comme par exemple :

  -> deux variables :
      - let playerGuess; 
      Cette ligne déclare une variable appelée playerGuess.
      Cette variable est destinée à stocker une supposition de nombre faite par le joueur.
      À ce stade, aucune valeur n’est assignée à playerGuess, donc sa valeur est undefined.
      - const numberToGuess = Math.ceil(Math.random() * 10);
      Cette ligne déclare une constante appelée numberToGuess et lui assigne une valeur. La valeur est un nombre entier aléatoire entre 1 et 10. Voici comment cela fonctionne :
       -> Math.random() génère un nombre aléatoire entre 0 (inclus) et 1 (exclus).
       -> Math.random() * 10 multiplie ce nombre aléatoire par 10, donc le résultat est un nombre aléatoire entre 0 (inclus) et 10 (exclus).
       -> Math.ceil() arrondit le nombre à l’entier supérieur le plus proche. Donc, si le nombre aléatoire était 0.5, il deviendrait 1, et si c’était 9.1, il deviendrait 10.

  -> prompt('Devinez le nombre entre 1 et 10 inclus.');
    Un texte qui permet d'informer le joueur ou al joueuse sur ce qu'il fait faire.

  -> while(playerGuess != numberToGuess){
        playerGuess = prompt('Essayer à nouveau de devinez le nombre entre 1 et 10 inlcus.');
    }
    Cette boucle TANT QUE, permet de comparé le nombre saisie par l'utilisateur et le nombre fournie par la fonction random qui permet de génerer un nombre aléatoire allant de 1 à 10 inclus.
    Si le nombre n'est pas trouvé, alors l'utilisateur verra s'afficher un message lui disant qu'il peut rejouer.
    
  -> alert('Félicitation! Le nombre était ' + numberToGuess + ' !');
    Si le nombre est égal au nombre fournie par la fonction random alors l'utilisateur verra un message de succès.

  -> guessNumber();
  Fait appel à la fonction, pour lancer le jeu.
              
        
