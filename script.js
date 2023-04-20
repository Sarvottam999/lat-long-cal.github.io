var form = document.getElementById("myForm");
    //   reload 
    function reloadPage() {
      location.reload();
    }

    
    // ---------------------------------------------------------------------

    function drawCoordinateSystem() {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");

      // Draw x 
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.stroke();
      //and y axis
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, canvas.height);
      ctx.stroke();


      // Label the axes
      ctx.font = "16px Arial";
      ctx.fillText("longitude = x", canvas.width - 100, canvas.height - 10);
      ctx.fillText("y =  latitude", 0 + 10, 0 + 20);
    }
    // drawCoordinateSystem();
    // 
    // ---------------------------   plot x and y    ------------------------------------------
    // 


    function plotPoint(x, y, text) {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");

      // Convert coordinates to canvas coordinates
      var canvasX = 0 + x;
      var canvasY = canvas.height - y;

      // Draw point
      ctx.beginPath();
      ctx.arc(canvasX, canvasY, 3, 0, 2 * Math.PI);
      ctx.fill();

      ctx.font = "16px Arial";
      ctx.fillText(text, canvasX +4, canvasY+4);
      // ctx.fillText("y", 0 + 10, 0 + 10);
    }


function drawLine(ctx, xx1, yy1, xx2,yy2, stroke = 'black', width = 3) {
  var canvas = document.getElementById("myCanvas");
      // var ctx = canvas.getContext("2d"); 
  //converted axis
      var x1 = 0 + xx1;
      var y1 = canvas.height - yy1;

      var x2 = 0 + xx2;
      var y2 = canvas.height - yy2;
        // start a new path
        var dx = x2 - x1;
        var dy = y2 - y1;
        var distance = Math.sqrt(dx * dx + dy * dy);
        ctx.beginPath();

        // place the cursor from the point the line should be started 
        ctx.moveTo(x1, y1);

        // draw a line from current cursor position to the provided x,y coordinate
        ctx.lineTo(x2, y2);

        // set strokecolor
        ctx.strokeStyle = stroke;

        // set lineWidht 
        ctx.lineWidth = width;

        // add stroke to the line 
        ctx.stroke();

        ctx.font = "12px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Distance: " + distance.toFixed(5), x1 + dx/2, y1 + dy/2);

      }
    
    
      //  --------------------------------------------------
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
      // drawCoordinateSystem();
      // ============    bom 1 ========================
      bomb1_latitude_y = parseFloat(document.getElementById("bomb1_latitude_y").value);
      bomb1_longitude_x = parseFloat(document.getElementById("bomb1_longitude_x").value);
      console.log(bomb1_latitude_y, "   ", bomb1_longitude_x)
       plotPoint(
         bomb1_longitude_x,

        bomb1_latitude_y,
          "bomb 1 ");
      // ============    bom 2 ========================
      bomb2_latitude_y = parseFloat(document.getElementById("bomb2_latitude_y").value);
      bomb2_longitude_x = parseFloat(document.getElementById("bomb2_longitude_x").value);
      console.log(bomb2_latitude_y, "   ", bomb2_longitude_x)
       plotPoint(
         bomb2_longitude_x,
        bomb2_latitude_y,
          "bomb 2");
       // ============    target ========================
      target_latitude_y = parseFloat(document.getElementById("target_latitude_y").value);
      target_longitude_x = parseFloat(document.getElementById("target_longitude_x").value);
      console.log(target_latitude_y, "   ", target_longitude_x)


       plotPoint(
        target_longitude_x, 
        target_latitude_y,
        "target");


       // mean of x of bom1 & 2
             
       var mean_longitude_x  = (bomb1_longitude_x + bomb2_longitude_x)/2
       console.log("mean_longitude_x   ",mean_longitude_x)
      
       // mean of y of bom1 & 2
        var mean_latitude_y  = (bomb1_latitude_y + bomb2_latitude_y)/2;
       console.log("mean_latitude_y   ",mean_latitude_y)

 

       document.getElementById("mean_longitude_x").value= mean_longitude_x;
       document.getElementById("mean_latitude_y").value= mean_latitude_y;


    //    document.getElementById("mean_longitude_x").innerHTML = "mean longitude  (bomb 1 & 2) : " +mean_longitude_x   ;
    //    document.getElementById("mean_latitude_y").innerHTML = "mean latitude (bomb 1 & 2) : " +mean_latitude_y   ;



       var c = document.getElementById("myCanvas");
          ctx = c.getContext('2d');
       drawLine(ctx,
       target_longitude_x, 

       target_latitude_y,
       mean_longitude_x ,

       mean_latitude_y

       );

      //  diffrence if mean and target
      

      // x
      diff_long_x = (target_longitude_x - mean_longitude_x).toFixed(5);
      console.log("diff_long_x   ",diff_long_x)
       document.getElementById("diff_long_x").value= diff_long_x;

      //y
      diff_lati_y = (target_latitude_y - mean_latitude_y).toFixed(5);
      console.log("diff_lati_y   ",diff_lati_y)
      document.getElementById("diff_lati_y").value= diff_lati_y;

    //   document.getElementById('setText').value= setText;
    //   document.getElementById("difference").innerHTML = "difference between mean and longitude  = " +diff_long_x +"<br> "+"difference between mean and letitude = " +diff_lati_y ;



      console.log(diff_long_x, " ---- ", diff_lati_y)


        if (diff_long_x < 0) {
            document.getElementById("longitude_tuning").innerHTML = "LEFT (-) : " +diff_long_x   ;
      document.getElementById("longitude_tuning").value=  "LEFT (-) : " +diff_long_x ;

          
        } else  {
        document.getElementById("longitude_tuning").innerHTML = "RIGHT (+) : " +diff_long_x   ;
      document.getElementById("longitude_tuning").value= "RIGHT (+) : " +diff_long_x ;

         }
        //  ----------------------------------------------
        if (diff_lati_y < 0) {
            document.getElementById("latitude_tuning").innerHTML = "DOWN (-) : " +diff_lati_y   ;
      document.getElementById("latitude_tuning").value= "DOWN (-) : " +diff_lati_y ;

          
        } else  {
        document.getElementById("latitude_tuning").innerHTML = "UP (+) : " +diff_lati_y   ;
      document.getElementById("latitude_tuning").value=  "UP (+) : " +diff_lati_y;

         }


      // document.getElementById("positions").innerHTML = "difference between mean and latitude  = " +diff_lati_y +"<br> "+"difference between mean and longitude = " +diff_long_x ;


    
    }
    )

    // ---------------------------------------------------------------------

    window.addEventListener("load", drawCoordinateSystem);
