/*
 * View model for OctoPrint-WebcamIframe
 *
 * Author: jneilliii
 * License: AGPLv3
 */
$(function() {
	function Webcam_iframeViewModel(parameters) {
		var self = this;

		self.settingsViewModel = parameters[0];

		self.onAllBound = function(allViewModels){
			var webcamurl = self.settingsViewModel.webcam_streamUrl();
			$('#webcam_container').replaceWith('<video width="588" controls autoplay><source  src="' + webcamurl + '" type="application/x-mpegURL"></video>');
		}
	}

	OCTOPRINT_VIEWMODELS.push({
		construct: Webcam_iframeViewModel,
		dependencies: ["settingsViewModel"],
		elements: [ /* ... */ ]
	});
});
