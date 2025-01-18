//  external file  that  contains rreusable  code  thatcan be imprted  into another  JS files
//write many reusable  JS code  for many apps
// has variables,classses....

import{PI,getCircumference,getArea,getVolume} from './mathUil.js';
 console.log(PI);
 const circumference = getCircumference(10);
 console.log(`${circumference.toFixed(2)}cm`);


 //area
 const Area = getArea(10);
 console.log(`${Area.toFixed(2)}cm^2`);