import axios from 'axios';
 
const Api = axios.create({
  baseUrl: 'https://vinicius.pro.br/daoo/rest/index.php"
})

export default Api;