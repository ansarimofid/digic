/*jslint white:true*/
/*jslint nomen:true*/

function update_clock() {
    "use strict";
var dte=new Date(),
    _sec,_secp,_secn,
    _min,_minp,_minn,
    _hrs,_hrsp,_hrsn,
    x,day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    mon=["January","February","March","April","May","June","July","August","September","October","November","December"],
    _date,_mon,_yrs,_day;
    
                
                //for seconds
                 _sec=dte.getSeconds();
                 _secp=parseInt(_sec,10)+1;
                 _secn=_sec-1;
                
                _secn=(_secn===-1?"59":_secn);
                _secp=(_secp===60?"0":_secp);
                
                _sec=(_sec<10?"0":"")+_sec;
                _secp=(_secp<10?"0":"")+_secp;
                _secn=(_secn<10?"0":"")+_secn;
                
                document.getElementById("sec").innerHTML=_sec;
                document.getElementById("secn").innerHTML=_secn;
                document.getElementById("secp").innerHTML=_secp;
                
                
                //For minutes
                 _min=dte.getMinutes();
                 _minp=parseInt(_min,10)+1;
                 _minn=_min-1;
                
                _minn=(_minn===-1?"59":_minn);
                _minp=(_minp===60?"0":_minp);
                
                _min=(_min<10?"0":"")+_min;
                _minp=(_minp<10?"0":"")+_minp;
                _minn=(_minn<10?"0":"")+_minn;
                
                document.getElementById("min").innerHTML=_min;
                document.getElementById("minn").innerHTML=_minn;
                document.getElementById("minp").innerHTML=_minp;
                
                //for hours
                
                 _hrs=dte.getHours();
                 _hrsp=parseInt(_hrs,10)+1;
                 _hrsn=_hrs-1;
                
                _hrsn=(_hrsn===-1?"23":_hrsn);
                _hrsp=(_hrsp===24?"0":_hrsp);
                
                _hrs=(_hrs<10?"0":"")+_hrs;
                _hrsp=(_hrsp<10?"0":"")+_hrsp;
                _hrsn=(_hrsn<10?"0":"")+_hrsn;
                
                document.getElementById("hrs").innerHTML=_hrs;
                document.getElementById("hrsn").innerHTML=_hrsn;
                document.getElementById("hrsp").innerHTML=_hrsp;
                
                
                //for tick
    
                x=(_sec%2===0?":":"&nbsp");
                document.getElementById("tick_1").innerHTML=x;
                document.getElementById("tick_2").innerHTML=x;
                
                //For complete date
    
                _date=dte.getDate();
                _day=day[dte.getDay()];
                _mon=mon[dte.getMonth()];
                _yrs=dte.getFullYear();
                
                document.getElementById("day").innerHTML=_day;
                document.getElementById("date").innerHTML=_date+"th "+_mon+" "+_yrs;
                
            }

                
