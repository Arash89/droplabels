var arashSliderDp = (function(){
	// var currentSlide = 1;
    var slideSpeed = 1000;
    var rowSelecId = "";
    var runSlider = function (rowSelecIdInput) {
    	var sliderPerSize, sliderCurrentSize;
    	rowSelecId = rowSelecIdInput;
		makeSliderFit();
		sliderCheckFit();
		leftButtonClick();
		rightButtonClick();
    };

    var leftButtonClick = function () {
    	// jQuery.data(jQuery(rowSelecId + ".next-bt.left-bt").get(0), "currentSlide", 1);
		jQuery(rowSelecId + ".next-bt.left-bt").click(function(){

			// var fixWinWidth = jQuery(rowSelecId + ".fix-win").width();
			var winFix = jQuery(this).parent();
			// var pos = jQuery(rowSelecId + ".slider").position().left;
			var pos = winFix.find(".slider").position().left;
			// var fixWinWidth = jQuery(rowSelecId).find(".fix-win").width();
			var fixWinWidth = winFix.width();
			// var sliderWidth = jQuery(rowSelecId + ".slider").width();
			var sliderWidth = winFix.find(".slider").width();
			var crawlAmount = 0;
			// var oneSlideWidth = jQuery(".slide-thb").width();
			// var oneSlideWidth = jQuery(rowSelecId + ".thumbnail").outerWidth(true);
			var oneSlideWidth = winFix.find(".thumbnail").outerWidth(true);

			var howManySlides = Math.floor(fixWinWidth / oneSlideWidth);
			// var wholeSlides = jQuery(rowSelecId + ".slide-thb").length;
			var wholeSlides = winFix.find(".slide-thb").length;

			var currentSlide = jQuery.data(jQuery(this).parent().get(0), "currentSlide");
			currentSlide = Number(currentSlide);
			if (currentSlide < howManySlides) {
				return;
			}

			// var oneSlideMargin = jQuery(rowSelecId + ".slide-thb").eq(0).css("margin-right");
			var oneSlideMargin = winFix.find(".slide-thb").eq(0).css("margin-right");
			oneSlideMargin = parseInt(oneSlideMargin.substr(0, oneSlideMargin.length - 2)) * 2;
			oneSlideWidth += oneSlideMargin;
			var currentSliderPos = 0;

			currentSliderPos = (currentSlide + howManySlides - 2) * oneSlideWidth;

			// var firstSlideLeftMargin = jQuery(rowSelecId + ".slide-thb:first-of-type").css("margin-left");
			var firstSlideLeftMargin = winFix.find(".slide-thb:first-of-type").css("margin-left");
			firstSlideLeftMargin = parseInt(firstSlideLeftMargin.substr(0, firstSlideLeftMargin.length));


			// var previousSliderPos = jQuery(rowSelecId + ".slider").position().left;
			var previousSliderPos = winFix.find(".slider").position().left;
			crawlAmount = -1 * currentSliderPos - previousSliderPos;
			crawlAmount = Math.abs(crawlAmount);


			crawlAmount = "+=" + crawlAmount;

			currentSlide -= howManySlides;

			if (currentSlide <= howManySlides) {
				currentSlide = 1;
				// crawlAmount = jQuery(rowSelecId + ".slider").position().left;
				crawlAmount = winFix.find(".slider").position().left;
				crawlAmount = "-=" + crawlAmount;

			} 

			jQuery.data(jQuery(this).parent().get(0), "currentSlide", currentSlide);

			// jQuery(rowSelecId + ".slider").stop().animate({left: crawlAmount}, slideSpeed);
			winFix.find(".slider").stop().animate({left: crawlAmount}, slideSpeed);
		});
   	
    };  // End of leftButtonClick

    var rightButtonClick = function () {
    	jQuery.data(jQuery(rowSelecId + ".next-bt.right-bt").parent().get(0), "currentSlide", 1);
		jQuery(rowSelecId + ".next-bt.right-bt").click(function(event){
			// var pos = jQuery(".slider").position().left;
			var winFix = jQuery(this).parent();
			//var fixWinWidth = jQuery(rowSelecId + ".fix-win").width();
			var fixWinWidth = winFix.width();
			//var sliderWidth = jQuery(rowSelecId + ".slider").width();
			var sliderWidth = winFix.find(".slider").width();
			var crawlAmount = 0;
			// var oneSlideWidth = jQuery(rowSelecId + ".thumbnail").outerWidth(true);
			var oneSlideWidth = winFix.find(".thumbnail").outerWidth(true);
			var howManySlides = Math.floor(fixWinWidth / oneSlideWidth);
			// var wholeSlides = jQuery(rowSelecId + ".slide-thb").length;
			var wholeSlides = winFix.find(".slide-thb").length;
			var currentSlide = jQuery.data(jQuery(this).parent().get(0), "currentSlide");
			currentSlide = Number(currentSlide);

			if (currentSlide + howManySlides > wholeSlides + 1 || howManySlides === wholeSlides) {
				return;
			}
			// var oneSlideMargin = jQuery(rowSelecId + ".slide-thb").eq(0).css("margin-right");
			var oneSlideMargin = winFix.find(".slide-thb").eq(0).css("margin-right");
			oneSlideMargin = parseInt(oneSlideMargin.substr(0, oneSlideMargin.length - 2)) * 2;
			var currentSliderPos = 0;

			if (currentSlide <= 1) {
				currentSliderPos = (currentSlide + howManySlides - 1) * oneSlideWidth;
			}
			else {
				currentSliderPos = (currentSlide + howManySlides - 2) * oneSlideWidth;
			}

			// var firstSlideLeftMargin = jQuery(rowSelecId + ".slide-thb:first-of-type").css("margin-left");
			var firstSlideLeftMargin = winFix.find(".slide-thb:first-of-type").css("margin-left");
			firstSlideLeftMargin = parseInt(firstSlideLeftMargin.substr(0, firstSlideLeftMargin.length));

			var totalMargins = 0;
			currentSliderPos = currentSliderPos + totalMargins;

			// var previousSliderPos = jQuery(rowSelecId + ".slider").position().left;
			var previousSliderPos = winFix.find(".slider").position().left;
			crawlAmount = -1 * currentSliderPos - previousSliderPos;
			crawlAmount = Math.abs(crawlAmount);


			if (wholeSlides - (currentSlide + howManySlides - 1) >= 0) {
				crawlAmount = "-=" + crawlAmount;
			}
			else {
				crawlAmount = "-=0";
			}


			if (currentSlide <= 1) {
				currentSlide += (howManySlides + 1);
			}
			else {
				currentSlide += howManySlides;
			}

			jQuery.data(jQuery(this).parent().get(0), "currentSlide", currentSlide);

			// jQuery(rowSelecId + ".slider").stop().animate({left: crawlAmount}, slideSpeed);
			winFix.find(".slider").stop().animate({left: crawlAmount}, slideSpeed);
		});

    };  //End of rightButtonClick

    var sliderCheckFit = function () {
		// if the window is resized and also the slider resized
		jQuery(window).resize(function(){
			sliderCurrentSize = jQuery(rowSelecId + "#fixWinMother").width();
			if (sliderPerSize !== sliderCurrentSize) {
				makeSliderFit();

		//////////////////////
			var pos = jQuery(rowSelecId + ".slider").position().left;
			var fixWinWidth = jQuery(rowSelecId + ".fix-win").width();
			var sliderWidth = jQuery(rowSelecId + ".thumbnail").outerWidth();
			var crawlAmount = 0;
			var oneSlideWidth = jQuery(rowSelecId + ".thumbnail").outerWidth(true);
			var howManySlides = Math.floor(fixWinWidth / oneSlideWidth);
			var wholeSlides = jQuery(rowSelecId + ".slide-thb").length;


			var oneSlideMargin = jQuery(rowSelecId + ".slide-thb").eq(0).css("margin-right");
			oneSlideMargin = parseInt(oneSlideMargin.substr(0, oneSlideMargin.length - 2)) * 2;
			oneSlideWidth += oneSlideMargin;
			var currentSliderPos = 0;



			currentSliderPos = (currentSlide - 2)  * oneSlideWidth * -1;

			var firstSlideLeftMargin = jQuery(rowSelecId + ".slide-thb:first-of-type").css("margin-left");
			firstSlideLeftMargin = parseInt(firstSlideLeftMargin.substr(0, firstSlideLeftMargin.length));

			if (currentSlide === 1) {
				currentSliderPos = 0;
			}

			jQuery(rowSelecId + ".slider").css("left", currentSliderPos + "px");

		/////////////////////////

			sliderPerSize = sliderCurrentSize;
			}
		});

		sliderPerSize = sliderCurrentSize = jQuery(rowSelecId + "#fixWinMother").width();
    };  // End of sliderCheckFit

    var makeSliderFit = function () {

		var fixWinWidth = jQuery(rowSelecId + ".fix-win").width();
		var slides = 0;
		var slidesGapTotal = 0;
		var slidesGap = 0;
		var images = jQuery(rowSelecId + ".slide-thb");
		var src = "";
		var srcArr = [];
		var obj = {};
		var slidBigMargCalss = "";
		var slideWidth = 0;

		// if the slide presents or not
		images.each(function(){
			checkPicSource(jQuery(this));		
		});

	    // Correcting each slide width
		obj = isFixWinBigOrSmall(fixWinWidth);
		slides = obj.slides;

		// slideWidth = (fixWinWidth - (slides + 2) * 10) / slides - 8;
		// slideWidth = Math.round(slideWidth);
		// console.log("slideWidth2: " + slideWidth);

		// Finding slides width 
		slideWidth = (fixWinWidth - 10 - slides * 20) / slides;
		slideWidth = Math.round(slideWidth);

		images.each(function() {
			jQuery(this).width(slideWidth);
			jQuery(this).height(slideWidth * 0.75);
			jQuery(this).parent().width(slideWidth);
			jQuery(this).parent().height(slideWidth * 0.75 + slideWidth * 0.75 / 2);
			jQuery(this).next("p").css("font-size", (slideWidth * 0.1) > 16 ? 16 : (slideWidth * 0.1) + "px");
		});

		// slider width
		var sliderWidth = 0;
		var slideCount = images.length;
		var slideMarginLeftOrRight = images.eq(0).css("margin-left");
		slideMarginLeftOrRight = parseInt(slideMarginLeftOrRight.substr(0, slideMarginLeftOrRight.length - 2));
		sliderWidth = (slideWidth + 18) * (slideCount + 1);
		jQuery(rowSelecId + ".slider").width(sliderWidth); 

		var thumbHeight = jQuery(rowSelecId + ".thumbnail").eq(0).outerHeight(true);
		jQuery(rowSelecId + ".slider").height(thumbHeight); 
		jQuery(rowSelecId + ".fix-win").height(thumbHeight); 

		//place the next button
		jQuery(rowSelecId + ".next-bt:last-of-type").css("left", (fixWinWidth - 35) + "px");
		jQuery(rowSelecId + ".next-bt span").css("top", thumbHeight / 2 - 14);


    };  //End of makeSliderFit

    var isFixWinBigOrSmall = function (fixWinWidth) {

    	var slidBigMargCalss = false;
    		// One slids in screen	
    	if (fixWinWidth < 340) {
    		slides = 1;	
    		slidesGap = 10;
    		slideSpeed = 300;
    	}	// Two slids in screen	
    	else if (fixWinWidth < 450) {
    		slides = 2;	
    		slidesGap = 10;
    		slideSpeed = 500;
    	}	// Three slids in screen	
    	else if (fixWinWidth < 750) {
    		slides = 3;	
    		slidesGap = 10;
    		slideSpeed = 600;
    	}	// five slids in screen	
    	else if (fixWinWidth < 950) {
    		slides = 5;	
    		slidesGap = 15;
    		slideSpeed = 800;
    	}	// seven slids in screen	
    	else if (fixWinWidth < 1200) {
    		slides = 7;	
    		slidesGap = 15;			
    		slideSpeed = 1200;
    	}	// ten slids in screen
    	else {
    		slides = 10;	
    		slidesGap = 15;						
    		slideSpeed = 1200;
    	}

    	return {slides:slides,slidesGap:slidesGap};

    }; // End of isFixWinBigOrSmall

    var checkPicSource = function (jQpicture) {
    	if (jQpicture.width() === 0) {
    		src = jQpicture.attr("src");
    		srcArr = src.split("/");
    		srcArr[srcArr.length - 1] = "hqdefault.jpg";
    		src = srcArr.join("/");
    		jQpicture.attr("src", src); 
    	}

    	if (jQpicture.width() === 0) {
    		src = jQpicture.attr("src");
    		srcArr = src.split("/");
    		srcArr[srcArr.length - 1] = "default.jpg";
    		src = srcArr.join("/");
    		jQpicture.attr("src", src); 
    	}	
    };  // End checkPicSource

    return runSlider;

})();  // End of arashSliderDp module