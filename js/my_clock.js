function my_clock(el,el2){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
	var year=today.getFullYear();
	var month=today.getMonth()+1;
	var day=today.getDate();
	var Meet=new Date("2014/07/24 00:00:00");
	var Love=new Date("2015/03/29 00:00:00");
	month=month>=10?month:('0'+month);
	day=day>=10?day:('0'+day);
    m=m>=10?m:('0'+m);
    s=s>=10?s:('0'+s);
    el.innerHTML = "现在: <b>"+year+"-"+month+"-"+day+"\n"+h+":"+m+":"+s+"</b>";
	var meet_gone=Math.floor((today-Meet)/3600000/24);
	var love_gone=Math.floor((today-Love)/3600000/24);
	el2.innerHTML="我们相识： <b>"+meet_gone+"</b> 天"+"<br>"+"我们在一起： <b>"+love_gone+"</b> 天";
    setTimeout(function(){my_clock(el,el2)}, 1000);
}

var clock_div = document.getElementById('current');
var clock_div2 = document.getElementById('history');
my_clock(clock_div,clock_div2);
