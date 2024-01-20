module.exports = class {
    favoriteId = null;
    userId = null;
    bathroomId = null;
  
    constructor(data) {
      this.favoriteId = data.favorite_id;
      this.userId = data.usr_id;
      this.bathroomId = data.bth_id;
    }
  };