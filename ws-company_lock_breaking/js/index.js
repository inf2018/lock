var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n){
    showSlides(slideIndex +=n);
  }
    function currentSlide(n){
      showSlides(slideIndex = n);
  }
  function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if (n>slides.length){
      slideIndex = 1;
    }
    if(n<1){
      slideIndex = slides.length;
    }
    for (i=0; i<dots.length; i++){
      slides[i].style.display = "none";
    }
    for (i=0; i<dots.length; i++){
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display= "block";
    dots[slideIndex-1].className += "active";
  };



/*---------- Header ------------*/
var options = {
  offset: 200
}
  var header = new Headhesive('.header-menu', options);






$(document).ready(function() {
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top - 70;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});
  });