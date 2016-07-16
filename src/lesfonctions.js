$(function () {
			$('#supported').text('Est-ce possible/état: ' + !!screenfull.enabled);

			if (!screenfull.enabled) {
				return false;
			}

	
    /*  $("#monCanvas").click(function () {
		//		
           screenfull.request(vidz);
          screenfull.request(this);
          
         
          
           console.log('clic monCanvas');
			});*/
  

    	
       $("#PE").click(function () {
				console.log('clic PE');
           screenfull.request(this);
			});
    
    	
       $("#vidz").click(function () {
				console.log('clic vidz');
           screenfull.request(this);
			});
  

    function fullscreenchange() {
				var elem = screenfull.element;

				$('#status').text('Is fullscreen: ' + screenfull.isFullscreen);

				if (elem) {
					$('#element').text('Element: ' + elem.localName + (elem.id ? '#' + elem.id : ''));
				}

				if (!screenfull.isFullscreen) {
					$('#external-iframe').remove();
					document.body.style.overflow = 'auto';
				}
			}

			document.addEventListener(screenfull.raw.fullscreenchange, fullscreenchange);

			// set the initial values
			fullscreenchange();
		});
        