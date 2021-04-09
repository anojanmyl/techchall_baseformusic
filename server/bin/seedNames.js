require("dotenv").config();
require("../config/dbConnection");

const NameModel = require("../models/Name");

const names = [
  {
    FirstName: "Aaron",
    Gender: "male",
  },
  {
    FirstName: "Aaron",
    Gender: "male",
  },
  {
    FirstName: "Maxence",
    Gender: "male",
  },
  {
    FirstName: "Anthony",
    Gender: "male",
  },
  {
    FirstName: "Davy",
    Gender: "male",
  },
  {
    FirstName: "Amandine",
    Gender: "female",
  },
  {
    FirstName: "Lamia",
    Gender: "female",
  },
  {
    FirstName: "Tom",
    Gender: "male",
  },
  {
    FirstName: "Cédric",
    Gender: "male",
  },
  {
    FirstName: "Noémie",
    Gender: "female",
  },
  {
    FirstName: "Yasmine",
    Gender: "female",
  },
  {
    FirstName: "Solene",
    Gender: "female",
  },
  {
    FirstName: "Baptiste",
    Gender: "male",
  },
  {
    FirstName: "Clémence",
    Gender: "female",
  },
  {
    FirstName: "Amandine",
    Gender: "female",
  },
  {
    FirstName: "Léa",
    Gender: "female",
  },
  {
    FirstName: "Anaés",
    Gender: "female",
  },
  {
    FirstName: "Dylan",
    Gender: "male",
  },
  {
    FirstName: "Noé",
    Gender: "male",
  },
  {
    FirstName: "Noé",
    Gender: "male",
  },
  {
    FirstName: "Lutécia",
    Gender: "female",
  },
  {
    FirstName: "Yasmine",
    Gender: "female",
  },
  {
    FirstName: "Lana",
    Gender: "female",
  },
  {
    FirstName: "Clotilde",
    Gender: "female",
  },
  {
    FirstName: "Victor",
    Gender: "male",
  },
  {
    FirstName: "Nolan",
    Gender: "male",
  },
  {
    FirstName: "Clotilde",
    Gender: "female",
  },
  {
    FirstName: "Romane",
    Gender: "female",
  },
  {
    FirstName: "Yéna",
    Gender: "female",
  },
  {
    FirstName: "Yanis",
    Gender: "male",
  },
  {
    FirstName: "Colin",
    Gender: "male",
  },
  {
    FirstName: "Jade",
    Gender: "female",
  },
  {
    FirstName: "Mathis",
    Gender: "male",
  },
  {
    FirstName: "Anna",
    Gender: "female",
  },
  {
    FirstName: "élisa",
    Gender: "female",
  },
  {
    FirstName: "Tristan",
    Gender: "male",
  },
  {
    FirstName: "Rémi",
    Gender: "male",
  },
  {
    FirstName: "Léa",
    Gender: "female",
  },
  {
    FirstName: "Dorian",
    Gender: "male",
  },
  {
    FirstName: "Maélle",
    Gender: "female",
  },
  {
    FirstName: "Alicia",
    Gender: "female",
  },
  {
    FirstName: "Marwane",
    Gender: "male",
  },
  {
    FirstName: "Lisa",
    Gender: "female",
  },
  {
    FirstName: "Maryam",
    Gender: "female",
  },
  {
    FirstName: "Maéwenn",
    Gender: "female",
  },
  {
    FirstName: "Nolan",
    Gender: "male",
  },
  {
    FirstName: "Lutécia",
    Gender: "female",
  },
  {
    FirstName: "Nicolas",
    Gender: "male",
  },
  {
    FirstName: "Zoé",
    Gender: "female",
  },
  {
    FirstName: "Guillemette",
    Gender: "female",
  },
  {
    FirstName: "Robin",
    Gender: "male",
  },
  {
    FirstName: "Dimitri",
    Gender: "male",
  },
  {
    FirstName: "Ethan",
    Gender: "male",
  },
  {
    FirstName: "Marie",
    Gender: "female",
  },
  {
    FirstName: "Yasmine",
    Gender: "female",
  },
  {
    FirstName: "Sara",
    Gender: "female",
  },
  {
    FirstName: "Charlotte",
    Gender: "female",
  },
  {
    FirstName: "Timéo",
    Gender: "male",
  },
  {
    FirstName: "élouan",
    Gender: "male",
  },
  {
    FirstName: "Julie",
    Gender: "female",
  },
  {
    FirstName: "Antoine",
    Gender: "male",
  },
  {
    FirstName: "Malik",
    Gender: "male",
  },
  {
    FirstName: "Maéwenn",
    Gender: "female",
  },
  {
    FirstName: "Ethan",
    Gender: "male",
  },
  {
    FirstName: "Mathieu",
    Gender: "male",
  },
  {
    FirstName: "Dylan",
    Gender: "male",
  },
  {
    FirstName: "Anaés",
    Gender: "female",
  },
  {
    FirstName: "Sara",
    Gender: "female",
  },
  {
    FirstName: "Gaspard",
    Gender: "male",
  },
  {
    FirstName: "Lola",
    Gender: "female",
  },
  {
    FirstName: "Mehdi",
    Gender: "male",
  },
  {
    FirstName: "Maélé",
    Gender: "female",
  },
  {
    FirstName: "Loevan",
    Gender: "male",
  },
  {
    FirstName: "Renaud",
    Gender: "male",
  },
  {
    FirstName: "Katell",
    Gender: "female",
  },
  {
    FirstName: "Kilian",
    Gender: "male",
  },
  {
    FirstName: "Justine",
    Gender: "female",
  },
  {
    FirstName: "Jordan",
    Gender: "male",
  },
  {
    FirstName: "Inés",
    Gender: "female",
  },
  {
    FirstName: "élise",
    Gender: "female",
  },
  {
    FirstName: "Agathe",
    Gender: "female",
  },
  {
    FirstName: "Maelys",
    Gender: "female",
  },
  {
    FirstName: "Lucie",
    Gender: "female",
  },
  {
    FirstName: "Julia",
    Gender: "female",
  },
  {
    FirstName: "Titouan",
    Gender: "male",
  },
  {
    FirstName: "Charlotte",
    Gender: "female",
  },
  {
    FirstName: "Antoine",
    Gender: "male",
  },
  {
    FirstName: "Eva",
    Gender: "female",
  },
  {
    FirstName: "Jasmine",
    Gender: "female",
  },
  {
    FirstName: "Laura",
    Gender: "female",
  },
  {
    FirstName: "Aaron",
    Gender: "male",
  },
  {
    FirstName: "Robin",
    Gender: "male",
  },
  {
    FirstName: "Killian",
    Gender: "male",
  },
  {
    FirstName: "Lola",
    Gender: "female",
  },
  {
    FirstName: "Lina",
    Gender: "female",
  },
  {
    FirstName: "Syrine",
    Gender: "female",
  },
  {
    FirstName: "Maxime",
    Gender: "male",
  },
  {
    FirstName: "Lilou",
    Gender: "female",
  },
  {
    FirstName: "Guillemette",
    Gender: "female",
  },
  {
    FirstName: "Enzo",
    Gender: "male",
  },
  {
    FirstName: "Enzo",
    Gender: "male",
  },
  {
    FirstName: "Mathéo",
    Gender: "male",
  },
  {
    FirstName: "Edwige",
    Gender: "female",
  },
  {
    FirstName: "Marine",
    Gender: "female",
  },
  {
    FirstName: "Antoine",
    Gender: "male",
  },
  {
    FirstName: "Félix",
    Gender: "male",
  },
  {
    FirstName: "Guillaume",
    Gender: "male",
  },
  {
    FirstName: "Clotilde",
    Gender: "female",
  },
  {
    FirstName: "Mathéo",
    Gender: "male",
  },
  {
    FirstName: "Elsa",
    Gender: "female",
  },
  {
    FirstName: "Kevin",
    Gender: "male",
  },
  {
    FirstName: "Kimberley",
    Gender: "female",
  },
  {
    FirstName: "Margot",
    Gender: "female",
  },
  {
    FirstName: "Corentin",
    Gender: "male",
  },
  {
    FirstName: "Marine",
    Gender: "female",
  },
  {
    FirstName: "Victor",
    Gender: "male",
  },
  {
    FirstName: "Océane",
    Gender: "female",
  },
  {
    FirstName: "Baptiste",
    Gender: "male",
  },
  {
    FirstName: "Lilian",
    Gender: "female",
  },
  {
    FirstName: "Guillaume",
    Gender: "male",
  },
  {
    FirstName: "Paul",
    Gender: "male",
  },
  {
    FirstName: "Martin",
    Gender: "male",
  },
  {
    FirstName: "Timéo",
    Gender: "male",
  },
  {
    FirstName: "Mohamed",
    Gender: "male",
  },
  {
    FirstName: "Gaspard",
    Gender: "male",
  },
  {
    FirstName: "Macéo",
    Gender: "male",
  },
  {
    FirstName: "Yéna",
    Gender: "female",
  },
  {
    FirstName: "Lina",
    Gender: "female",
  },
  {
    FirstName: "Amandine",
    Gender: "female",
  },
  {
    FirstName: "Anaélle",
    Gender: "female",
  },
  {
    FirstName: "Yanis",
    Gender: "male",
  },
  {
    FirstName: "Franéoise",
    Gender: "female",
  },
  {
    FirstName: "Adrian",
    Gender: "male",
  },
  {
    FirstName: "Antoine",
    Gender: "male",
  },
  {
    FirstName: "Océane",
    Gender: "female",
  },
  {
    FirstName: "Rose",
    Gender: "female",
  },
  {
    FirstName: "Thomas",
    Gender: "male",
  },
  {
    FirstName: "Léa",
    Gender: "female",
  },
  {
    FirstName: "Mehdi",
    Gender: "male",
  },
  {
    FirstName: "Samuel",
    Gender: "male",
  },
  {
    FirstName: "Jeanne",
    Gender: "female",
  },
  {
    FirstName: "élise",
    Gender: "female",
  },
  {
    FirstName: "Charlotte",
    Gender: "female",
  },
  {
    FirstName: "Charlotte",
    Gender: "female",
  },
  {
    FirstName: "Franéoise",
    Gender: "female",
  },
  {
    FirstName: "Davy",
    Gender: "male",
  },
  {
    FirstName: "Titouan",
    Gender: "male",
  },
  {
    FirstName: "Gabriel",
    Gender: "male",
  },
  {
    FirstName: "Dorian",
    Gender: "male",
  },
  {
    FirstName: "Bastien",
    Gender: "male",
  },
  {
    FirstName: "Marwane",
    Gender: "male",
  },
  {
    FirstName: "Erwan",
    Gender: "male",
  },
  {
    FirstName: "Léonard",
    Gender: "male",
  },
  {
    FirstName: "Titouan",
    Gender: "male",
  },
  {
    FirstName: "Lamia",
    Gender: "female",
  },
  {
    FirstName: "Paul",
    Gender: "male",
  },
  {
    FirstName: "Ethan",
    Gender: "male",
  },
  {
    FirstName: "Anna",
    Gender: "female",
  },
  {
    FirstName: "Romain",
    Gender: "male",
  },
  {
    FirstName: "Tristan",
    Gender: "male",
  },
  {
    FirstName: "Valentine",
    Gender: "female",
  },
  {
    FirstName: "Dimitri",
    Gender: "male",
  },
  {
    FirstName: "Dylan",
    Gender: "male",
  },
  {
    FirstName: "Jeanne",
    Gender: "female",
  },
  {
    FirstName: "Franéoise",
    Gender: "female",
  },
  {
    FirstName: "Robin",
    Gender: "male",
  },
  {
    FirstName: "Inés",
    Gender: "female",
  },
  {
    FirstName: "Julia",
    Gender: "female",
  },
  {
    FirstName: "Océane",
    Gender: "female",
  },
  {
    FirstName: "Benjamin",
    Gender: "male",
  },
  {
    FirstName: "Jasmine",
    Gender: "female",
  },
  {
    FirstName: "Lilian",
    Gender: "female",
  },
  {
    FirstName: "Léa",
    Gender: "female",
  },
  {
    FirstName: "Jasmine",
    Gender: "female",
  },
  {
    FirstName: "Julien",
    Gender: "male",
  },
  {
    FirstName: "Rémi",
    Gender: "male",
  },
  {
    FirstName: "Clémence",
    Gender: "female",
  },
  {
    FirstName: "Timothée",
    Gender: "male",
  },
  {
    FirstName: "Dimitri",
    Gender: "male",
  },
  {
    FirstName: "Lily",
    Gender: "female",
  },
  {
    FirstName: "Cloé",
    Gender: "female",
  },
  {
    FirstName: "Esteban",
    Gender: "male",
  },
  {
    FirstName: "Kilian",
    Gender: "male",
  },
  {
    FirstName: "Bienvenue",
    Gender: "female",
  },
  {
    FirstName: "Justine",
    Gender: "female",
  },
  {
    FirstName: "Esteban",
    Gender: "male",
  },
  {
    FirstName: "Noé",
    Gender: "male",
  },
  {
    FirstName: "Lisa",
    Gender: "female",
  },
  {
    FirstName: "Renaud",
    Gender: "male",
  },
  {
    FirstName: "Catherine",
    Gender: "female",
  },
  {
    FirstName: "Simon",
    Gender: "male",
  },
  {
    FirstName: "Corentin",
    Gender: "male",
  },
  {
    FirstName: "Tom",
    Gender: "male",
  },
  {
    FirstName: "Gabriel",
    Gender: "male",
  },
  {
    FirstName: "Lucas",
    Gender: "male",
  },
  {
    FirstName: "Anaélle",
    Gender: "female",
  },
  {
    FirstName: "Marie",
    Gender: "female",
  },
  {
    FirstName: "Amandine",
    Gender: "female",
  },
  {
    FirstName: "Timothée",
    Gender: "male",
  },
  {
    FirstName: "Lucas",
    Gender: "male",
  },
  {
    FirstName: "Charlotte",
    Gender: "female",
  },
  {
    FirstName: "Ambre",
    Gender: "female",
  },
  {
    FirstName: "Martin",
    Gender: "male",
  },
  {
    FirstName: "Tatiana",
    Gender: "female",
  },
  {
    FirstName: "Maryam",
    Gender: "female",
  },
  {
    FirstName: "Lilou",
    Gender: "female",
  },
  {
    FirstName: "Bastien",
    Gender: "male",
  },
  {
    FirstName: "Guillemette",
    Gender: "female",
  },
  {
    FirstName: "Léane",
    Gender: "female",
  },
  {
    FirstName: "Erwan",
    Gender: "male",
  },
  {
    FirstName: "Lola",
    Gender: "female",
  },
  {
    FirstName: "Alexandre",
    Gender: "male",
  },
  {
    FirstName: "Simon",
    Gender: "male",
  },
  {
    FirstName: "Macéo",
    Gender: "male",
  },
  {
    FirstName: "Yohan",
    Gender: "male",
  },
  {
    FirstName: "Juliette",
    Gender: "female",
  },
  {
    FirstName: "émilie",
    Gender: "female",
  },
  {
    FirstName: "Katell",
    Gender: "female",
  },
  {
    FirstName: "Antonin",
    Gender: "male",
  },
  {
    FirstName: "Agathe",
    Gender: "female",
  },
  {
    FirstName: "Amélie",
    Gender: "female",
  },
  {
    FirstName: "Justine",
    Gender: "female",
  },
  {
    FirstName: "éloése",
    Gender: "female",
  },
  {
    FirstName: "Chaéma",
    Gender: "female",
  },
  {
    FirstName: "Nathan",
    Gender: "male",
  },
  {
    FirstName: "Maxence",
    Gender: "male",
  },
  {
    FirstName: "Laura",
    Gender: "female",
  },
  {
    FirstName: "Benjamin",
    Gender: "male",
  },
  {
    FirstName: "Valentine",
    Gender: "female",
  },
  {
    FirstName: "Laura",
    Gender: "female",
  },
  {
    FirstName: "Alicia",
    Gender: "female",
  },
  {
    FirstName: "Margot",
    Gender: "female",
  },
  {
    FirstName: "Jules",
    Gender: "male",
  },
  {
    FirstName: "Quentin",
    Gender: "male",
  },
  {
    FirstName: "Adrien",
    Gender: "male",
  },
  {
    FirstName: "Maéva",
    Gender: "female",
  },
  {
    FirstName: "Killian",
    Gender: "male",
  },
  {
    FirstName: "Rémi",
    Gender: "male",
  },
  {
    FirstName: "Nolan",
    Gender: "male",
  },
  {
    FirstName: "Julie",
    Gender: "female",
  },
  {
    FirstName: "Valentine",
    Gender: "female",
  },
  {
    FirstName: "Romane",
    Gender: "female",
  },
  {
    FirstName: "Lana",
    Gender: "female",
  },
  {
    FirstName: "Agathe",
    Gender: "female",
  },
  {
    FirstName: "Théo",
    Gender: "male",
  },
  {
    FirstName: "Timéo",
    Gender: "male",
  },
  {
    FirstName: "Julie",
    Gender: "female",
  },
  {
    FirstName: "Maryam",
    Gender: "female",
  },
  {
    FirstName: "Amandine",
    Gender: "female",
  },
  {
    FirstName: "Nathan",
    Gender: "male",
  },
  {
    FirstName: "Lisa",
    Gender: "female",
  },
  {
    FirstName: "Bruno",
    Gender: "male",
  },
  {
    FirstName: "Mathieu",
    Gender: "male",
  },
  {
    FirstName: "Lilian",
    Gender: "female",
  },
  {
    FirstName: "Alexandre",
    Gender: "male",
  },
  {
    FirstName: "Nathan",
    Gender: "male",
  },
  {
    FirstName: "Noémie",
    Gender: "female",
  },
  {
    FirstName: "Clara",
    Gender: "female",
  },
  {
    FirstName: "Marwane",
    Gender: "male",
  },
  {
    FirstName: "Mathis",
    Gender: "male",
  },
  {
    FirstName: "Malo",
    Gender: "male",
  },
  {
    FirstName: "Aaron",
    Gender: "male",
  },
  {
    FirstName: "Constant",
    Gender: "female",
  },
  {
    FirstName: "Sara",
    Gender: "female",
  },
  {
    FirstName: "Elsa",
    Gender: "female",
  },
  {
    FirstName: "Léon",
    Gender: "male",
  },
  {
    FirstName: "Pauline",
    Gender: "female",
  },
  {
    FirstName: "Bruno",
    Gender: "male",
  },
  {
    FirstName: "Lauriane",
    Gender: "female",
  },
  {
    FirstName: "Yéna",
    Gender: "female",
  },
  {
    FirstName: "Louise",
    Gender: "female",
  },
  {
    FirstName: "Romain",
    Gender: "male",
  },
  {
    FirstName: "Agathe",
    Gender: "female",
  },
  {
    FirstName: "Jasmine",
    Gender: "female",
  },
  {
    FirstName: "élise",
    Gender: "female",
  },
  {
    FirstName: "Victor",
    Gender: "male",
  },
  {
    FirstName: "Davy",
    Gender: "male",
  },
  {
    FirstName: "Capucine",
    Gender: "female",
  },
  {
    FirstName: "Mélissa",
    Gender: "female",
  },
  {
    FirstName: "Juliette",
    Gender: "female",
  },
  {
    FirstName: "Rosalie",
    Gender: "female",
  },
  {
    FirstName: "Davy",
    Gender: "male",
  },
  {
    FirstName: "Salomé",
    Gender: "female",
  },
  {
    FirstName: "Lilian",
    Gender: "female",
  },
  {
    FirstName: "Baptiste",
    Gender: "male",
  },
  {
    FirstName: "Candice",
    Gender: "female",
  },
  {
    FirstName: "éloése",
    Gender: "female",
  },
  {
    FirstName: "Lilian",
    Gender: "female",
  },
  {
    FirstName: "Candice",
    Gender: "female",
  },
  {
    FirstName: "Célia",
    Gender: "female",
  },
  {
    FirstName: "Colin",
    Gender: "male",
  },
  {
    FirstName: "Dylan",
    Gender: "male",
  },
  {
    FirstName: "Nathan",
    Gender: "male",
  },
  {
    FirstName: "Jade",
    Gender: "female",
  },
  {
    FirstName: "Romain",
    Gender: "male",
  },
  {
    FirstName: "Anthony",
    Gender: "male",
  },
  {
    FirstName: "Lola",
    Gender: "female",
  },
  {
    FirstName: "Florentin",
    Gender: "male",
  },
  {
    FirstName: "Roméo",
    Gender: "male",
  },
  {
    FirstName: "Baptiste",
    Gender: "male",
  },
  {
    FirstName: "Amine",
    Gender: "male",
  },
  {
    FirstName: "Margaux",
    Gender: "female",
  },
  {
    FirstName: "Ambre",
    Gender: "female",
  },
  {
    FirstName: "Valentine",
    Gender: "female",
  },
  {
    FirstName: "Lily",
    Gender: "female",
  },
  {
    FirstName: "Rosalie",
    Gender: "female",
  },
  {
    FirstName: "Jérémy",
    Gender: "male",
  },
  {
    FirstName: "Mathis",
    Gender: "male",
  },
  {
    FirstName: "Anna",
    Gender: "female",
  },
  {
    FirstName: "Noah",
    Gender: "male",
  },
  {
    FirstName: "Maelys",
    Gender: "female",
  },
  {
    FirstName: "Julie",
    Gender: "female",
  },
  {
    FirstName: "Romane",
    Gender: "female",
  },
  {
    FirstName: "Maelys",
    Gender: "female",
  },
  {
    FirstName: "Noémie",
    Gender: "female",
  },
  {
    FirstName: "Mathieu",
    Gender: "male",
  },
  {
    FirstName: "Anaés",
    Gender: "female",
  },
  {
    FirstName: "Timéo",
    Gender: "male",
  },
  {
    FirstName: "Margot",
    Gender: "female",
  },
  {
    FirstName: "Sara",
    Gender: "female",
  },
  {
    FirstName: "Lamia",
    Gender: "female",
  },
  {
    FirstName: "Carla",
    Gender: "female",
  },
  {
    FirstName: "Gilbert",
    Gender: "male",
  },
  {
    FirstName: "Lorenzo",
    Gender: "male",
  },
  {
    FirstName: "Romane",
    Gender: "female",
  },
  {
    FirstName: "Esteban",
    Gender: "male",
  },
  {
    FirstName: "élouan",
    Gender: "male",
  },
  {
    FirstName: "Lana",
    Gender: "female",
  },
  {
    FirstName: "Paul",
    Gender: "male",
  },
  {
    FirstName: "Bruno",
    Gender: "male",
  },
  {
    FirstName: "Killian",
    Gender: "male",
  },
  {
    FirstName: "Clémence",
    Gender: "female",
  },
  {
    FirstName: "Mathilde",
    Gender: "female",
  },
  {
    FirstName: "Hugo",
    Gender: "male",
  },
  {
    FirstName: "Loane",
    Gender: "female",
  },
  {
    FirstName: "Sarah",
    Gender: "female",
  },
  {
    FirstName: "Célia",
    Gender: "female",
  },
  {
    FirstName: "Léonard",
    Gender: "male",
  },
  {
    FirstName: "Pierre",
    Gender: "male",
  },
  {
    FirstName: "Renaud",
    Gender: "male",
  },
  {
    FirstName: "Yohan",
    Gender: "male",
  },
  {
    FirstName: "Félix",
    Gender: "male",
  },
  {
    FirstName: "Arthur",
    Gender: "male",
  },
  {
    FirstName: "Guillemette",
    Gender: "female",
  },
  {
    FirstName: "Maélle",
    Gender: "female",
  },
  {
    FirstName: "Malo",
    Gender: "male",
  },
  {
    FirstName: "Capucine",
    Gender: "female",
  },
  {
    FirstName: "Louis",
    Gender: "male",
  },
  {
    FirstName: "Mehdi",
    Gender: "male",
  },
  {
    FirstName: "Lena",
    Gender: "female",
  },
  {
    FirstName: "Malik",
    Gender: "male",
  },
  {
    FirstName: "Mattéo",
    Gender: "male",
  },
  {
    FirstName: "Lorenzo",
    Gender: "male",
  },
  {
    FirstName: "Guillemette",
    Gender: "female",
  },
  {
    FirstName: "Colin",
    Gender: "male",
  },
  {
    FirstName: "Emma",
    Gender: "female",
  },
  {
    FirstName: "Romane",
    Gender: "female",
  },
  {
    FirstName: "Tatiana",
    Gender: "female",
  },
  {
    FirstName: "Léo",
    Gender: "male",
  },
  {
    FirstName: "Adrian",
    Gender: "male",
  },
  {
    FirstName: "Emma",
    Gender: "female",
  },
  {
    FirstName: "élise",
    Gender: "female",
  },
  {
    FirstName: "Gabriel",
    Gender: "male",
  },
  {
    FirstName: "Antonin",
    Gender: "male",
  },
  {
    FirstName: "Marwane",
    Gender: "male",
  },
  {
    FirstName: "Lucie",
    Gender: "female",
  },
  {
    FirstName: "Syrine",
    Gender: "female",
  },
  {
    FirstName: "Amélie",
    Gender: "female",
  },
  {
    FirstName: "Manon",
    Gender: "female",
  },
  {
    FirstName: "Juliette",
    Gender: "female",
  },
  {
    FirstName: "Gilbert",
    Gender: "male",
  },
  {
    FirstName: "éléna",
    Gender: "female",
  },
  {
    FirstName: "Ethan",
    Gender: "male",
  },
  {
    FirstName: "Renaud",
    Gender: "male",
  },
  {
    FirstName: "Capucine",
    Gender: "female",
  },
  {
    FirstName: "Kevin",
    Gender: "male",
  },
  {
    FirstName: "Simon",
    Gender: "male",
  },
  {
    FirstName: "Nicolas",
    Gender: "male",
  },
  {
    FirstName: "Anna",
    Gender: "female",
  },
  {
    FirstName: "Lola",
    Gender: "female",
  },
  {
    FirstName: "Constant",
    Gender: "female",
  },
  {
    FirstName: "Mélissa",
    Gender: "female",
  },
  {
    FirstName: "Romain",
    Gender: "male",
  },
  {
    FirstName: "Rose",
    Gender: "female",
  },
  {
    FirstName: "Malo",
    Gender: "male",
  },
  {
    FirstName: "Lauriane",
    Gender: "female",
  },
  {
    FirstName: "Baptiste",
    Gender: "male",
  },
  {
    FirstName: "Nolan",
    Gender: "male",
  },
  {
    FirstName: "Alexandra",
    Gender: "female",
  },
  {
    FirstName: "Louise",
    Gender: "female",
  },
  {
    FirstName: "Alice",
    Gender: "female",
  },
  {
    FirstName: "Lilian",
    Gender: "female",
  },
  {
    FirstName: "Jeanne",
    Gender: "female",
  },
  {
    FirstName: "Lina",
    Gender: "female",
  },
  {
    FirstName: "Valentine",
    Gender: "female",
  },
  {
    FirstName: "Paul",
    Gender: "male",
  },
  {
    FirstName: "élisa",
    Gender: "female",
  },
  {
    FirstName: "Anthony",
    Gender: "male",
  },
  {
    FirstName: "Thibault",
    Gender: "male",
  },
  {
    FirstName: "Nina",
    Gender: "female",
  },
];

NameModel.deleteMany()
  .then(async () => {
    await NameModel.insertMany(names);
  })
  .catch((err) => {
    console.error(err);
  });
