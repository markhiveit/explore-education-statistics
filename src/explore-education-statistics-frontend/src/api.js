import axios from 'axios';

const hostname = window && window.location && window.location.hostname;
let baseURL;

if(hostname === 'educationstatisticstest.z6.web.core.windows.net') {
    baseURL = 'http://content-explore-education-statistics-test.azurewebsites.net';
  } else {
    baseURL = 'http://localhost:5010';
  }

export default axios.create({
  baseURL: `${baseURL}/api/`
});
