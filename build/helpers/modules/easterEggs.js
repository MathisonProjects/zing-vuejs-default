require('easter-eggs');

export default {
	setup() {

        // Needed for IDing Keys for Easter Eggs
		// window.EasterEggs.show();

		// Konami Code 
        window.EasterEggs.addSequence(null,[38, 38, 40, 40, 37, 39, 37, 39, 66, 65],function(){
			console.log('Konami Code activated! Stage 1, Jungle')
		    var audio = new Audio('sound/contra.mp3');
			audio.play();
        });
        
        // Left Right Left
        window.EasterEggs.addSequence(null,[37, 39, 37, 39, 37, 39, 37, 39, 37, 39],function(){
			console.log('Left, Right, Left!');
        });
	}
}