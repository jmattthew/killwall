javascript: (function() {
	if(!document.querySelector('.mattthew_deblock_button')) {
		/* if they don't exist yet, add deblock buttons to the DOM */
		/* add the dismiss button */
		var button = document.createElement('div');
		button.innerHTML = 'DISMISS&nbsp;ME';
		var att = document.createAttribute('style');
		att.value = 'position:fixed; top:10px; right:10px; display:inline-block; padding:4px 8px; border-radius:4px; z-index:999999; color:white; font-family:sans-serif; font-size:14px; box-shadow:0px 4px 4px rgba(0,0,0,0.4), 0px 0px 4px rgba(0,0,0,0.4); cursor:pointer; background-color:red;';
		button.setAttributeNode(att);
		att = document.createAttribute('class');
		att.value = 'mattthew_deblock_button';
		button.setAttributeNode(att);
		var bod = document.querySelector('body');
		button.addEventListener('click', function(){
			/* remove all deblock buttons from the DOM */
			var el = document.querySelectorAll('.mattthew_deblock_button');
			el[0].parentNode.removeChild(el[0]);
			el[1].parentNode.removeChild(el[1]);
		});
		bod.appendChild(button);
		/* add the try again */
		button = document.createElement('div');
		button.innerHTML = '&nbsp;TRY&nbsp;AGAIN&nbsp;';
		att = document.createAttribute('style');
		att.value = 'position:fixed; top:54px; right:10px; display:inline-block; padding:4px 8px; border-radius:4px; z-index:999999; color:white; font-family:sans-serif; font-size:14px; box-shadow:0px 4px 4px rgba(0,0,0,0.4), 0px 0px 4px rgba(0,0,0,0.4); cursor:pointer; background-color:blue;';
		button.setAttributeNode(att);
		att = document.createAttribute('class');
		att.value = 'mattthew_deblock_button';
		button.setAttributeNode(att);
		var bod = document.querySelector('body');
		button.addEventListener("click", function(){
			/* second attempt reloads the page without script tag elements */
			/* open this URL in a new window */
			var w = window.open(location.href,'_blank');
			w.addEventListener('DOMContentLoaded', function(){
				/* as soon as that page loads... */
				var html = w.document.querySelector('html').cloneNode(true);
				var els = html.querySelectorAll('script');
				/* strip out all script tag elements before they change the DOM */
				for(var i=0, il=els.length; i<il; i++) {
					els[i].parentNode.removeChild(els[i]);
				}
				var html = html.innerHTML;
				/* copy and paste that page's DOM to this page, then close it */
				document.querySelector('html').innerHTML = html;
				w.close();
			}, false);
		});
		bod.appendChild(button);
		/* first attempt: remove any elements that fill */
		/* the entire screen yet don't contain much content */
		var els = document.querySelectorAll('body *');
		var wW = window.innerWidth * 0.8;
		var wH = window.innerHeight * 0.8;
		var bigs = [];
		/* tag DOM with first_try marker */
		bod = document.querySelector('body');
		bod.style = 'overflow:auto!important';
		att = document.createAttribute('class');
		att.value = 'deblock_first_try';
		bod.setAttributeNode(att);
		/* check size of all elements */
		for (var i = 0, il = els.length; i < il; i++) {
			var s = window.getComputedStyle(els[i]);
			var w = els[i].offsetWidth;
			var h = els[i].offsetHeight;
			/* remove any scroll disabling styles */
			if (s.getPropertyValue('overflow') == 'hidden') {
				els[i].style = 'overflow:auto!important';
			}
			/* save big elements to an array */
			if (w >= wW && h >= wH) {
				bigs[bigs.length] = els[i];
			}
		}
		bigs.sort(function(a,b){
			return b.innerHTML.length - a.innerHTML.length;
		});
		var p = 0.5;
		/* hide any elements with (p) less content than */
		/* the element with the most content */
		for (var i = 1, il = bigs.length; i < il; i++) {
			if(bigs[i].innerHTML.length < bigs[0].innerHTML.length * p) {
				bigs[i].style = 'display:none!important';
			}
		};
	}
})();
