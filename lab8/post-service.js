class PostService {
  constructor(http) {
    this.http = http; 
  }

  async fetchFirstPost() {
    const config = {
      url: 'https://jsonplaceholder.typicode.com/posts/1'
    };
    
    return this.http.request(config);
  }
}

module.exports = { PostService };