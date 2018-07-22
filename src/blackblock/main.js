window.onload = function(){
  blackblock.game = new Phaser.Game(blackblock.baseWidth, blackblock.baseHeight, Phaser.AUTO, 'main-game00000000000000000000000')

  blackblock.game.state.add('Boot', Boot)
  blackblock.game.state.add('Preloader', Preloader)
  blackblock.game.state.add('Menu', Menu)
  blackblock.game.state.add('Game', Game)

  blackblock.game.state.start('Boot')
}
