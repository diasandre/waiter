export const PROMPTS = {
  INIT_PROMPT:
    "Act like a food reviewer and recommend to me 3 restaurants following the rules:",
  JSON_EXPLANATION:
    "Just answer the compact JSON (without new lines and blank spaces) with a list of restaurants. The object restaurant contain the attributes are: name of the restaurant(restaurant_name), trip advisor rate (rate), location (location), meters from the actual location (far_from) and a text resuming all information as text including a description  of the menu/foods, if is possible recommend the best plate (maximum 50 words) (text).",
};

export const WELCOME_QUESTIONS = [
  "Do you want restaurant recommendations?",
  "Would you like some restaurant suggestions?",
  "Are you interested in hearing about good places to eat?",
  "Can I offer you some recommendations for restaurants?",
  "Are you looking for some restaurant ideas?",
  "Do you need any tips for restaurants to try?",
];
