import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async (topic) => {
  // оголошується асинхронна функція, яка приймає параметр topic (тема).

  const response = await axios.get(`/search?query=${topic}`);
  // надсилається GET-запит на ендпоінт /search, у параметрі query передається значення теми.

  return response.data.hits;
  // повертає лише масив знайдених статей (hits — це “збіги”).
};
