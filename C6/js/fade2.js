$(function () {
	$('.slideshow').each(function() {//slideshow라는 class속성값을 갖는 요소를 찾은 다음에 {}안에 있는 코드를 적용해라
		var $slides=$(this).find('img'),//모든 슬라이드
		 	slideCount=$slides.length,//슬라이드의 갯수파악 slideCount==4
		 	currentIndex=0;//현재 슬라이드를 나타내는 인덱스
			$slides.eq(currentIndex).fadeIn();//첫번째 슬라이드를 페이드인해서 표시
			//.slideshow img.eq(currentIndex==index[0]):첫번째 이미지  eq=~와같은

		//setInterval(function() {},실행시간)
		//setInterval(함수명,실행시간)
		setInterval(showNextSlide,5000)	;
		function showNextSlide() {
			var nextIndex=(currentIndex+1)%slideCount; //0>1>2>3
			$slides.eq(currentIndex).fadeOut();//현재 슬라이드는 페이드아웃으로 사라지고
			$slides.eq(nextIndex).fadeIn();//다음 슬라이드는 페이드인으로 나타남.
			currentIndex=nextIndex;//다음 슬라이드인덱스가 현재 표시된 인덱스로 저장
		}
	});
});
//제이쿼리 메소드:each,eq,find,fadeIn,fadeOut
//자바스크립트 :var, function,setInterval 

			/*var nextIndex=currentIndex+1%slideCount;
			0   0.25=(0+1)%4-->몫:0.25  나머지 0
			1   0.5=(1+1)%4-->몫:0.5  나머지 0
			2   0.75=(2+1)%4-->몫:0.75  나머지 0
			3   1=(3+1)%4-->몫:1  나머지 정수0*/