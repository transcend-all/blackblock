let Game = function(game){
  hitCount = 0
  dealerHitCount = 0
  dealerScore = 0
  score = 0
  dealt = false

  houseCash = 1000000

  // playerCash = 1000
  playerBet = 0
  this.playerCash = 5000

  deck = [
    'ace_spade',
    'ace_club',
    'ace_diamond',
    'ace_heart',
    '2_spade',
    '2_club',
    '2_diamond',
    '2_heart',
    '3_spade',
    '3_club',
    '3_diamond',
    '3_heart',
    '4_spade',
    '4_club',
    '4_diamond',
    '4_heart',
    '5_spade',
    '5_club',
    '5_diamond',
    '5_heart',
    '6_spade',
    '6_club',
    '6_diamond',
    '6_heart',
    '7_spade',
    '7_club',
    '7_diamond',
    '7_heart',
    '8_spade',
    '8_club',
    '8_diamond',
    '8_heart',
    '9_spade',
    '9_club',
    '9_diamond',
    '9_heart',
    'ten_spade',
    'ten_club',
    'ten_diamond',
    'ten_heart',
    'jack_spade',
    'jack_club',
    'jack_diamond',
    'jack_heart',
    'queen_spade',
    'queen_club',
    'queen_diamond',
    'queen_heart',
    'king_spade',
    'king_club',
    'king_diamond',
    'king_heart',
  ]

  cardScore = deck.map(x => x[0])

  playerAced = false
  dealerAced = false
}

