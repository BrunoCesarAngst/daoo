import axios from 'axios';
 
const Api = axios.create({
  baseUl: 'https://vinicius.pro.br/daoo/rest/index.php'
})

export default Api;