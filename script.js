
let target_latitude_y ;
let  target_longitude_x;
let  bomb1_latitude_y;
let bomb1_longitude_x ;
let diff_t_f1_lat ;
let diff_t_f1_log;
let bomb2_latitude_y;
let bomb2_longitude_x ;
let diff_t_f2_lat;
let diff_t_f2_log;   

let mean_longitude_x;
let mean_latitude_y;

let mean_log_diff_t;
let mean_lat_diff_t;

let mpi_latitude_y ;
let mpi_longitude_x;  

let mpi_log_diff_t;
let mpi_lat_diff_t;


function d_tf1( ) {

            // ============    target ========================
    target_latitude_y = parseFloat(document.getElementById("target_latitude_y").value);
    target_longitude_x = parseFloat(document.getElementById("target_longitude_x").value);
    console.log(target_latitude_y, "   ", target_longitude_x)

      // ============    bom 1 ========================
      bomb1_latitude_y = parseFloat(document.getElementById("bomb1_latitude_y").value);
      bomb1_longitude_x = parseFloat(document.getElementById("bomb1_longitude_x").value);
        diff_t_f1_lat = target_latitude_y-bomb1_latitude_y;
        diff_t_f1_log = target_longitude_x-bomb1_longitude_x;

        document.getElementById("diff_t_f1_lat").value = diff_t_f1_lat;
        document.getElementById("diff_t_f1_log").value = diff_t_f1_log;

        



        if (diff_t_f1_log < 0) {
       document.getElementById("diff_t_f1_log_corr").value=  "LEFT (-) : " +diff_t_f1_log ;

          
        } else  {
       document.getElementById("diff_t_f1_log_corr").value= "RIGHT (+) : " +diff_t_f1_log ;

         }
        //  ----------------------------------------------
        if (diff_t_f1_lat < 0) {
       document.getElementById("diff_t_f1_lat_corr").value= "DOWN (-) : " +diff_t_f1_lat ;

          
        } else  {
       document.getElementById("diff_t_f1_lat_corr").value=  "UP (+) : " +diff_t_f1_lat;

         }

         plotPoint(target_longitude_x,target_latitude_y, "Target", "green");
         plotPoint(bomb1_longitude_x,bomb1_latitude_y, "FOS 1", "black");



      }
      function d_tf2(){
         // ============    bom 2 ========================
      bomb2_latitude_y = parseFloat(document.getElementById("bomb2_latitude_y").value);
      bomb2_longitude_x = parseFloat(document.getElementById("bomb2_longitude_x").value);
      diff_t_f2_lat = target_latitude_y-bomb2_latitude_y;
      diff_t_f2_log = target_longitude_x-bomb2_longitude_x;

      document.getElementById("diff_t_f2_lat").value = diff_t_f2_lat;
        document.getElementById("diff_t_f2_log").value = diff_t_f2_log;

      if (diff_t_f2_log < 0) {
        document.getElementById("diff_t_f2_log_corr").value=  "LEFT (-) : " +diff_t_f2_log ;
 
           
         } else  {
        document.getElementById("diff_t_f2_log_corr").value= "RIGHT (+) : " +diff_t_f2_log ;
 
          }
         //  ----------------------------------------------
         if (diff_t_f2_lat < 0) {
        document.getElementById("diff_t_f2_lat_corr").value= "DOWN (-) : " +diff_t_f2_lat ;
 
           
         } else  {
        document.getElementById("diff_t_f2_lat_corr").value=  "UP (+) : " +diff_t_f2_lat;
 
          }
          plotPoint(bomb2_longitude_x,bomb2_latitude_y, "FOS 2", "black");
 

      }



      function mean(){
 
//  --------------  mean ---------------
       // mean of x of bom1 & 2 
             
       mean_longitude_x  = (bomb1_longitude_x + bomb2_longitude_x)/2
       
       // mean of y of bom1 & 2
          mean_latitude_y  = (bomb1_latitude_y + bomb2_latitude_y)/2;
          
 

       document.getElementById("mean_log").value= mean_longitude_x;
       document.getElementById("mean_lat").value= mean_latitude_y;

//  --------------  difference  ---------------
           // x
           mean_log_diff_t = (target_longitude_x - mean_longitude_x).toFixed(5);
             document.getElementById("mean_log_diff_t").value= mean_log_diff_t;
     
           //y
           mean_lat_diff_t = (target_latitude_y - mean_latitude_y).toFixed(5);
            document.getElementById("mean_lat_diff_t").value= mean_lat_diff_t;
        

    //  document.getElementById("diff_t_f2_lat").value = mean_lat_diff_t;
    //    document.getElementById("diff_t_f2_log").value = mean_log_diff_t;

     if (mean_log_diff_t < 0) {
       document.getElementById("mean_log_diff_t_corr").value=  "LEFT (-) : " +mean_log_diff_t ;

          
        } else  {
       document.getElementById("mean_log_diff_t_corr").value= "RIGHT (+) : " +mean_log_diff_t ;

         }
        //  ----------------------------------------------
        if (mean_lat_diff_t < 0) {
       document.getElementById("mean_lat_diff_t_corr").value= "DOWN (-) : " +mean_lat_diff_t ;

          
        } else  {
       document.getElementById("mean_lat_diff_t_corr").value=  "UP (+) : " +mean_lat_diff_t;

         }
         plotPoint(mean_longitude_x,mean_latitude_y, "mean","blue");

         var c = document.getElementById("canvas");
         ctx = c.getContext('2d');
         drawLine(ctx,mean_longitude_x,mean_latitude_y,target_longitude_x, target_latitude_y );

        //  (xx1: any, yy1: any, xx2: any, yy2: any, stroke?: string, width?: number): void
     }
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     mpi        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

     function mpi(){
      // ============    bom 2 ========================
      mpi_latitude_y = parseFloat(document.getElementById("mpi_latitude_y").value);
      mpi_longitude_x = parseFloat(document.getElementById("mpi_longitude_x").value);
      mpi_lat_diff_t = target_latitude_y- mpi_latitude_y;
      mpi_log_diff_t = target_longitude_x-mpi_longitude_x;


     document.getElementById("mpi_log").value = mpi_longitude_x;
     document.getElementById("mpi_lat").value = mpi_latitude_y;


     document.getElementById("mpi_log_diff_t").value = mpi_log_diff_t;
     document.getElementById("mpi_lat_diff_t").value = mpi_lat_diff_t;





   if (mpi_log_diff_t < 0) {
     document.getElementById("mpi_log_diff_t_corr").value=  "LEFT (-) : " +mpi_log_diff_t ;

        
      } else  {
     document.getElementById("mpi_log_diff_t_corr").value= "RIGHT (+) : " +mpi_log_diff_t ;

       }
      //  ----------------------------------------------
      if (mpi_lat_diff_t < 0) {
     document.getElementById("mpi_lat_diff_t_corr").value= "DOWN (-) : " +mpi_lat_diff_t ;

        
      } else  {
     document.getElementById("mpi_lat_diff_t_corr").value=  "UP (+) : " +mpi_lat_diff_t;

       }
       plotPoint(mpi_longitude_x,mpi_latitude_y, "mpi","black");


   }

  //  var canvas = document.getElementById("canvas");
  //  var ctx = canvas.getContext("2d");
  //  ctx.fillStyle = "blue";
  //  ctx.fillRect(0, 0, canvas.width, canvas.height);
     // ---------------------------------------------------------------------

     function drawCoordinateSystem() {
      var canvas = document.getElementById("canvas");
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
    drawCoordinateSystem();

    function plotPoint(x, y, text, color) {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      // Convert coordinates to canvas coordinates
      var canvasX = 0 + x;
      var canvasY = canvas.height - y;

      // Draw point
      ctx.fillStyle = color ; //red
      ctx.beginPath();
      ctx.arc(canvasX, canvasY, 3, 0, 2 * Math.PI);
      ctx.fill();

      ctx.font = "16px Arial";
      ctx.fillText(text, canvasX +4, canvasY+4);
      // ctx.fillText("y", 0 + 10, 0 + 10);
    }

    function drawLine( ctx,xx1, yy1, xx2,yy2, stroke = 'black', width = 3) {
      var canvas = document.getElementById("canvas");
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