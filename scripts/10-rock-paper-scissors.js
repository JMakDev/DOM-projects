
        // truthy falsy values optimised with operators/logical operators
        let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0,
        }

        updateScoreElement();


        // if (score === null) {
        //     score = {
        //         wins: 0,
        //         losses: 0,
        //         ties: 0,
        //     }
        // }

        function playGame(playeMove) {
            const computerMove = pickComputerMove();

            let result = '';

            if (playeMove === 'scissors') {

                if (computerMove === 'rock') {
                    result = 'loose'
                } else if (computerMove === 'paper') {
                    result = 'win'
                } else if (computerMove === 'scissors') {
                    result = 'Tie'
                }

            } else if (playeMove === 'paper') {

                if (computerMove === 'rock') {
                    result = 'win'
                } else if (computerMove === 'paper') {
                    result = 'Tie'
                } else if (computerMove === 'scissors') {
                    result = 'loose'
                }
            } else if (playeMove === 'rock') {
                if (computerMove === 'rock') {
                    result = 'Tie'
                } else if (computerMove === 'paper') {
                    result = 'loose'
                } else if (computerMove === 'scissors') {
                    result = 'win'
                }
            }


            //  update score
            if (result === 'win') {
                score.wins = score.wins + 1
            } else if (result === 'loose') {
                score.losses = score.losses + 1
            } else if (result === 'Tie') {
                score.ties = score.ties + 1
            }

            // inclusion of json && local storage
            localStorage.setItem('score', JSON.stringify(score))

            updateScoreElement();

            document.querySelector('.js-result')
                .innerHTML = result;

            document.querySelector('.js-moves')
                .innerHTML = `You chose <img src="images/${playeMove}-emoji.png" class="move-icon">

                Computer chose:
                chose <img src="images/${computerMove}-emoji.png" class="move-icon">
                `



            //             alert(`You picked ${playeMove}. Computer picked ${computerMove}. You ${result}.
            //  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `);
        }

        function updateScoreElement() {
            document.querySelector('.js-score')
                .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
        }

        function pickComputerMove() {
            const randomNumber = Math.random();

            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'paper'
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'scissors'
            }

            return computerMove;
        }