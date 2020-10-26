import http from "../http-common";

const API_URL = 'http://localhost:3003'; // todo

class StudentDataService {
  getAll() {
    return http.get(`${API_URL}/api/v1/students`);
  }

  get(id) {
    return http.get(`${API_URL}/api/v1/students/${id}`);
  }

  create(data) {
    return http.post("/students", data);
  }

  update(id, data) {
    return http.put(`/students/${id}`, data);
  }

  delete(id) {
    return http.delete(`/students/${id}`);
  }
}

export default new StudentDataService();
