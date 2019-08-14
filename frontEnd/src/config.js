// 服务器地址的配置在这里
var ServiceUrl = 'http://127.0.0.1:5000'
function UpdateServiceUrl(newUrl) {
    ServiceUrl = newUrl
    console.log("UpdateServiceUrl has been updated to " + ServiceUrl);
}
console.log("Connected to " + ServiceUrl + " ...");
export { ServiceUrl, UpdateServiceUrl};
