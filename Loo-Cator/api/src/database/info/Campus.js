module.exports = class {
    id = null;
    name = null;
    city = null;
    state = null;
    zipcode = null;
  
    constructor(data) {
      this.id = data.cmp_id;
      this.name = data.cmp_name;
      this.city = data.cmp_city;
      this.state = data.cmp_state;
      this.zipcode = data.cmp_zipcode;
    }
  };