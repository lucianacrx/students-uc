import http from "../http-common";
import querystring from 'querystring';

const API_URL = 'http://161.35.56.100:3003';

class StudentDataService {
  getAll() {
    return http.get(`${API_URL}/api/v1/students`);
  }

  get(id) {
    return http.get(`${API_URL}/api/v1/students/${id}`);
  }

  create(data) {
    return http.post(`${API_URL}/api/v1/students/`, querystring.stringify(data)).catch(e => console.log(e));
  }

  update(id, data) {
    return http.put(`${API_URL}/api/v1/students/${id}`, querystring.stringify(data));
  }

  delete(id) {
    return http.delete(`${API_URL}/api/v1/students/${id}`);
  }
}

export default new StudentDataService();
