import axios from 'axios';
 
export const Api = axios.create({
  baseUrl: "https://vinicius.pro.br/daoo/rest/index.php"
})

