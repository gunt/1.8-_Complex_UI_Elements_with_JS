(function() {
    var $canvas = document.querySelector('#canvas');
    var isDrawing = false;
    var previousX = null;
    var previousY = null;
  
    
    function handleStart(e) {
      isDrawing = true;
       // Initiate previousX/previousY
      var x = e.pageX; // X-coordinate of click/touch
      var y = e.pageY; // Y-coordinate of click/touch
      previousX = x;
      previousY = y;
  
    }
  
    function handleEnd() {
      isDrawing = false;
    }
  
    function handleMove(e) {
      // To prevent drawing on hover
      if (!isDrawing) {
        return;
      }
      
      var x = e.pageX; // X-coordinate of click/touch
      var y = e.pageY; // Y-coordinate of click/touch
     
      // This is canvas specific—we can use the context to draw shapes
      var ctx = $canvas.getContext('2d');
      
      // Draw a line from previousX/previousY to x/y
      ctx.beginPath();
      ctx.moveTo(previousX, previousY);
      ctx.lineTo(x, y);
      
      // Set the style of the line
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#ff0000';
      ctx.stroke();
      
      // Set previous coordinates for next move event
      previousX = x;
      previousY = y;
    }
  
    $canvas.addEventListener("pointerdown", handleStart);
    $canvas.addEventListener("pointerup", handleEnd);
    $canvas.addEventListener("pointercancel", handleEnd);
    $canvas.addEventListener("pointermove", handleMove);
  })();