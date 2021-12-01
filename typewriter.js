const sentence = "hello there from lighthouse labs";

let i = 0;     //we should start looping at '0' :)
for (const char of sentence) {
  setTimeout(()=> {
     process.stdout.write(char); //this method-> continuously prints the information as the data is being retrieved and doesn't add a new line
  }, i);
  i += 50;     //increments time by -> 50ms
};

setTimeout(() => {
  process.stdout.write("\n");
}, i);
