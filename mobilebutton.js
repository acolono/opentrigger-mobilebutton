;jQuery(document).ready(function($){
	"use strict";
	
	var parseUrl = function(){
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    var urlParams = {};
    while (match = search.exec(query))
			urlParams[decode(match[1])] = decode(match[2]);
		return urlParams;
	};
	
	var request = parseUrl();
	
	if(request && request.hookUrl){
		var hookUrl = request.hookUrl;
		var $body = $('.body').first();
		var $span = $body.find('>span').first();
		
		$.ajax({
			url: hookUrl,
			data: request,
			dataType: 'jsonp', 
			success: function(data,status,xhr){  
				$body.addClass('success');
			},
			error: function(xhr,status,error){
				$body.addClass('error');
			},
			complete : function(){
				$span.addClass('trigger scale')
			}
		});
	}else{
		alert("hookUrl parameter is missing");
	}
});