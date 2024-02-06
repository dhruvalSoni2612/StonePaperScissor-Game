let scorestr = localStorage.getItem("score");
      let score;
      resetScore(scorestr);

      function resetScore(scorestr) {
        score = scorestr
          ? JSON.parse(scorestr)
          : {
              Win: 0,
              Lose: 0,
              Tie: 0,
            };
        score.displayScore = function () {
          return `Your Score: ${score.Win} | Computer's Score: ${score.Lose} | Tie: ${score.Tie}`;
        };
        showResult();
      }

      function genaretComputerChoice() {
        let randomNumber = Math.random() * 3;
        if (randomNumber > 0 && randomNumber <= 1) {
          return "stone";
        } else if (randomNumber > 1 && randomNumber <= 2) {
          return "paper";
        } else {
          return "scissor";
        }
      }
      function getResult(userMove, computerChoice) {
        if (userMove === "stone") {
          if (computerChoice === "stone") {
            score.Tie++;
            return `It's Tie!`;
          } else if (computerChoice === "paper") {
            score.Lose++;
            return `Computer Win!`;
          } else {
            score.Win++;
            return `You Win!`;
          }
        } else if (userMove === "paper") {
          if (computerChoice === "stone") {
            score.Win++;
            return `You Win!`;
          } else if (computerChoice === "paper") {
            score.Tie++;
            return `It's Tie!`;
          } else {
            score.Lose++;
            return `Computer Win!`;
          }
        } else {
          if (computerChoice === "stone") {
            score.Lose++;
            return `Computer win!`;
          } else if (computerChoice === "paper") {
            score.Win++;
            return `You win!`;
          } else {
            score.Tie++;
            return `It is tie!`;
          }
        }
      }
      function showResult(userMove, computerChoice, resultMsg) {
        document.querySelector("#userMove").innerText =
          userMove !== undefined ? `You chosen: ${userMove}` : "";
        document.querySelector("#computerMove").innerText = computerChoice
          ? `Computer chose: ${computerChoice}`
          : "";
        document.querySelector("#result").innerText = resultMsg || "";
        document.querySelector("#score").innerText = score.displayScore();

        localStorage.setItem("score", JSON.stringify(score));
      }