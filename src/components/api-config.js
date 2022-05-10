let productionURL = 'https://pre-order.gonoise.in';
let stageURL = 'https://stage-pre-order.gonoise.in';
var authUrl;
var baseUrl;
 if(process.env.REACT_APP_DEV === "stagging"){
      baseUrl = stageURL;
      authUrl= `${stageURL}/dashboard/login`
 }
 if(process.env.REACT_APP_DEV === "production"){
      baseUrl = productionURL;
      authUrl= `${productionURL}/dashboard/login`
 }
export {baseUrl};
export {authUrl};
