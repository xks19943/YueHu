/**
 * Created by xiaoming on 2018/1/29.
 */
var httpClient = require('../services/httpclient') ;
let ReadApi = {
  getNews(arg, options){
    return httpClient.get('/read/news', arg,options);
  }
};

export default ReadApi;