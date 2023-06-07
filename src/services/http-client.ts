import apiClient from "./ApiClient";

class HttpClient {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = () => {
    return apiClient.get(this.endPoint).then((res) => res.data);
  };
}

export const createService = (endPoint: string) => {
  return new HttpClient(endPoint);
};
