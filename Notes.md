### Notes


#### console.log
NB As explained in part 1, when you use the command console.log for debugging, 
don't concatenate things 'the Java way' with a plus. Instead of writing:

console.log('props value is' + props)

separate the things to be printed with a comma:

console.log('props value is', props)

If you concatenate an object with a string and log it to the console (like in our first example), the result will be pretty useless:

props value is [Object object]

On the contrary, when you pass objects as distinct arguments separated by commas to console.log,
like in our second example above, the content of the object is printed to the developer console 
as strings that are insightful.


#### JavaScript Arrays

* YouTube video series: Functional Programming in Javascript
** https://youtu.be/BMUiFMZr7vk

