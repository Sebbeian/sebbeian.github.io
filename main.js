$(document).ready(function () {
	$('.menu-toggler').on('click', function() {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});

	$('.top-nav .nav-link').on('click', function() {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});

	$('nav a[href*="#"]').on('click', function() {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		}, 2000);
	});

	$('#up').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 2000);
	});

	AOS.init({
		easing: 'ease',
		duration: 1800,
		once: true
	});
});

function showFag1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("fag1");
  var btnText = document.getElementById("showBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Se liste over fag";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lukk liste";
    moreText.style.display = "inline";
  }
}

function showFag2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("fag2");
  var btnText = document.getElementById("showBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Se liste over fag";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lukk liste";
    moreText.style.display = "inline";
  }
}

function passwd(){

 var password = prompt('Skriv inn passord for å laste ned fil:');
 if(password.toLowerCase() == "2255"){
	 window.open("folder/history.zip")
 }else{
	 alert("Feil passord. Kontakt CV-eier for passord (sebastian.kvamme@gmail.com)");
 }
}

function showFag3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("fag3");
  var btnText = document.getElementById("showBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Se liste over fag";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lukk liste";
    moreText.style.display = "inline";
  }
}

function popupOpenClose(popup) {

	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(popup).wrapInner("<div class='wrapper'></div>");
	}

	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popup).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
		popupOpenClose($(".popup"));
	});
});
