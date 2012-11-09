
var Bingo = function() {
    var currentGameNumber = 0;
    var totalWinners = 0;

    var fullBingoBalls = new Array(
        "B1",  "B2",  "B3",  "B4",   "B5", "B6",  "B7",  "B8",  "B9", "B10", "B11", "B12", "B13", "B14", "B15",
        "I16", "I17", "I18", "I19", "I20", "I21", "I22", "I23", "I24", "I25", "I26", "I27", "I28", "I29", "I30",
        "N31", "N32", "N33", "N34", "N35", "N36", "N37", "N38", "N39", "N40", "N41", "N42", "N43", "N44", "N45",
        "G46", "G47", "G48", "G49", "G50", "G51", "G52", "G53", "G54", "G55", "G56", "G57", "G58", "G59", "G60",
        "O61", "O62", "O63", "O64", "O65", "O66", "O67", "O68", "O69", "O70", "O71", "O72", "O73", "O74", "O75"
    );

    var fourCornersBingoBalls = new Array(
        "B1",  "B2",  "B3",  "B4",   "B5", "B6",  "B7",  "B8",  "B9", "B10", "B11", "B12", "B13", "B14", "B15",
        "I16", "I17", "I18", "I19", "I20", "I21", "I22", "I23", "I24", "I25", "I26", "I27", "I28", "I29", "I30",
        "N31", "N32", "N33", "N34", "N35", "N36", "N37", "N38", "N39", "N40", "N41", "N42", "N43", "N44", "N45",
        "G46", "G47", "G48", "G49", "G50", "G51", "G52", "G53", "G54", "G55", "G56", "G57", "G58", "G59", "G60",
        "O61", "O62", "O63", "O64", "O65", "O66", "O67", "O68", "O69", "O70", "O71", "O72", "O73", "O74", "O75"
    );

    var fourBalls = new Array("B1", "I23", "N36", "G52");


    var availableBalls = fullBingoBalls.slice(0);

    return {
        newGame : function() {
            availableBalls = fullBingoBalls.slice(0);
            availableBalls = fourBalls.slice(0);
            currentGameNumber++;
            return 1;
        },

        getCurrentGameNumber : function() {
          return currentGameNumber;
        },

        getTotalWinners : function() {
          return totalWinners;
        },

        buildBalls : function($tbody) {

            for (var i = 1; i <= 15; i++) {
                var bBall = "B" + i;
                var iBall = "I" + (i + 15);
                var nBall = "N" + (i + 30);
                var gBall = "G" + (i + 45);
                var oBall = "O" + (i + 60);
                        // <td><div class="ball ballfree">B1</div></td>
                var $bBall = $('<td><div id ="' + bBall + '" class="ball ballfree">' + bBall + '</div></td>');
                var $iBall = $('<td><div id ="' + iBall + '" class="ball ballfree">' + iBall + '</div></td>');
                var $nBall = $('<td><div id ="' + nBall + '" class="ball ballfree">' + nBall + '</div></td>');
                var $gBall = $('<td><div id ="' + gBall + '" class="ball ballfree">' + gBall + '</div></td>');
                var $oBall = $('<td><div id ="' + oBall + '" class="ball ballfree">' + oBall + '</div></td>');
                var $tr = $('<tr align="center"></tr>');

                $tr.append($bBall);
                $tr.append($iBall);
                $tr.append($nBall);
                $tr.append($gBall);
                $tr.append($oBall);

                $tbody.append($tr);


            }

            return $tbody;

        },

        buildHorizontalBalls : function($tbody) {
            var $bBalls = $('<tr></tr>');
            var $iBalls = $('<tr></tr>');
            var $nBalls = $('<tr></tr>');
            var $gBalls = $('<tr></tr>');
            var $oBalls = $('<tr></tr>');
            for (var i = 1; i<= 15; i++) {
                $bBalls.append($('<td><div id="B' + i + '" class="ball ballfree">B' + i + '</div></td>'));
                $iBalls.append($('<td><div id="I' + (i + 15) + '" class="ball ballfree">I' + (i + 15) + '</div></td>'));
                $nBalls.append($('<td><div id="N' + (i + 30) + '" class="ball ballfree">N' + (i + 30) + '</div></td>'));
                $gBalls.append($('<td><div id="G' + (i + 45) + '" class="ball ballfree">G' + (i + 45) + '</div></td>'));
                $oBalls.append($('<td><div id="O' + (i + 60) + '" class="ball ballfree">O' + (i + 60) + '</div></td>'));
            }

            $tbody.append($bBalls);
            $tbody.append($iBalls);
            $tbody.append($nBalls);
            $tbody.append($gBalls);
            $tbody.append($oBalls);
        },

        getNextBall : function() {

            var min = 0;
            var max = availableBalls.length;
            var index = Math.floor(Math.random() * max);

            var ball = availableBalls[index];
            availableBalls.splice(index, 1);

            return ball;
        },

        increaseWinners : function(num) {
            if (typeof(num) != 'undefined' && num > 0) {
                totalWinners += num;
            }
        }
    }
}
