module.exports = class {
    id = null;
    name = null;
    address = null;
  
    constructor(data) {
      this.id = data.bld_id;
      this.name = data.bld_name;
      this.address = data.bld_address;
    }
  };