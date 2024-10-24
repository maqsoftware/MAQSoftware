/**
*	Counter
*	Version: 1.0.2
*	URL: @ThemeMountain
*	Description: Count up/down plugin
*	Requires: jQuery 1.10+
*	Author: ThemeMountain
*	Copyright: Copyright 2014 ThemeMountain
*	License: Attribution-NonCommercial 3.0 (http://creativecommons.org/licenses/by-nc/3.0/)
*/

;(function ($) {

	'use strict';

	var Counter = function( element, options ){

		// Settings
		var settings = $.extend( {}, $.fn.counter.tmcOpts, options ); 

		// Object & jQuery el
		var el = $( element );
		var obj = this;
		var mode = el.is('[data-countdown]') ? settings.mode = 'countdown' : settings.mode = 'stat';

		// Timer
		var countTimer;

		// Start counter
		obj.startCounter = function(){

			// Ensure it's cleared for
			// recurring events 
			obj.clearCounter();

			// Check if individual data attributes are set otherwise use
			// default parameters
			var fromNumber = el.data( 'count-from' ) ? parseFloat( el.data( 'count-from' ) ) : settings.from;
			var toNumber = el.data( 'count-to' ) ? parseFloat( el.data( 'count-to' ) ) : settings.to;
			var countInterval = el.data( 'count-interval' ) ? parseFloat( el.data( 'count-interval' ) ) : settings.interval;

			// Check direction
			var direction = fromNumber <= toNumber ? 'up' : 'down';

			countTimer = setInterval( function () {

				// Stop
				if( fromNumber === toNumber || isNaN( fromNumber )  || isNaN( toNumber ) ){
					clearInterval( countTimer );
					if( settings.onComplete ) settings.onComplete();
				}
					
				// Update
				el.text( formatNumber( fromNumber ) );

				// Check direction
				if( direction === 'up' ) fromNumber++;
				else fromNumber--;
				
			}, countInterval );
		};

		// Clear counter
		obj.clearCounter = function(){
			clearInterval( countTimer );
			var initNumber = el.data( 'count-from' ) ? parseFloat( el.data( 'count-from' ) ) : settings.from;
			el.html( initNumber );
		};

		// Start countdown
		obj.startCountdown = function(){

			// Set date
			var toDate = el.data( 'countdown-date') ? new Date( el.data( 'countdown-date' ) ).getTime() : new Date( settings.toDate ).getTime();
			var unitType = String( el.data( 'unit-type' ) ).split( ';' );
			var utDays = 'days';
			var utHours = 'hours';
			var utMins = 'mins';
			var utSecs = 'secs';

			// Output unit type
			if( el.data( 'unit-type' ) ){
				$.each( unitType , function( i, pair ) {
					pair = pair.split( ':' );
					var j = pair[0];
					var k = pair[1];
					if ( j === 'd' ) utDays = k;
					if ( j === 'h' ) utHours = k;
					if ( j === 'm' ) utMins = k;
					if ( j === 's' ) utSecs = k;
				});
			}

			// Add zero-padding
			var zeroPadding = function( value ){
				if( value < 10 && settings.zeroPadding ) {
					value = '0' + value.toString();
				}
				return value;
			};

			// Time calc
			var outputTime = function(){

				// Current date
				var currentDate = new Date().getTime();

				// Time left to coundown date
				var timeLeft = toDate - currentDate;

				// Offset
				var offset = {
					days : timeLeft < 0 ? 0 : Math.floor( timeLeft / ( 1000 * 60 * 60 * 24 ) ),
					hours : timeLeft < 0 ? 0 : Math.floor( ( timeLeft % ( 1000 * 60 * 60 * 24) ) / ( 1000 * 60 * 60 ) ),
					minutes : timeLeft < 0 ? 0 : Math.floor( ( timeLeft % ( 1000 * 60 * 60)) / ( 1000 * 60 ) ),
					seconds : timeLeft < 0 ? 0 : Math.floor( ( timeLeft % ( 1000 * 60) ) / 1000 )
				};

				// Output the HTML
				el.html( 
					'<span class="unit"><span class="day">' + zeroPadding( offset.days ) + '</span><span class="unit-type">' + utDays + '</span></span> <span class="unit"><span class="hour">' + zeroPadding( offset.hours ) + '</span><span class="unit-type">' + utHours + '</span></span> <span class="unit"><span class="min">' + zeroPadding( offset.minutes ) + '</span><span class="unit-type">' + utMins  + '</span></span> <span class="unit"><span class="sec">' + zeroPadding( offset.seconds ) + '</span><span class="unit-type">' + utSecs + '</span></span>' 
				);

				// Add active class
				if( !el.hasClass( 'active' ) ) el.addClass( 'active' );

				// On completion
				if ( timeLeft < 0 ) {
					clearInterval( interval );
					return false;
				}
			};

			// Update time at 1 second interval
			var interval = setInterval( function() {
				outputTime();
			}, 1000 );

			// Call upon startup
			outputTime();
		};

		// Format number with comma
		function formatNumber( number ) {
		  return number.toString().replace( /(\d)(?=(\d{3})+$)/g, '$1,' );
		}

		// Start counter
		if( settings.mode == 'stat' ){
			if( settings.autoStart ) obj.startCounter();
		}else if( settings.mode == 'countdown' ){
			if( settings.autoStart ) obj.startCountdown();
		}
	};

	// Plugin
	$.fn.counter = function ( options ) {

		// Iterate through each DOM element and return it
		return this.each(function() {

			var element = $( this );

			// Return early if this element already has a plugin instance
			if ( element.data( 'counter' ) ) return;

			// Pass options
			var counter = new Counter( this, options );

			// Store plugin object in this element's data
			element.data( 'counter', counter );

		});
	};

	// Default
	$.fn.counter.tmcOpts = {
		mode: 'stat',						// Type: 'stat', 'countdown'
		autoStart: true,					// Boolean: Whether counter should start automatically
		from: 0,							// Integer: starting number
		to: 100, 							// Integer: ending number
		toDate: 'Sep 5, 2018 15:37:25',		// String: Date to count down to
		zeroPadding: true,					// Boolean: Whether values should be zero padded
		interval: 20,						// Integer: how often counter should update in milliseconds
		onComplete: null					// Integer: once counting is done
	};
})( jQuery );