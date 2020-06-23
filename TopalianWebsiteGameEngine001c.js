javascript:(
function()
{
/*
Dedicated to God the Father 
All Rights Reserved Christopher Topalian Copyright 2020 
Topalian Website Game Engine, Camera Follows Player 
i is slow speed, o is medium speed, p is fast speed

W is up, S is Down, A is Left, D is Right. 
At the moment, the Follow Player method we are using works ONLY in MOZILLA FIREFOX. Make sure you are using Firefox. 

https://github.com/ChristopherTopalian/Topalian-Website-Game-Engine
*/

	function ourFunction()
	{
        var makePlayer = document.createElement("div");

            makePlayer.style.position="absolute";
            makePlayer.style.left= 0;
            makePlayer.style.top= 0;
            makePlayer.style.color="white";
            makePlayer.style.zIndex="15";
            makePlayer.style.fontFamily="exo";
            makePlayer.style.fontWeight="bold";
            makePlayer.style.fontSize="xx-large";
            makePlayer.style.width="50px";
            makePlayer.style.height="50px";
            makePlayer.style.background="rgba(76, 175, 180, 0.5)";
            makePlayer.style.textAlign="center";
            
            makePlayer.id = "thePlayer";
            document.body.append(makePlayer);

		/* Keyboard Letter Codes Being Pressed */
        var keyboard = {};
            keyboard.UP = 87;     
            keyboard.DOWN = 83;   
            keyboard.LEFT = 65;   
            keyboard.RIGHT = 68;         

        /* Player's start position and id */
        var ourPlayer = {
            x: 100,
            y: 300,
            speedMultiplier: 2,
            playerId: document.getElementById("thePlayer")
        };
            
        /* Key Press Detection */
        document.body.onkeyup =
        document.body.onkeydown = function(e){

        /*  Prevent Keyboard from Scrolling the Window  */
        /*
        if (e.preventDefault)
        {
            e.preventDefault();
        }
        else
        {
            e.returnValue = false;
        }
        */

        if(e.keyCode == 80) /* letter p */
        {
            ourPlayer.playerId.style.background="rgba(0, 175, 80, 0.5)";
            ourPlayer.speedMultiplier=4;
        }
        if(e.keyCode == 79)  /* letter o */
        {
            ourPlayer.playerId.style.background="rgba(76, 0, 80, 0.5)";
            ourPlayer.speedMultiplier=3;
        }
        if(e.keyCode == 73)  /* letter i */
        {
            ourPlayer.playerId.style.background="rgba(76, 175, 180, 0.5)";
            ourPlayer.speedMultiplier=2;
        }

        /* Find out which key was pressed */
        var theKeyCode = e.keyCode || e.which;
            keyboard[theKeyCode] = e.type == 'keydown';
        };
            
        /* Character Movement Updating */
        var movePlayer = function(theX, theY){
            ourPlayer.x += (theX||0) * ourPlayer.speedMultiplier;
            ourPlayer.y += (theY||0) * ourPlayer.speedMultiplier;
            
            ourPlayer.playerId.style.left = ourPlayer.x + 'px';
            ourPlayer.playerId.style.top = ourPlayer.y + 'px';
        };
            
        /* Player Controls */
        var sensePlayerMotion = function(){
            if(keyboard[keyboard.LEFT]){
                movePlayer(-1,0);
            }
            if(keyboard[keyboard.RIGHT]){
                movePlayer(1,0);
            }
            if(keyboard[keyboard.UP]){
                movePlayer(0,-1);
            }
            if(keyboard[keyboard.DOWN]){
                movePlayer(0,1);
            }
        };
            /* Update the Position of the player */
            movePlayer();

        function scrollIt()
        {
            document.getElementById("thePlayer").scrollIntoView({block: "center", inline: "center"});
        }

        /*
        var theFps = 1000/60;  

        window.setInterval(function(){
            sensePlayerMotion();
            scrollIt();
        }, theFps);
        */

        var theRefresh;
        function doThisLoop()
        {
            sensePlayerMotion();
            scrollIt();
            theRefresh = requestAnimationFrame(doThisLoop);
        }
        doThisLoop();

	}
	ourFunction();
})();
