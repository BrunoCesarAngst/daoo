import axios from 'axios';
 
const Api = axios.create({
  baseURl: 'https://vinicius.pro.br/daoo/rest/index.php'
})

export default Api;