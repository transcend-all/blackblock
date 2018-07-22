App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Cheques.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var ChequesArtifact = data;
      App.contracts.Cheques = TruffleContract(ChequesArtifact);

      // Set the provider for our contract.
      App.contracts.Cheques.setProvider(App.web3Provider);

      // Use our contract to retieve and mark the adopted pets.
      return App.getBalances();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#transferButton', App.handleTransfer);
  },

  handleTransfer: function(event) {
    event.preventDefault();

    var amount = parseInt($('#CQETransferAmount').val());
    var toAddress = $('#CQETransferAddress').val();

    console.log('Transfer ' + amount + ' CQE to ' + toAddress);

    var ChequesInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.Cheques.deployed().then(function(instance) {
        ChequesInstance = instance;

        return ChequesInstance.transfer(toAddress, amount, {from: account});
      }).then(function(result) {
        alert('Transfer Successful!');
        return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  getBalances: function() {
    console.log('Getting balances...');

    var ChequesInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.Cheques.deployed().then(function(instance) {
        ChequesInstance = instance;

        return ChequesInstance.balanceOf(account);
      }).then(function(result) {
        balance = result.c[0];

        $('#CQEBalance').text(balance);
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  test: function(){
    console.log(web3)
  },

  handleGameTransfer: function(event) {
    // event.preventDefault();

    var amount = blackblock.game.state.states["Game"].playerCash //parseInt($('#CQETransferAmount').val());
    var toAddress = $('#CQETransferAddress').val();

    console.log('Transfer ' + amount + ' CQE to ' + toAddress);

    var ChequesInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.Cheques.deployed().then(function(instance) {
        ChequesInstance = instance;

        return ChequesInstance.transfer(toAddress, amount, {from: account});
      }).then(function(result) {
        alert('Transfer Successful!');
        return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
