import http from "../http-common";

const API_URL = 'http://161.35.56.100:3003';

class StudentDataService {
  getAll() {
    return http.get(`${API_URL}/api/v1/students`);
  }

  get(id) {
    return http.get(`${API_URL}/api/v1/students/${id}`);
  }

  create(data) {
    return http.post(`${API_URL}/api/v1/students/`, data);
  }

  update(id, data) {
    return http.put(`${API_URL}/api/v1/students/${id}`, data);
  }

  delete(id) {
    return http.delete(`${API_URL}/api/v1/students/${id}`);
  }
}

export default new StudentDataService();
