function merryChristmas(funcs){
	var dict = funcs.reduce((acc, func) => {
    	acc[func()] = func.name;
    	return acc;
	}, {});
	return [...'Merry Christmas!'].map(c => dict[c]).join(',');
}

function merryChristmas2(funcs){
  return [..."Merry Christmas!"].map(v=>funcs.filter(a=>a()==v)[0].name).join(",");
}

var a=x=>"M",b=_=>"e",c=_=>"r",d=_=>"y",e=_=>"C",
     f=_=>"h",g=_=>"i",h=_=>"s",i=_=>"t",j=_=>"m",
     k=_=>"a",l=_=>" ",m=_=>"!",
     funcs = [a,b,c,d,e,f,g,h,i,j,k,l,m];
console.log(merryChristmas(funcs)); // "a,b,c,c,d,l,e,f,c,g,h,i,j,k,h,m"
 
var aa=x=>"M",bb=_=>"e",cc=_=>"r",dd=_=>"y",ee=_=>"C",
     ff=_=>"h",gg=_=>"i",hh=_=>"s",ii=_=>"t",jj=_=>"m",
     kk=_=>"a",ll=_=>" ",mm=_=>"!",
     funcs = [aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm];
console.log(merryChristmas(funcs)); 	// "aa,bb,cc,cc,dd,ll,ee,ff,cc,gg,hh,ii,jj,kk,hh,mm"
