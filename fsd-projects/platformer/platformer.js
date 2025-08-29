$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    
  createPlatform(300,700,100,20,"lime"); 

  createPlatform(500,600,100,20,"lime");

  createPlatform(800,500,100,20,"lime"); 

  createPlatform(1000,400,100,20,"lime");
  
  createPlatform(1200,300,100,20,"lime");




    // TODO 3 - Create Collectables

  createCollectable("diamond",1200,200) 
  
  createCollectable("max",700,450) 
  
  createCollectable("grace",1000,300) 

    
    // TODO 4 - Create Cannons

createCannon("right",500,2200) 

createCannon("bottom",900,950) 

createCannon("top",550,1000)

createCannon("left",500,2000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
