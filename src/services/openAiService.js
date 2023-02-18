// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: "API_KEY",
// });

// const openai = new OpenAIApi(configuration);

export const createCompletion = async (prompt) => {
  return new Promise((res,rej) => res(JSON.parse('\n\n[{"restaurant_name":"La Taverna dei Fori Imperiali","rate":4.5,"location":"Via dei Fori Imperiali, 22, 00184 Roma RM","far_from":400,"text":"La Taverna dei Fori Imperiali is a traditional Italian restaurant located 400 meters from the actual location. It offers a wide variety of dishes, from pasta to pizza, and the best plate is the Carbonara. It is a classic Roman dish made with eggs, guanciale, pecorino cheese and black pepper."},{"restaurant_name":"Ristorante Pizzeria La Botte","rate":4.0,"location":"Via dei Serpenti, 129, 00184 Roma RM","far_from":500,"text":"Ristorante Pizzeria La Botte is a pizzeria located 500 meters from the actual location. It offers a wide variety of pizzas, from classic to creative, and the best plate is the Pizza Margherita. It is a classic Italian pizza made with tomato, mozzarella and basil."},{"restaurant_name":"Ristorante La Fraschetta","rate":4.5,"location":"Via dei Serpenti, 127, 00184 Roma RM","far_from":500,"text":"Ristorante La Fraschetta is a traditional Italian restaurant located 500 meters from the actual location. It offers a wide variety of dishes, from pasta to meat, and the best plate is the Saltimbocca alla Romana. It is a classic Roman dish made with veal, prosciutto and sage."}]')))
//   const {
//     data: { choices },
//   } = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: prompt,
//     temperature: 0,
//     max_tokens: 1000,
//   });

//   const [answer] = choices;

//   return JSON.parse(answer.text);
};
