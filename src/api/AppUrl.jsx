export default class AppUrl {
  static BaseUrl = "http://127.0.0.1:8000/api";
  static VisitorDetails = this.BaseUrl + "/getvisitor";
  static PostContact = this.BaseUrl + "/postcontact";
  static AllSiteInfo = this.BaseUrl + "/allsiteinfo";
  static AllCategoryDetails = this.BaseUrl + "/allcategory";
  static AllSlider = this.BaseUrl + "/allslider";
  static NotificationHistory = this.BaseUrl + "/notification";
  static UserLogin = this.BaseUrl + "/login";
  static UserData = this.BaseUrl + "/user";
  static UserRegister = this.BaseUrl + "/register";
  static UserForgetPassword = this.BaseUrl + "/forgetpassword";
  static UserResetPassword = this.BaseUrl + "/resetpassword";
  static AddToCart = this.BaseUrl + "/addtocart";

  static ProductListByRemarks(remarks) {
    return this.BaseUrl + "/productlistbyremarks/" + remarks;
  }

  static ProductListByCategory(category) {
    return this.BaseUrl + "/productlistbycategory/" + category;
  }

  static ProductListBySubcategory(category, subcategory) {
    return this.BaseUrl + "/productlistbysubcategory/" + category + "/" + subcategory;
  }

  static ProductDetails(id) {
    return this.BaseUrl + "/productdetails/" + id;
  }

  static ProductBySearch(searchKey) {
    return this.BaseUrl + "/search/" + searchKey;
  }

  static SimilarProduct(code) {
    return this.BaseUrl + "/similar/" + code;
  }

  static ReviewList(code) {
    return this.BaseUrl + "/reviewlist/" + code;
  }

  static CartCount(productCode) {
    return this.BaseUrl + "/cartcount/" + productCode;
  }

  static AddFavourite(product_code, email) {
    return this.BaseUrl + "/favourite/" + product_code + "/" + email;
  }
}
