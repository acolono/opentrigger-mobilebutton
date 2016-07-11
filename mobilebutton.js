;jQuery(document).ready(function($){
	"use strict";
	if(window.request && window.request.hookUrl){
		var hookUrl = window.request.hookUrl;
		var $body = $('.body').first();
		var $span = $body.find('>span').first();
		
		$.ajax({
			url: hookUrl,
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
	}
});