(function(NNA, $){
	
	NNA.Footer = Class.extend({
		init: function(options){
			// configurable options
			this.options = {
			};
			$.extend(true, this.options, options);

			// class attributes

			// init
			this.attach();

			debug.log('NNA.Footer: initialized');
		},

		attach: function(){
			//Footer Share hide/show
			$("footer.main ul li.share").mouseenter(function(){
				$("footer.main ul li .addthis_toolbox").show();	
			}).mouseleave(function(){
				$("footer.main ul li .addthis_toolbox").hide();	
			});

			// site feedback link
			$('footer.main ul li.feedback a').on('click', function(e){
				e.preventDefault();
				showbox('trkGloablFeedBkSurvey');
			});
		}
	});

})(NNA, jQuery);