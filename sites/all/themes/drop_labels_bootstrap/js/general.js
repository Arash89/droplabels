jQuery(document).ready(function () {
	var droplabelsAsideInvisibel = false;
	var browserNameIsIE = false;
	var siteName = window.location.href;
	//alert(siteName);
	if (siteName.indexOf("localhost") !== -1) {
		siteName = "http://localhost/droplabels_bootstrap";
	} 
	else {
		siteName = "http://droplabels.org";
	} 



	var theNolinks = jQuery(".nolink");

	theNolinks.each(function (index, elem) {
		if (jQuery(this).html() !== "LOGIN" ) {
			var theHtml = jQuery(this).html();
			if (droplabelsPageName === "front") {
				
				theHtml = theHtml.replace(" ", "_");
				theHtml = "#" + theHtml;
				jQuery(this).attr("href", theHtml);
				if (!jQuery(this).hasClass("page-scroll")) {
							jQuery(this).addClass("page-scroll");
				}
			}
			else {
				if (!jQuery(this).hasClass("page-scroll")) {
							jQuery(this).removeClass("page-scroll");
				}
				if (theHtml === "ABOUT") {
					// jQuery(this).attr("href", siteName + "/node/1");
					jQuery(this).attr("href", siteName + "/#ABOUT");
				}
				else if (theHtml === "THE TRUTH") {
					// jQuery(this).attr("href", siteName + "/node/2");
					jQuery(this).attr("href", siteName + "/#THE_TRUTH");
				}
				else if (theHtml === "MOVEMENT") {
					// jQuery(this).attr("href", siteName + "/movement");
					jQuery(this).attr("href", siteName + "/#MOVEMENT");
				}
			}
		}
		else {
			makeLogin (jQuery(this));
		}

	});




	 function makeLogin(jObj) {

		jObj.on("mouseenter", function () {
										console.debug("I'm in the mouseEnter");
									
										jQuery( ".aside-in aside" ).fadeTo( "slow", 1 );
										droplabelsAsideInvisibel = true;
									})
									.on("mouseleave", function () {
										if (droplabelsAsideInvisibel) {
	 										jQuery( ".aside-in aside" ).fadeOut( "slow", 0 );
	 									}			
									})
									.on("click", function () {
										jQuery( ".aside-in aside" ).fadeIn( "fast", 1 );
										droplabelsAsideInvisibel = !droplabelsAsideInvisibel;
										if (droplabelsAsideInvisibel) {
											jQuery( ".aside-in aside" ).fadeOut( "fast", 0 );	
										}			
									});

		jQuery(".aside-close").click(function(){
			jQuery( ".aside-in aside" ).fadeOut( "fast", 0 );
		});
	}


	jQuery("#block-simple-subscription-subscribe h2").html("Stay Updated <span class='glyphicon glyphicon-envelope'></span>");
	jQuery("#block-simple-subscription-subscribe input").attr("placeholder", "Your Email Address");
	jQuery(".simple_subscription_footer").remove();
	var block = jQuery("#block-simple-subscription-subscribe").get(0).outerHTML;
	jQuery("#droplabels-subscrib").html(block);		
	if (droplabelsPageName === "front" || droplabelsPageName === "community") {		
		jQuery("aside #block-simple-subscription-subscribe").remove();
	}
				
	// if the browser is IE or not img-thumb-helpus
	var helpUsIcons = jQuery(".img-thumb-helpus");
	var theSource = "";
	if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {

		helpUsIcons.each(function (index, elem) {
			theSource = jQuery(this).attr("src");
			theSource = theSource.replace(".svg", ".png");
			console.error(theSource);
			jQuery(this).attr("src", theSource);
		});

		var iFramesOnPage = document.getElementsByTagName("IFRAME");
		for(var i = 0; i < iFramesOnPage.length; i++) { 
		    var newiFrameURL = iFramesOnPage[i].getAttribute("src")+"?wmode=transparent"; 
		    iFramesOnPage[i].setAttribute("src", newiFrameURL);
		}

	}
	else {

	}

	// for collapsing the menu after click on
	jQuery(".navbar-nav li a").click(function(event) {
	   jQuery(".navbar-collapse").collapse('hide');
	 });

});