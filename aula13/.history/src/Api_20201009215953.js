import axios from 'axios';
 
const Api = axios.create({
  baseUR: 'https://vinicius.pro.br/daoo/rest/index.php'
})

export default Api;