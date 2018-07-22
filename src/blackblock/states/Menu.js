let Menu = function(game){}

Menu.prototype = {
  preload: function(){

  },
  create: function(){

    this.game.stage.backgroundColor = '#0032B4'

    this.game.add.text(275,100,"BLACKBLOCK")

    this.game.add.text(200,150,"Blackjack on the Blockchain")

    start = this.game.add.button(325,300,"deal",this.startGame,this)

    start.inputEnabled = true
  },
  startGame: function(){
    this.game.state.start('Game')
  }
}
