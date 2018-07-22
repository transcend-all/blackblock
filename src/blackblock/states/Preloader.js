let Preloader = function(game){}

Preloader.prototype = {
  preload: function(){

    //cards
    this.game.load.image('ace_spade', 'assets/blackblock/1_spade.png')
    this.game.load.image('2_spade', 'assets/blackblock/2_spade.png')
    this.game.load.image('3_spade', 'assets/blackblock/3_spade.png')
    this.game.load.image('4_spade', 'assets/blackblock/4_spade.png')
    this.game.load.image('5_spade', 'assets/blackblock/5_spade.png')
    this.game.load.image('6_spade', 'assets/blackblock/6_spade.png')
    this.game.load.image('7_spade', 'assets/blackblock/7_spade.png')
    this.game.load.image('8_spade', 'assets/blackblock/8_spade.png')
    this.game.load.image('9_spade', 'assets/blackblock/9_spade.png')
    this.game.load.image('ten_spade', 'assets/blackblock/10_spade.png')
    this.game.load.image('jack_spade', 'assets/blackblock/jack_spade.png')
    this.game.load.image('queen_spade', 'assets/blackblock/queen_spade.png')
    this.game.load.image('king_spade', 'assets/blackblock/king_spade.png')

    this.game.load.image('ace_club', 'assets/blackblock/1_club.png')
    this.game.load.image('2_club', 'assets/blackblock/2_club.png')
    this.game.load.image('3_club', 'assets/blackblock/3_club.png')
    this.game.load.image('4_club', 'assets/blackblock/4_club.png')
    this.game.load.image('5_club', 'assets/blackblock/5_club.png')
    this.game.load.image('6_club', 'assets/blackblock/6_club.png')
    this.game.load.image('7_club', 'assets/blackblock/7_club.png')
    this.game.load.image('8_club', 'assets/blackblock/8_club.png')
    this.game.load.image('9_club', 'assets/blackblock/9_club.png')
    this.game.load.image('ten_club', 'assets/blackblock/10_club.png')
    this.game.load.image('jack_club', 'assets/blackblock/jack_club.png')
    this.game.load.image('queen_club', 'assets/blackblock/queen_club.png')
    this.game.load.image('king_club', 'assets/blackblock/king_club.png')

    this.game.load.image('ace_diamond', 'assets/blackblock/1_diamond.png')
    this.game.load.image('2_diamond', 'assets/blackblock/2_diamond.png')
    this.game.load.image('3_diamond', 'assets/blackblock/3_diamond.png')
    this.game.load.image('4_diamond', 'assets/blackblock/4_diamond.png')
    this.game.load.image('5_diamond', 'assets/blackblock/5_diamond.png')
    this.game.load.image('6_diamond', 'assets/blackblock/6_diamond.png')
    this.game.load.image('7_diamond', 'assets/blackblock/7_diamond.png')
    this.game.load.image('8_diamond', 'assets/blackblock/8_diamond.png')
    this.game.load.image('9_diamond', 'assets/blackblock/9_diamond.png')
    this.game.load.image('ten_diamond', 'assets/blackblock/10_diamond.png')
    this.game.load.image('jack_diamond', 'assets/blackblock/jack_diamond.png')
    this.game.load.image('queen_diamond', 'assets/blackblock/queen_diamond.png')
    this.game.load.image('king_diamond', 'assets/blackblock/king_diamond.png')

    this.game.load.image('ace_heart', 'assets/blackblock/1_heart.png')
    this.game.load.image('2_heart', 'assets/blackblock/2_heart.png')
    this.game.load.image('3_heart', 'assets/blackblock/3_heart.png')
    this.game.load.image('4_heart', 'assets/blackblock/4_heart.png')
    this.game.load.image('5_heart', 'assets/blackblock/5_heart.png')
    this.game.load.image('6_heart', 'assets/blackblock/6_heart.png')
    this.game.load.image('7_heart', 'assets/blackblock/7_heart.png')
    this.game.load.image('8_heart', 'assets/blackblock/8_heart.png')
    this.game.load.image('9_heart', 'assets/blackblock/9_heart.png')
    this.game.load.image('ten_heart', 'assets/blackblock/10_heart.png')
    this.game.load.image('jack_heart', 'assets/blackblock/jack_heart.png')
    this.game.load.image('queen_heart', 'assets/blackblock/queen_heart.png')
    this.game.load.image('king_heart', 'assets/blackblock/king_heart.png')

    this.game.load.image('deck', 'assets/blackblock/back-navy.png')

    //player controls
    this.game.load.image('deal', 'assets/blackblock/deal.png')
    this.game.load.image('hit', 'assets/blackblock/hit.png')
    this.game.load.image('stay', 'assets/blackblock/stay.png')
    this.game.load.image('bet', 'assets/blackblock/bet.png')

  },
  create: function(){
    this.game.state.start('Menu')
  }
}
