module.exports = class {
    id = null;
    name = null;
    sumReviews = null;
    numReviews = null;
    link = null;
  
    constructor(data) {
      this.id = data.bth_id;
      this.name = data.bth_name;
      this.sumReviews = data.bth_sum_reviews;
      this.numReviews = data.bth_num_reviews;
      this.floorplan = data.floorplan_link
    }
  };