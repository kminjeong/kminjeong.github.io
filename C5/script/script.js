

function fnFlexibleSubMenu(oSel, url, exStr, tSel){
 	
	var a_href  = "";
	var a_text	= "";
 	
 	var isok 	= false;
 	var tar;
 	$(oSel).find('a').each(function(){
 		if($(this).attr('href')==url){
 			isok 	= true;
 			tar 	= $(this);
 			return false;
 		}
 	})
 	if(!isok) return;
 	
 	var cnt  	= 0;
 	var aclass 	= 'class="only"';
 	var temp 	= '';
 	temp += '<a ' + aclass + ' href="' + url +  '">' + tar.text() + '</a>';
 	temp += '<ul>';
 	
 	if(tar.parent('li').parent('ul').hasClass('cifx'))
 	{
 		//[step-1]
	  	tar.closest('.cifx').children('li').each(function(){
	  		
	 		a_text = $(this).find('a').eq(0).text().replace(exStr, '')
	  		if($(this).hasClass('dep_no')){
	  			a_href = $(this).children('a').eq(0).attr('href');
	  		} else {
	  			// 자식이 있는 경우 첫번째 자식의 url 을 가져온다.
	  			a_href = $(this).find('ul').find('a').eq(0).attr('href');
	  		}
	  		temp += '<li><a href="' + a_href + '">' + a_text + '</a></li>';
	  		cnt ++;
	  	});
 	} else {
 		//[step-2]
	  	tar.closest('ul').children('li').each(function(){
	  		
	 		a_text = $(this).find('a').eq(0).text().replace(exStr, '')
	  		if($(this).find('ul').find('a').length){
	  			// 자식이 있는 경우 첫번째 자식의 url 을 가져온다.
	  			a_href = $(this).find('ul').find('a').eq(0).attr('href');
	  		} else {
	  			a_href = $(this).find('a').attr('href');
	  		}
	  		temp += '<li><a href="' + a_href + '">' + a_text + '</a></li>';
	  		cnt ++;
	  	});
 	}
 	temp += '</ul>';
 	temp = (cnt>1) ? temp.replace('only', '') : temp;
 	$(tSel).html(temp);
}
 
$(document).ready(function() {
    fnFlexibleSubMenu('.cifx', '/seoul/seoul.do', '열림', '#flexible_submenu');
});


