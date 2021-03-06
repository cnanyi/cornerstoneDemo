
function setupButtons(studyViewer) {
    // Get the button elements
    var buttons = $(studyViewer).find('button');

    // Tool button event handlers that set the new active tool

    // WW/WL
    $(buttons[0]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.wwwc.activate(element, 1);
            cornerstoneTools.wwwcTouchDrag.activate(element);
        });
    });

    // Invert
    $(buttons[1]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {

            if ($(element).parent().hasClass('active')){
                var viewport = cornerstone.getViewport(element);
                // Toggle invert
                if (viewport.invert === true) {
                    viewport.invert = false;
                } else {
                    viewport.invert = true;
                }
                cornerstone.setViewport(element, viewport);
            }

        });
    });

    // Zoom
    $(buttons[2]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.zoom.activate(element, 5); // 5 is right mouse button and left mouse button
            cornerstoneTools.zoomTouchDrag.activate(element);
        });
    });

    // Pan
    $(buttons[3]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.pan.activate(element, 3); // 3 is middle mouse button and left mouse button
            cornerstoneTools.panTouchDrag.activate(element);
        });
    });

    // Stack scroll
    $(buttons[4]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.stackScroll.activate(element, 1);
            cornerstoneTools.stackScrollTouchDrag.activate(element);
        });
    });

    // Length measurement
    $(buttons[5]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.length.activate(element, 1);
        });
    });

    // Angle measurement
    $(buttons[6]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.angle.activate(element, 1);
        });
    });

    // Pixel probe
    $(buttons[7]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.probe.activate(element, 1);
        });
    });

    // Elliptical ROI
    $(buttons[8]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function(element) {
            cornerstoneTools.ellipticalRoi.activate(element, 1);
        });
    });

    // Rectangle ROI
    $(buttons[9]).on('click touchstart', function() {
        disableAllTools();
        forEachViewport(function (element) {
            cornerstoneTools.rectangleRoi.activate(element, 1);
        });
    });

    // Play clip Stop clip
    $(buttons[10]).on('click touchstart', function() {
        if ($(buttons[10]).children(0).attr("class") == "fa fa-play"){
            forEachViewport(function(element) {
                if ($(element).parent().hasClass('active')) {
                    var stackState = cornerstoneTools.getToolState(element, 'stack');
                    var frameRate = stackState.data[0].frameRate;
                    // Play at a default 10 FPS if the framerate is not specified
                    if (frameRate === undefined) {
                        frameRate = 10;
                    }
                    cornerstoneTools.playClip(element, frameRate);
                }
            });
            $(buttons[10]).children(0).attr("class", "fa fa-stop");
            $(buttons[10]).attr("title", "停止播放");
        }else{
            forEachViewport(function(element) {
                if ($(element).parent().hasClass('active')){
                    cornerstoneTools.stopClip(element);
                }
            });
            $(buttons[10]).children(0).attr("class", "fa fa-play");
            $(buttons[10]).attr("title", "播放");
        }
    });

    // Tooltips
    $(buttons).each(function(index){
        $(this).tooltip();
    });

    // $(buttons[0]).tooltip();
    // $(buttons[1]).tooltip();
    // $(buttons[2]).tooltip();
    // $(buttons[3]).tooltip();
    // $(buttons[4]).tooltip();
    // $(buttons[5]).tooltip();
    // $(buttons[6]).tooltip();
    // $(buttons[7]).tooltip();
    // $(buttons[8]).tooltip();
    // $(buttons[9]).tooltip();
    // $(buttons[10]).tooltip();
    // //$(buttons[11]).tooltip();
    // $(buttons[11]).tooltip();

};