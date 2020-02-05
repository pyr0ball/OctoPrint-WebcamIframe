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
//			$('#webcam_container').replaceWith('<video width="588" controls autoplay><source  src="' + webcamurl + '" type="application/x-mpegURL"></video>');
			$('#webcam_container').replaceWith('<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script><video width=588 id="video"></video><script>;if(Hls.isSupported()){var video = document.getElementById("video");var hls = new Hls();hls.loadSource("' + webcamurl + '"); hls.attachMedia(video);hls.on(Hls.Events.MANIFEST_PARSED,function() { video.play();});}</script>');
		}
	}

	OCTOPRINT_VIEWMODELS.push({
		construct: Webcam_iframeViewModel,
		dependencies: ["settingsViewModel"],
		elements: [ /* ... */ ]
	});
});
