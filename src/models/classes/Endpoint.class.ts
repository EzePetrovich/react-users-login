const api_url = import.meta.env.VITE_API_URL;

class Endpoint {
  base?: string;
  list?: string;
  add?: string;
  delete?: string;
  update?: string;

  constructor(model: string) {
    this.base = `${api_url}/${model}`;
    this.list = `${this.base}/list`;
    this.add = `${this.base}/add`;
    this.delete = `${this.base}/delete`;
    this.update = `${this.base}/update`;
  }
}
export default Endpoint;
