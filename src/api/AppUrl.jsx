export default class AppUrl {
  static BaseUrl = "http://127.0.0.1:8000/api";
  static VisitorDetails = this.BaseUrl + "/getvisitor";
  static PostContact = this.BaseUrl + "/postcontact";
  static AllSiteInfo = this.BaseUrl + "/allsiteinfo";
  static AllCategoryDetails = this.BaseUrl + "/allcategory";
}
