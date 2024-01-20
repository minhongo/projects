module.exports = class {
    id = null;
    cleanliness_rtng = null;
    privacy_rtng = null;
    aesthetic_rtng = null;
    amenities_rtng = null;
    overall_rtng = null;
    hasChangingTable = false;
    hasAccessibility = false;
    comment = null;
  
    constructor(data) {
        this.id = data.rvw_id;
        this.cleanliness_rtng = data.rvw_cleanliness_rtng,
        this.privacy_rtng = data.rvw_privacy_rtng,
        this.aesthetic_rtng = data.rvw_aesthetic_rtng,
        this.amenities_rtng = data.rvw_amenities_rtng,
        this.overall_rtng = data.rvw_overall_rtng,
        this.hasChangingTable = data.rvw_hasChangingTable,
        this.hasAccessibility = data.rvw_hasAccessibility,
        this.comment = data.rvw_comment
    }
};