Game.prototype = {
  preload: function(){

  },
  create: function(){

    playerCash = this.playerCash

    this.game.stage.backgroundColor = '#0032B4'

    shoe = this.game.add.sprite(50,50,'deck')

    shoe.scale.setTo(0.5,0.5)

    dealButton = this.game.add.sprite(500,550,'deal')
    hitButton = this.game.add.sprite(100,400,'hit')
    stayButton = this.game.add.sprite(100,450,'stay')
    betButton = this.game.add.sprite(100,500,'bet')

    shoe.inputEnabled = true
    dealButton.inputEnabled = true
    hitButton.inputEnabled = true
    stayButton.inputEnabled = true
    betButton.inputEnabled = true

    shoe.events.onInputDown.add(this.deal, this)
    dealButton.events.onInputDown.add(this.cashOut,this)
    hitButton.events.onInputDown.add(this.hit, this)
    stayButton.events.onInputDown.add(this.stay, this)
    betButton.events.onInputDown.add(this.bet, this)

    dealerScoreText = this.game.add.text(100, 270, "dealer score: " + dealerScore, {font: "20px Arial", fill: "white"})
    playerScoreText = this.game.add.text(100, 300, "player score: " + score, {font: "20px Arial", fill: "white"})

    playerCashText = this.game.add.text(100, 350, "player cash: " + playerCash, { font: "20px Arial", fill: "white" })
    playerBetText = this.game.add.text(100, 380, "player bet: " + playerBet, { font: "20px Arial", fill: "white" })

    houseCashText = this.game.add.text(500,50, "house cash: " + houseCash, { font: "20px Arial", fill: "white"})

  },
  deal: function(){

    notifications = this.game.add.group()

    //dealer score basics
    dealerScore1 = Math.floor(Math.random() * 52)
    dealerScore2 = Math.floor(Math.random() * 52)

    dealerCard1 = deck[dealerScore1]
    dealerCard2 = deck[dealerScore2]

    dealerHand = this.game.add.group()

    dealerhand1 = this.game.add.sprite(300,100,dealerCard1)
    dealerhand2 = this.game.add.sprite(400,100,dealerCard2)

    dealerHand.add(dealerhand1)
    dealerHand.add(dealerhand2)

    dealerhand1.scale.setTo(0.5,0.5)
    dealerhand2.scale.setTo(0.5,0.5)

    dealerhand1.inputEnabled = true
    dealerhand2.inputEnabled = true

    //player score basics
    playerScore1 = Math.floor(Math.random() * 52)
    playerScore2 = Math.floor(Math.random() * 52)

    playerCard1 = deck[playerScore1]
    playerCard2 = deck[playerScore2]

    playerhand1 = this.game.add.sprite(300,400,playerCard1)
    playerhand2 = this.game.add.sprite(400,400,playerCard2)

    playerHand = this.game.add.group()

    playerHand.add(playerhand1)
    playerHand.add(playerhand2)

    playerhand1.scale.setTo(0.5,0.5)
    playerhand2.scale.setTo(0.5,0.5)

    // Calculate player's score
    if (cardScore[playerScore1] == 'a'){
      score += 11
      playerAced = true
    } else if (cardScore[playerScore1] == 't' || cardScore[playerScore1] == 'j' || cardScore[playerScore1] == 'q' || cardScore[playerScore1] == 'k') {
      score += 10
    } else {
      score += parseInt(cardScore[playerScore1])
    }

    if (cardScore[playerScore2] == 'a'){
      score += 11
      playerAced = true
    } else if (cardScore[playerScore2] == 't' || cardScore[playerScore2] == 'j' || cardScore[playerScore2] == 'q' || cardScore[playerScore2] == 'k') {
      score += 10
    } else {
      score += parseInt(cardScore[playerScore2])
    }


    if (score > 21 && playerAced == true) {
      score -= 10
    }

    playerScoreText.text = "player score: " + score

    // Calculate dealer's score
    if (cardScore[dealerScore1] == 'a'){
      dealerScore += 11
      dealerAced = true
    } else if (cardScore[dealerScore1] == 't' || cardScore[dealerScore1] == 'j' || cardScore[dealerScore1] == 'q' || cardScore[dealerScore1] == 'k') {
      dealerScore += 10
    } else {
      dealerScore += parseInt(cardScore[dealerScore1])
    }

    if (cardScore[dealerScore2] == 'a'){
      dealerScore += 11
      dealerAced = true
    } else if (cardScore[dealerScore2] == 't' || cardScore[dealerScore2] == 'j' || cardScore[dealerScore2] == 'q' || cardScore[dealerScore2] == 'k') {
      dealerScore += 10
    } else {
      dealerScore += parseInt(cardScore[dealerScore2])
    }


    if (dealerScore > 21 && dealerAced == true) {
      dealerScore -= 10
      dealerAced = false
    }

    console.log(cardScore[dealerScore1])
    console.log(cardScore[dealerScore2])
    console.log(dealerScore)
    dealerScoreText.text = "dealer score: " + dealerScore
    dealt = true
  },
  hit: function(){

    if (dealt) {
      let dealtCard = Math.floor(Math.random() * 52)

      if (cardScore[dealtCard] == 'a'){
        score += 11
        playerAced = true
      } else if (cardScore[dealtCard] == 't' || cardScore[dealtCard] == 'j' || cardScore[dealtCard] == 'q' || cardScore[dealtCard] == 'k') {
        score += 10
      } else {
        score += parseInt(cardScore[dealtCard])
      }

      if (score > 21 && playerAced == true) {
        score -= 10
        playerAced = false
      }


      playerNextCard = this.game.add.sprite(
        500 + (hitCount * 100),
        400,
        deck[dealtCard]
      )

      hitCount++

      playerHand.add(playerNextCard)

      playerNextCard.scale.setTo(0.5,0.5)

      if (score == 21) {
        resultText = this.game.add.text(200,350,'blackjack!')
        notifications.add(resultText)
        this.win()
        setTimeout(() => { this.newGame() }, 3000)
      }
      if (score > 21) {
        resultText = this.game.add.text(300, 250,'bust!')
        notifications.add(resultText)
        this.lose()
        setTimeout(() => { this.newGame() }, 3000)
      }

      playerScoreText.text = "player score: " + score
    }
  },
  dealerHit: function(){
    let dealtCard = Math.floor(Math.random() * 52)

    if (cardScore[dealtCard] == 'a'){
      dealerScore += 11
      dealerAced = true
    } else if (cardScore[dealtCard] == 't' || cardScore[dealtCard] == 'j' || cardScore[dealtCard] == 'q' || cardScore[dealtCard] == 'k') {
      dealerScore += 10
    } else {
      dealerScore += parseInt(cardScore[dealtCard])
    }

    if (dealerScore > 21 && dealerAced == true) {
      dealerScore -= 10
      dealerAced = false
    }

    dealerNextCard = this.game.add.sprite(
      500 + (dealerHitCount * 100),
      100,
      deck[dealtCard]
    )

    dealerHitCount++

    dealerHand.add(dealerNextCard)

    dealerNextCard.scale.setTo(0.5,0.5)

    dealerScoreText.text = "dealer score: " + dealerScore
  },
  stay: function(){
    if (dealt) {
      while (dealerScore < 17) {
        this.dealerHit()
      }

      if (dealerScore > 21) {
        resultText = this.game.add.text(300,300,"Dealer Busts, You Win!")
        this.win()
      } else if (score > dealerScore) {
        resultText = this.game.add.text(300,300,"You Win!")
        this.win()
      } else if (score == dealerScore){
        resultText = this.game.add.text(300,300,"Push!")
        this.push()
      } else {
        resultText = this.game.add.text(300,300,"You Lose!")
        this.lose()
      }

      notifications.add(resultText)

      setTimeout(() => { this.newGame() }, 3000)
    }
  },
  bet: function(){
    if (playerCash > 0 && dealt == false) {
      playerBet += 100
      playerCash -= 100
      playerBetText.text = "player bet: " + playerBet
      playerCashText.text = "player cash: " + playerCash
    } else {
      console.log('no money, no bets!')
    }
  },
  newGame: function(){
    score = 0
    dealerScore = 0
    hitCount = 0
    dealerHitCount = 0
    playerAced = false
    dealerAced = false
    dealt = false
    dealerHand.destroy()
    playerHand.destroy()
    dealerScoreText.text = "dealer score: " + 0
    playerScoreText.text = "player score: " + 0
    notifications.destroy()
  },
  win: function(){
    playerCash += (playerBet*2)
    houseCash -= playerBet
    playerBet = 0
    playerCashText.text = "player cash: " + playerCash
    houseCashText.text = "house cash: " + houseCash
    playerBetText.text = "player bet: " + playerBet
    this.playerCash = playerCash
  },
  lose: function(){
    houseCash += playerBet
    playerBet = 0
    playerCashText.text = "player cash: " + playerCash
    houseCashText.text = "house cash: " + houseCash
    playerBetText.text = "player bet: " + playerBet
    this.playerCash = playerCash
  },
  push: function(){
    playerCash += playerBet
    playerBet = 0
    playerCashText.text = "player cash: " + playerCash
    playerBetText.text = "player bet: " + playerBet
  },
  cashOut: function(){
    // playerCash = 0
    App.test()
    // App.handleGameTransfer()
    //transfter transferAMT from house account to player account
  },
  test: function(){
    console.log('Game.success!')
    console.log(this.playerCash)
  }
}
