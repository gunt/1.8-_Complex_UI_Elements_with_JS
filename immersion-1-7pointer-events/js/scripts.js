(function() {
    var $canvas = document.querySelector('#canvas');

    var isDrawing = false;
    var previousX = null;
    var previousY = null;

    function handleStart(e) {
        isDrawing = true;

        // Initiate previ
        
    }
  
    function handleEnd() {
      isDrawing = false;
    }
  
    function handleMove(e) {
      //To prevent drawing on hover
      if (!isDrawing) {
          return;
      }

      // To actually draw...
    }
  
    $canvas.addEventListener("pointerdown", handleStart);
    $canvas.addEventListener("pointerup", handleEnd);
    $canvas.addEventListener("pointercancel", handleEnd);
    $canvas.addEventListener("pointermove", handleMove);
  })();