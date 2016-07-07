function Card(rank, suit){

	this.rank = rank;
	this.suit = suit;

}

function DeckConstructor(){


	this.makeDeck = function(){
		var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
	                    "J", "Q", "K"];
	    var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

	    this.deck = []


	    for (var i=0; i<suits.length; i++){
	    	for (var j=0; j<ranks.length; j++){
				this.deck.push(new Card(ranks[j], suits[i]));
	    	}
	    }
	    console.log(this.deck);

	}

	this.showDeck = function(){
		console.log(this.deck);
	}


	this.shuffle = function(){
	    	for(var i = 0; i<this.deck.length; i++){
	    		k = Math.floor(Math.random() * this.deck.length);
	    		temp = this.deck[i];
	            this.deck[i] = this.deck[k];
	            this.deck[k] = temp;
	    	}
	    	console.log(this.deck);
	}

	this.reset = function(){
		this.makeDeck();
	}

	this.deal_a_card = function(){
		var random = Math.floor((Math.random() * 52) + 1);
		var card = this.deck[random];
		this.deck.splice(random,1);
		console.log('Card:' + card['rank']+ " " + card['suit']);
		return card;
	}
}

function Player(name){

	this.name = name;
	this.hand = [];

    this.showHand = function(){
    	console.log(this.hand);
    }

	this.take_a_card = function(deck){
		var card = deck.deal_a_card();
		this.hand.push(card);
	}

	this.discard = function(card){
		this.hand.splice(this.hand[card],1);
	}

}


var mydeck = new DeckConstructor();
mydeck.makeDeck();
mydeck.shuffle();
mydeck.deal_a_card();
mydeck.showDeck();

var cole = new Player('Cole');
cole.take_a_card(mydeck);
cole.take_a_card(mydeck);
cole.showHand();
cole.discard(1);
cole.showHand();
