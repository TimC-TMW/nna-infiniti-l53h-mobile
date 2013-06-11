(function(NNA, $) {

	var cookieOptions = {
		expiryDays : 0,
		path : '/'
	};
	var placementKey = 'q50_lastClickPlacement';
	var panoInteractionKey = 'q50_interiorInteraction';
	var currentSceneIdx = 0;

	// ****************************************************************
	// Store Placement from click events
	$.subscribe('/nna/crm/placement/top_nav', function() {
		// todo: save button click placement: 'top_nav'
		debug.log("CRM Subscribe: top_nav");
		setCookie(placementKey, 'top_nav');
	});

	$.subscribe('/nna/crm/placement/bottom_nav', function() {
		// todo: save button click placement: 'bottom_nav'
		debug.log("CRM Subscribe: bottom_nav");
		setCookie(placementKey, 'bottom_nav');
	});

	// ****************************************************************
	// CRM Events

	/////////////// global events
	$.subscribe('/nna/crm/pageload', function() {
		var lastPlacement = getCookie(placementKey, true);
		debug.log("CRM Subscribe: Page Load", lastPlacement);

		$.publish(NNA.TC.CRM_TRACK_EVENT, [1, {
			'placement' : lastPlacement
		}]);
	});

	$.subscribe('/nna/crm/360', function(e, story) {
		debug.log("CRM Subscribe: 360-Interact", story);

		$.publish(NNA.TC.CRM_TRACK_EVENT, [10, {
			'story' : story,
			'view' : story
		}]);
		$.unsubscribe('/nna/crm/360');
	});

	$.subscribe('/nna/crm/pano', function(e, params) {
		debug.log("CRM Subscribe: Pano-Interact", params.story, params.view);
		$.publish(NNA.TC.CRM_TRACK_EVENT, [15, {
			'story' : params.story,
			'view' : params.view
		}]);
		$.unsubscribe('/nna/crm/pano');
	});

	$.subscribe('/nna/crm/share', function(e, clickEvt) {
		var tool = clickEvt.currentTarget.title;
		debug.log("CRM Subscribe: Share", tool);

		$.publish(NNA.TC.CRM_TRACK_EVENT, [30, {
			'tool' : tool
		}]);
	});

	$.subscribe('/nna/crm/videostart', function(e, videoEl) {
		var $video = $(videoEl), story = $video.parent('article').attr('id');

		if (!$video.data('crm-play-event')) {
			debug.log("CRM Subscribe: Video Play", story);

			$.publish(NNA.TC.CRM_TRACK_EVENT, [100, {
				'story' : story
			}]);
			$video.data('crm-play-event', true);
		}
	});

	$.subscribe('/nna/crm/videoend', function(e, videoEl) {
		var $video = $(videoEl), story = $video.parent('article').attr('id');

		if (!$video.data('crm-end-event')) {
			debug.log("CRM Subscribe: Video End", story);

			$.publish(NNA.TC.CRM_TRACK_EVENT, [101, {
				'story' : story
			}]);
			$video.data('crm-play-event', true);
		}
	});

	/////////////// page specific events

	// JOIN / Handraiser
	$.subscribe('/nna/crm/joinpageload', function() {
		var lastPlacement = getCookie(placementKey, true);
		debug.log("CRM Subscribe: Join Page Load", lastPlacement);

		$.publish(NNA.TC.CRM_TRACK_EVENT, [40, {
			'placement' : lastPlacement
		}]);
	});

	$.subscribe('/nna/crm/joinerrors', function(e, errors) {
		debug.log("CRM Subscribe: Join Errors", errors);
		$.publish(NNA.TC.CRM_TRACK_EVENT, [41, {
			'formError' : errors
		}]);
	});

	$.subscribe('/nna/crm/joincomplete', function(e, errors) {
		debug.log("CRM Subscribe: Join Complete", errors);
		$.publish(NNA.TC.CRM_TRACK_EVENT, [42]);
	});

	// GALLERY
	$.subscribe('/nna/crm/extgalleryload', function(e, num) {
		debug.log("CRM Subscribe: Exterior Gallery Load", num);
		$.publish(NNA.TC.CRM_TRACK_EVENT, [2, {
			'num' : num
		}]);
		$.unsubscribe('/nna/crm/extgalleryload');
	});

	$.subscribe('/nna/crm/intgalleryload', function(e, num) {
		debug.log("CRM Subscribe: Interior Gallery Load", num);
		$.publish(NNA.TC.CRM_TRACK_EVENT, [1, {
			'num' : num
		}]);
		$.unsubscribe('/nna/crm/intgalleryload');
	});

	$.subscribe('/nna/crm/threesixtypageload', function(e, num) {
		debug.log("CRM Subscribe: 360 Gallery Load");
		$.publish(NNA.TC.CRM_TRACK_EVENT, [3]);
		$.unsubscribe('/nna/crm/intgalleryload');
	});

	// Slide change / loaded
	$.subscribe('/nna/gallery/slideChange', function(e, num) {
		var lastPlacement = getCookie(placementKey, true);
		debug.log("Gallery Loaded", num, lastPlacement);
		$.publish(NNA.TC.CRM_TRACK_EVENT, [2, {
			'num' : num,
			'placement' : lastPlacement
		}]);
	});

	// PANO
	$.subscribe('/nna/pano/loadingScene', function(e, params) {
		var parsedParams = parseParameterString(params);
		//set the current scene
		currentSceneIdx = parsedParams[0];

		debug.log("Pano scene ", getSceneName());
	});

	$.subscribe('/nna/pano/mousedown', function(e) {
		debug.log("Pano Interaction", getSceneName());
		var view = getSceneName();
		// We need a cookie so we can track front/back interaction
		var panoInteraction = getCookie(panoInteractionKey + view, false);

		if (!panoInteraction || panoInteraction === undefined || panoInteraction === "") {
			$.publish(NNA.TC.CRM_TRACK_EVENT, [10, {
				'view' : view,
				'story' : view
			}]);

			setCookie(panoInteractionKey + view, "true");
		}
	});

	// ****************************************************************
	// Helper functions

	function setCookie(key, val) {
		NNA.Utils.setCookie(key, val, cookieOptions);
	}

	function getCookie(key, remove) {
		var val = NNA.Utils.getCookie(key);
		if (remove) {
			NNA.Utils.setCookie(key, '', cookieOptions);
			//erase it for next click
		}

		return val;
	}

	function getSceneName() {
		var view = "Interior_front";
		if (currentSceneIdx > 0) {
			view = "Interior_rear";
		}
		return view;
	}

	function parseParameterString(params) {
		return params.split('|');
	}

})(NNA, jQuery);
