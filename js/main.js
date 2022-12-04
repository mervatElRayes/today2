/*global console, $*/
$(function (){
	"use strict";
	//calculate body padding top Depend on navbar height
	
	$('body').css('paddingTop', $('.navbarr').innerHeight());
	
	// smoothly scroll to Element
	
	$('.navbarr li a').click(function (e){
		
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: $('#'+ $(this).data('scroll')).offset().top +1
			
		},1000);
		
	});
	//Add active class on navbar link and remove from siblings
	
	$('.navbarr li a').click(function (){
		
		//$('.navbarr a').removeClass('active');
		//$(this).addClass('active');
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
	});

	
			
	$(window).scroll(function (){
		
		// sync navbar links with sections
			
			$('.block').each(function (){
				if($(window).scrollTop() > $(this).offset().top){
					
					
					var blockID = $(this).attr('id');
					$('.navbarr a').removeClass('active');
					
					$('.navbarr li a[data-scroll="' + blockID +'"]').addClass('active')
				}
			});
			// scroll to top button
			var scrollTop = $('.scroll-to-top');
			
			if($(window).scrollTop() >= 1000){
				if(scrollTop.is(':hidden')){
					scrollTop.fadeIn(400);  // this is action
				}
				
			}else{
				
				scrollTop.fadeOut(400);
			}
			
		});

	// click on scroll-to-top button to go up
	$('.scroll-to-top').click(function (event){
		event.preventDefault();
	
	$('html, body').animate({
		scrollTop: 0
		
	},1000);
	
});	
	// popup .. button that make show popup(white button)	
					
	$('.show-popup').click(function (){
		$($(this).data('popup')).fadeIn();
		
	});
	$('.popup').click(function (){
		$(this).fadeOut();
	});
		$('.popup .inner').click(function (e){
		e.stopPropagation();
	});
	// make close button and opration close button
	
			$('.popup .close').click(function (e){
				e.preventDefault();
				
				$(this).parentsUntil('.popup').parent().fadeOut();
		
	});	

		// start Error message .. into Home section
		$('.error-message').each(function () {

			$(this).animate({

				right: 0

			}, 1000, function (){

				$(this).delay(3000).fadeOut();
			});
		});

	//make skip to popup .. the skip use only if we have one popup just one popup
	
		//$(document).keydown(function(e){
		//	if(e.keyCode == 27){
			//$('.popup').fadeOut();
	//	}
	//});


	// buttons with effects .. this buttons Exists in section Home
	$('.from-left').hover(function (){
		$(this).find('span').eq(0).animate({
			width: '100%',
			border:'none'
			
		},250);
			
	}, function (){
			$(this).find('span').eq(0).animate({
			width: 0,
			border:'none'	
			
		},250);
		
	});
	
	// buttons2 with effects
	
		$('.from-top').hover(function (){
		$(this).find('span').eq(0).animate({
			height: '100%'
			
		},250);
			
	}, function (){
			$(this).find('span').eq(0).animate({
			height: 0
			
		},250);
	});
	//Start button effect3  border-left
		$('.border-left').hover(function (){
		$(this).find('span').eq(0).animate({
			width: '100%'
			
		},250);
			
	}, function (){
			$(this).find('span').eq(0).animate({
			width: 0
			
		},250);
	});
	
	
	// start button effect4 border-top
	
		$('.border-top').hover(function (){
		$(this).find('span').eq(0).animate({
			height: '100%'
			
		},250);
			
	}, function (){
			$(this).find('span').eq(0).animate({
			height: 0
			
		},250);
		
	});


		// button of Bounce effects function
		function bounceElement(selector, times, distance, speed){

			for(var i = 0; i < times; i++){

			$(selector).animate({
				top: '-=' + distance
				
			},speed).animate({

				top: '+=' + distance

			},speed)
				
			}
			
		}
		
		// button of Bounce effects ...(Exists in about us section)
		$('.bounce').on('click', function(){
			
			bounceElement($(this), 3, 20, 400)
		
		});
		
		//start progress bar .. (into home section)

		$('.progressing span').each(function (){
			$(this).animate({
			width:$(this).attr('data-progress') + '%'
				
			},3000, function (){
				$(this).text('perc:' + $(this).attr('data-progress')+ '%')
			});
		});


		// start fixed menu ..(into home section)

		$('.fixed-menu .fa-gear').on('click', function (){
			$(this).parent('.fixed-menu').toggleClass('is-visible');
			if($(this).parent('.fixed-menu').hasClass('is-visible')){
				$(this).parent('.fixed-menu').animate({
					left:0	
				},500);
				
					
				//$('body').animate({
					//paddingLeft:'220px'	
				//},500);
				
				
			}else{
				$(this).parent('.fixed-menu').animate({
					left:'-220px'
				},500);
				//$('body').animate({
				//	paddingLeft:0	
				//},500);
				
			}
			
		});

			// change colors ..(it into fixed menu)
			$('.change-colors li').on('click', function (){
				$('body').attr('data-default-color', $(this).data('color'));
			});

	// thumbnails Gallery
		// it is very important about if add or remove img dynamic .. this gallery into solution section
	
		var  numberOfThumbnails = $('.thumbnails').children().length,
		marginBetweenThumbnails = '.5',
		totalBetweenThumbnails = (numberOfThumbnails -1)* marginBetweenThumbnails,
		thumbnailsWidth =(100 - totalBetweenThumbnails)/ numberOfThumbnails;
		
		$('.thumbnails img').css({
			'width': thumbnailsWidth + '%',
			'margin-right': marginBetweenThumbnails + '%',
		});
		
		
		console.log(thumbnailsWidth)
		$('.thumbnails img').on('click', function () {
			
			
			$(this).addClass('selected').siblings().removeClass('selected');
			
			$('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(700);	
		});
		
		// chevron-right and left
		$('.master-img .fa-chevron-right').on('click', function(){
			
				if ($('.thumbnails .selected').is(':last-child')){
				$('.thumbnails img').eq(0).click();
				
				}else{
					$('.thumbnails .selected').next().click();
				}
		});
		
			$('.master-img .fa-chevron-left').on('click', function(){
				
				if ($('.thumbnails .selected').is(':first-child')){
				$('.thumbnails img:last').click();
				
				}else{
					$('.thumbnails .selected').prev().click();
				}
				
		
		});

	// Toggle  ALL products Description..( little img bird and flower.. into section products that content 2 square & MORE lists and MORE square)
	
	$('.products .product i, .items .item i, .flowers .flower i').on('click', function (){
		$(this).toggleClass('fa-plus fa-minus').next('p').slideToggle();
		
	});
	

		// start  button that make switch between list view and grid view in section bird
		$('.view-options i').on('click', function (){
			$(this).addClass('active').siblings().removeClass('active');
			
			$('.items').removeClass('list-view grid-view').addClass($(this).data('class'));
			console.log($(this).data('class'))
		});

	
		// start  button that make switch between list view and grid view in section flower
		$('.view-options i').on('click', function (){
			$(this).addClass('active').siblings().removeClass('active');
			
			$('.flowers').removeClass('list-view grid-view').addClass($(this).data('class'));
			console.log($(this).data('class'));
		});

	
// this for section cars ()
(function autoChange(){
	$('.tickerr-list .active').each(function (){
		if (! $(this).is(':last-child')){
			$(this).delay(800).fadeOut(800, function (){
				$(this).removeClass('active').next().addClass('active').fadeIn();
				
				autoChange();
			});
			
			
		}else{
			$(this).delay(800).fadeOut(800, function (){
				$(this).removeClass('active');
				$('.tickerr-list div').eq(0).addClass('active').fadeIn();
				
				autoChange();
				
				});	
		}
		
		});	
	}());
	/*
	** Our form
	**Practical Examles
	*/

	// Hide placeholder on Focus & Restore On blur

	var placeAttr = '';
	$('[placeholder]').focus(function () {

		placeAttr = $(this).attr('placeholder');
		$(this).attr('placeholder', '');



	}).blur(function () {

		$(this).attr('placeholder', placeAttr);

	});
	
	// show Message when field is Empty .. (into section sevices ALL the inputs content pleaceholder)

	$('[required]').blur(function () {

		if ($(this).val() == ''){

			$(this).next('span').fadeIn().delay(2000).fadeOut();
		}
	});

	// add Asterisk(..star  the input) to All Required Field .. into services section

	$('<span class="asterisk">*</span>').insertBefore(':input[required]');

	// customize or(Coordinate) the asterisk by jQuery
	$('.asterisk').parent('div').css('position', 'relative');
	$('.asterisk').each(function () {

		$(this).css({

			'position': 'absolute',

			'top': 4,
	
			'left': $(this).parent('div').find(':input').innerWidth() - 20,
		
			'color': '#F00',
			'fontWeight': 'bold',
			'fontSize' : 35
		
		});

	});
	// customize the input Field..(file-choose)

	$('.container .our-form form input[type="file"]').wrap('<div class="custom-file"></div>');
	
	$('.custom-file').prepend('<span> Upload Your File</span>');
	$('.custom-file').append('<i class="fa fa-upload fa-lg skin-color"></i>');
	$('.container .our-form form input[type="file"]').change(function () {
		$(this).prev('span').text($(this).val());


	});
	// Detect unicode of Keyboard Keys

	$('.detect-unicode').on('keyup', function (event) {
		var Keyboardkey = event.keyCode || event.which;

		$('.unicode').html(Keyboardkey);

	});
	// change Input Direction Depend on Langauge .. (from arb to english for Example) .. into section services

	$('.auto-direction').on('keyup', function () {

		if($(this).val().charCodeAt(0) < 200){

			$(this).css('direction', 'ltr');

		}else{

			$(this).css('direction', 'rtl');
		}

	});

			// this training  for Know what meaning the unicode & How use it .. (what meaning number ..200)

			//var english = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',

			//text = '';

			//for(var i = 0; i < english.length; i++){

				//text += english.charCodeAt(i) + '<br>';
				

			//}

			//$('.english').html(text);




			//var arabic = 'ابتثجحخدذرزسشصضطظعغفقكتمنهوى',

			//text = '';

			//for(var i = 0; i < arabic.length; i++){

				//text += arabic.charCodeAt(i) + '<br>';
				

			//}
			
			//$('.arabic').html(text);
	// conver Input value To Tags .. (the input by class ..( named add-tag))

		$('.add-tag').on('keyup', function (event) {
			var Keyboardkey = event.keyCode || event.which;
			 
			if(Keyboardkey === 188){ // if comma pressed .. (in the input named add-tag)

				var thisValue = $(this).val().slice(0, -1);

				$('.tags').append('<span class="tag-span"><i class="fa fa-times"></i>' + thisValue + '</span>');

				$(this).val('');
			}	
		});
		// Remove tag on click ..(make remove  for sign x after we created it)..(in the input named add-tag)
		$('.tags').on('click', '.tag-span i', function () {
			$(this).parent('.tag-span').fadeOut(800);

		});

		// trimmed the paragraph text characters & add (... / or see more) .. (into input under iput send that into services section)

		function trimText(selector, maxlength){

			$(selector).each(function () {

				//to know number of letter  of this paragraph..(into console)
				console.log($(this).text().length)
	
				if($(this).text().length > maxlength) {
	
					var trimmedText = $(this).text().substr(0, maxlength);
					
					$(this).text(trimmedText + '...')
	
				
	
				
				}
			});

		}
		// use the function on different Element
		trimText('.trimmed-texts .p-one', 100);
		trimText('.trimmed-texts .p-two', 400);
		trimText('.trimmed-texts .p-three', 300);

		

  

// start  pragraph include button(show & hide) into services section


// Get all the elements from the page 

$('#textButton').on('click', function (){

	// Get all the elements from the page 
	var points =  
		document.getElementById("points"); 

	var showMoreText = 
		document.getElementById("moreText"); 

	var buttonText = 
		document.getElementById("textButton"); 

	// If the display property of the dots  
	// to be displayed is already set to  
	// 'none' (that is hidden) then this  
	// section of code triggers 
	if (points.style.display === "none") { 

		// Hide the text between the span 
		// elements 
		showMoreText.style.display = "none"; 

		// Show the dots after the text 
		points.style.display = "inline"; 

		// Change the text on button to  
		// 'Show More' 
		buttonText.innerHTML = "Show More"; 
	} 

	// If the hidden portion is revealed, 
	// we will change it back to be hidden 
	else { 

		// Show the text between the 
		// span elements 
		showMoreText.style.display = "inline"; 

		// Hide the dots after the text 
		points.style.display = "none"; 

		// Change the text on button 
		// to 'Show Less' 
		buttonText.innerHTML = "Show Less"; 
	} 


});
 // adjust Element height to be the same height
		var theMaxHeight = 0;

		// Loop on Element to you want to adjust Height
		$('.same-height div').each(function () {
			if ($(this).height() > theMaxHeight){
				theMaxHeight = $(this).height();
			}
		});


		$('.same-height div').height(theMaxHeight);

		// suffle Cards into Home section
		var zIndexValue = 0;

		$('.cards .card').on('click', function (){

			$(this).animate({

				left: '15%',

				marginTop: 30



			}, 400, function (){

				zIndexValue--;
				$(this).css('z-index',zIndexValue );

			}).animate({

				left: $(this).css('left'),
				marginTop: 0

			}, 400)

		});

		// create Blink Warning .. into Others section
		blinkWarning();


		function blinkWarning(){

			$('.blink-warning').fadeOut(1000, function () {
				$(this).fadeIn(1000);
				blinkWarning();

			});

		}

		// To Do list .. into Others section
		var newTask = $('.task-input');

		$('.add-task').on('submit', function (e){

			e.preventDefault();

			if(newTask.val() != ''){

				// prependTo put if we need the writTaske to be first (above).. if we need writ the task under in last we be writ (appendTo)
				$('<li>' + newTask.val() + '</li>').prependTo('.tasks');

				newTask.val('');			
			}
		});

			// here if we need put line and than remove task frome this box
			$('.tasks').on('click', 'li', function () {

				$(this).css('text-decoration', 'line-through').delay(200).fadeOut(400, function (){
					$(this).remove();
				});
			});

			// Type Write Effects ... write or increase letter automatic..(into others section)
			var theText = $('.typer').data('text'),

			theTextLength = theText.length,
			n = 0,



			theTyper = setInterval(function () {

				$('.typer').each(function () {
					$(this).html($(this).html() + theText[n]);
				});

				n += 1;

				if (n >= theTextLength){

					clearInterval(theTyper);

				}

			}, 10);

			// make overlay effect  from top to bottom .. (into other section)
		$('.from-top').hover(function (){
			$(this).find('span').eq(0).animate({
				height: '100%'
				
			},250);
				
		}, function (){
				$(this).find('span').eq(0).animate({
				height: 0
				
			},250);
		});

		//start make table and calculate item prices..(into others section
		
		var theSummary = 0;

		$('.price').each(function () {
			theSummary += parseInt($(this).text()); // will Not Work

		});

		$('.the-total').text(theSummary);




		


		//start proverbs or words.. Auto change content... into (other section)

		(function autoChange() {
			
			$('.ticker-list .active').each(function () {

				if (! $(this).is(':last-child')){

					$(this).delay(1000).fadeOut(1000, function (){

						$(this).removeClass('active').next().addClass('active').fadeIn();

						autoChange();
					});

				}else{

					$(this).delay(1000).fadeOut(1000, function () {
						$(this).removeClass('active');
						$('.ticker-list li').eq(0).addClass('active').fadeIn();

						autoChange();
					});
				}
			});



		} ());

			//start Dynamic Tabs .. into others section
			$('.tabs-list li').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
			$('.content-list > div').hide();

			$($(this).data('content')).fadeIn();

		});

		//start change tab from top to left And vice versa.. (and SWITCH TABS view)

		$('.switch-tabs').on('click', function () {

			$(this).next('.dynamic-tabs').toggleClass('left-tabs');
		});

		//Email suggest box
		var emailProviders = ['gmail.com', 'outlook.com', 'yahoo.com', 'Linked-In.com'],

		finalString = '';

		$('.email-suggest').on('keyup', function () {

			finalString = ''; // Reset variable

			if(! $(this).next().is('.suggest-box')) {

				$('<ul class="suggest-box"></ul>').insertAfter($(this));

			}
			for(var i = 0; i < emailProviders.length; i++){

				finalString += '<li>' + $(this).val() + '@' + emailProviders[i] + '</li>';
			}

			$('.suggest-box').html(finalString);

		});

		// hide the box that content of All Emails  from my page ..(.. Follow(Email suggest box))
		$('body').on('click', '.suggest-box li', function () {

			$('.email-suggest').val($(this).text());

			$(this).parent().fadeOut(300).remove();
		});

	});