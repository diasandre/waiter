export const PROMPTS = {
  INIT_PROMPT:
    "Act like a food reviewer and recommend to me 3 restaurants following the rules:",
  JSON_EXPLANATION:
    "Just return the compact JSON (removing all new lines(\\n) and unnecessary blank spaces) with a list of restaurants. The object restaurant contain the attributes are: name of the restaurant(name), location (location), the distance from the actual location (far_from) and a text resuming all information as text including a description of the menu/foods, if is possible recommend the best plate (maximum 50 words) (text)"};

export const WELCOME_QUESTIONS = [
  "Do you want restaurant recommendations?",
  "Would you like some restaurant suggestions?",
  "Are you interested in hearing about good places to eat?",
  "Can I offer you some recommendations for restaurants?",
  "Are you looking for some restaurant ideas?",
  "Do you need any tips for restaurants to try?",
];
