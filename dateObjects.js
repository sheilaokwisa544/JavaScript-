const date = new  Date();
const year=date.getFullYear();
const month=date.getMonth();
const hour=date.getHours();
const day = date.getDay();

date.setDate(1);
date.setFullYear(2024);
date.setMilliseconds(20);

console.log(year)

const date1=new Date ("2024-12-31");
const date2=new Date ("2023-4-08");