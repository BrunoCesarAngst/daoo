import axios from 'axios';

 export default const Api = axios.create({
  baseUrl: "https://vinicius.pro.br/daoo/rest/index.php"
})