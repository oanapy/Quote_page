 
 <!--from free codecamp. Additional settings are needed -->
function quoterish() {
  var quotes = ["Robert A. Heinlein said 'Women and cats will do as they please, and men and dogs should relax and get used to the idea.'", "Terry Pratchett, Lords and Ladies said 'If cats looked like frogs we'd realize what nasty, cruel little bastards they are. Style. That's what people remember'", " Albert Schweitzer said 'The only escape from the miseries of life are music and cats...'", "Terry Pratchett, Sourcery said 'I meant, what is there in this world that truly makes living worthwhile? Death thought about it. CATS, he said eventually. CATS ARE NICE' ", "Christopher Hitchens, The Portable Atheist: Essential Readings for the Nonbeliever said 'Owners of dogs will have noticed that, if you provide them with food and water and shelter and affection, they will think you are god. Whereas owners of cats are compelled to realize that, if you provide them with food and water and shelter and affection, they draw the conclusion that they are gods.' ", " George Carlin said 'Meow means woof in cat.'"];
 document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}
