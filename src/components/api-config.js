let productionURL = 'https://pre-order.gonoise.in';
let stageURL = 'https://stage-pre-order.gonoise.in';
var authUrl;
var baseUrl;
 if(process.env.NODE_ENV === "development"){
      baseUrl = stageURL;
      authUrl= `${stageURL}/dashboard/login`
 }
 if(process.env.NODE_ENV === "production"){
      baseUrl = productionURL;
      authUrl= `${productionURL}/dashboard/login`
 }
export {baseUrl};
export {authUrl};
