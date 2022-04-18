# JavaScript30
30 day Vanilla JavaScript challenge.

# 1. Day One

# DrumRoll
Learnt about the <kbd> element in HTML. - It represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.
The <kbd> tag is used to define keyboard input. The content inside is displayed in the browser's default monospace font.
Also learnt about data-.

*Other notable methods*

*querySelector()*
The querySelector() method returns the first element that matches a CSS selector.
To return all matches (not only the first), use the querySelectorAll() instead.
Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

*play()*
The play() method starts playing the current audio or video.
Tip: Use the pause() method to pause the current audio/video.

*.add*
The JavaScript Set add() method is used to add an element to Set object with a specified value. Each element must have a unique value.
Syntax
The add() method is represented by the following syntax:
setObj.add(value)

*this*
In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

this in a Method
When used in an object method, this refers to the object.
In the example on top of this page, this refers to the person object.
Because the fullName method is a method of the person object.

# fullName : function() {
#  return this.firstName + " " + this.lastName;
# }

*forEach*
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.
Syntax
array.forEach(function(currentValue, index, arr), thisValue)
Parameters
function()	Required.
A function to run for each array element.
currentValue	Required.
The value of the current element.
index	Optional.
The index of the current element.
arr	Optional.
The array of the current element.
thisValue	Optional. Default undefined.
A value passed to the function as its this value.