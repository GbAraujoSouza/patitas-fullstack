import api from "../../api";

export default {
  async fetchAllProducts() {
    try {
      const response = api.get('/products')
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}