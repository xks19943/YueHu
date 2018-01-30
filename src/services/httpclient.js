import _ from 'lodash';
var noop = () => {};

var httpClient = {};

httpClient._paramify = function (obj) {
  var str = '';
  for (var key in obj) {
    if (str !== '') {
      str += '&';
    }
    str += key + '=' + obj[key];
  }
  return str;
};

httpClient.status = function(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }else if(response.status === 404){
    throw 'api not found'
  }
  throw response;
};

httpClient.get = function (url, params, options) {
  options = options || {};
  if (params) {
    var getParams = this._paramify(params);
    url +=  '?' + getParams;
  }
  options.method = 'GET';
  options.url = url;
  options.params = params;
  options.headers = {
    'Accept': 'application/json',
  };
  return this.request(options);
};

httpClient.post = function(url, data, options, params) {
  if (params) {
    var getParams = this._paramify(params);
    url +=  '?' + getParams;
  }
  options = options || {};
  options.method = 'POST';
  options.url = url;
  options.data = data;
  options.headers = {
    'Accept': 'application/json',
  };
  return this.request(options);
};

httpClient.request = function (options) {
  if(options.url.indexOf('/') === 0){
    options.url =  'http://192.168.100.187:3000'+ options.url;
  }
  console.log(options.url);
  return new Promise(async(resolve, reject) => {
    resolve = resolve || noop;
    reject = reject || noop;
    fetch(options.url, options).then(async response => {
      let result = await response.json();
      resolve(result);
    }).catch(async (error) => {
      if(_.isString(error)){
        reject(error)
      }else {
        reject(error.message);
      }
    });
  });
};



module.exports = httpClient;


