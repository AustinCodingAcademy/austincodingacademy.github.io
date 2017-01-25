---
layout: post
title: How To Create a Digital JavaScript Clock In Three Easy Steps
date: '2016-11-29'
categories:
  - Uncategorized
tags: []
published: false
---
<!-- JS code needs to be organized -->
In this intermediate tutorial, you will learn how to create a digital JavaScript clock for your web page in three easy steps.

Many, many moons ago in a state of mind far, far away from my current, I was introduced to the Back to the Future movies, and boy did it leave an impression on my young, bizarre mind.

While I won't go as far as to say that it made me the man I am today, it did inspire my passion for time travel, and teach me some valuable "adulting" skills, like PG-13-level cussing, sliding sunglasses down the bridge of my nose like a bad ass, and, most importantly, keeping track of time and being punctual.

After that fateful day, I was obsessed with time, and more specifically, being on time. I wore a watch everywhere, even in the shower. My first watch came from a happy meal, and while it was chewed up by my dog within days, I was never discouraged. I still have most of my watches from throughout the years, those of which survived my wife's meticulous purging of unacceptable nostalgia. She really does bring out the best in me... (love you, babe!)

Whether or not you share my affinity for Back to the Future and punctuality is beside the point. You're here for the JavaScript, so let's fire up the flux capacitor and take this code to 88 MPH, shall we?!

**"WHAT THE HELL IS A GIGAWATT?!" LET'S GET STARTED...**

One of the main recurring themes in the Back to the Future trilogy looks at how changing past events manipulate future history, and time itself. This isn't quite a direct parallel with JavaScript, but for the sake of this tutorial, let's connect the dots.

We use JavaScript to manipulate a web page in real-time, listening to events that trigger a change in an HTML element or provide interactive elements on a page, like a working digital clock. This intermediate-level tutorial on JavaScript shows you how to do just that. And if my calculations are correct, once this code is properly set up on your webpage, you are going to see some seriously cool stuff.


The first step we need to do is retrieve the current time. We can do this by using JavaScript's Date class. First, create a new Date object with no parameters, which gives us a Date object containing the current date and time on the web visitor's computer:

`var currentTime = new Date();`

Next, we extract the hours, minutes, and seconds components of the current time from our Date object.
`var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds();`

STEP 2: HOW TO FORMAT THE TIME

We now have the three main values of time, so let's format them into a string for our web page. For this tutorial, we will format for a 12-hour clock, using "HH:MM:SS XX", where XX is either "AM" or "PM".

First, we'll add a leading zero to the minutes and seconds, if required:

`currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;`

The ? and : symbols used above comprise the ternary operator, a special operator that returns the value before the colon if the condition before the query (?) is true, or the value after the colon if the condition is false. It's a great way to write a shorthand "if" block if you need to return a single value.

Next, let's set a new variable, timeOfDay, to "AM" or "PM", and subtract 12 from the hours component in order to convert it to a 12-hour format. We will also want the hours component to show "12" instead of "0", so we need to add a check for this as well:

`var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";`

currentHours = ( currentHours < 12 ) ? currentHours - 12 : currentHours;

currentHours = ( currentHours == 0 ) ? 12 : currentHours;

Now, let's connect all our components into a single string, using the format "HH:MM:SS XX".

var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

Now that we have our time string ready for all the world to see, we need to add it to our web page. To do this, we need to create a span container in your HTML to hold the time display.

`<span id="clock">&amp;nsbsp;&gt;span&gt;`


I know what you're thinking, "Why the hell did you put the $nsbsp; in there?!". By placing the inside the span element, we created a child text node for the span in the DOM. Place this span on your page where you would like the JavaScript clock to appear.

We can then populate the span container with the time string by retrieving this node and then setting its NodeValue property. Check it out:

`document.getElementById("clock").firstChild.nodeValue = currentTimeString;`

**"YOU BUILT A TIME MACHINE... OUT OF A DELOREAN?!"**
Now that we've finished our JavaScript code, we need to wrap it in a JavaScript function, updateClock() and place it in the head element of our web page:
<!-- don't know how to organize this part below -->

```json
<script type="text/javascript"><br />
<!--</code></p>
<p><code>function updateClock ( )<br />
{<br />    
 var currentTime = new Date ( );</p>
<p> var currentHours = currentTime.getHours ( );<br />
 var currentMinutes = currentTime.getMinutes ( );<br />
 var currentSeconds = currentTime.getSeconds ( );</p>
<p> // Pad the minutes and seconds with leading zeros, if required<br />
currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;<br />
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;</p>
<p> // Choose either "AM" or "PM" as appropriate<br />
 var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";</p>
<p> // Convert the hours component to 12-hour format if needed<br />
 currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;</p>
<p> // Convert an hours component of "0" to "12"<br />
 currentHours = ( currentHours == 0 ) ? 12 : currentHours;</p>
<p> // Compose the string for display<br />
 var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;</p>
<p>// Update the time display<br />
 document.getElementById("clock").firstChild.nodeValue = currentTimeString;<br />
}</p>
<p>// --><br />
</script>`
```

In order to make our JavaScript clock update every second, we need to use the Window.setInterval() method from within the page's body tag to call our updateClock() function once per second. We also need to call updateClock() the moment the page loads, so that clock appears immediately. Simply drop this code into your body tag, like this:



The only thing left for you to do is add your own CSS to the clock container to make it look the way you want and you are done. Well done, friend. I think you earned tomorrow's hangover.

**SAY 'HI' TO YOUR MOM FOR ME...**

And that's how you create a digital JavaScript clock. Feel free to use any of the above JavaScript code to make your own digital clock. Use your own CSS styling or change the code to display military time, or not. Go crazy, you sexy coding beast.

Cheers,

Master Gonzo

"Come for the code, stay for the pop culture nostalgia."
