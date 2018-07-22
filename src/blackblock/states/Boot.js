let Boot = function(game){}

Boot.prototype = {
  preload: function() {

  },
  create: function(){
    this.game.stage.smoothed = false
    this.game.scale.minWidth = blackblock.baseWidth
    this.game.scale.minHeight = blackblock.baseHeight
    this.game.scale.maxWidth = blackblock.baseWidth * blackblock.scale
    this.game.scale.maxHeight = blackblock.baseHeight * blackblock.scale
    this.game.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true

    this.game.canvas.oncontextmenu = function(e) { e.preventDefault() }

    this.game.state.start('Preloader')
  },
  update: function(){

  }
}
