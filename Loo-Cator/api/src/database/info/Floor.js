module.exports = class {
    id = null;
    name = null;
  
    constructor(data) {
      this.id = data.flr_id;
      this.name = data.flr_name;
    }
  };