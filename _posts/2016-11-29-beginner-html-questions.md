---
layout: post
title: Top 5 Beginner HTML Questions
date: '2016-11-29'
---
### Below are a list of the top 5 Intro to HTML/CSS questions we get at Austin Coding Academy
Answers provided by Joe McCullough

**Question: WHAT IS THE POINT OF NON-VISIBLE TAGS, SUCH AS `<head>`?**

A: Some elements, such as the `<head>` element, are intended to provide
metadata for the HTML document.
([What is metadata?](http://whatis.techtarget.com/definition/metadata)).
Other elements, such as the `<link>` element, instruct the browser to
include external resources like CSS files.


As another example, the `<meta>` element allows us to specify many properties of our HTML document.
([Example usage of the meta tag](http://www.tutorialspoint.com/html/html_meta_tags.htm)

Further reading: [W3Schools](http://www.w3schools.com/html/html_head.asp)

**Q: WHEN TO USE THE `<p>` TAG VS THE `<br />` TAG?**

A: A paragraph represents a paragraph of text. A paragraph of text should contain related ideas. A new paragraph should be opened if the upcoming content is sufficiently different from the content of the current paragraph.

What qualifies as "sufficiently different" is relative to the subject matter and up to the best judgement of the HTML author.

Example:

```html
<p>
  Hello! My name is Joe. I like playing 3rd strike, programming, and my cat, Odin.
</p>
<p>
  I have been programming since 2009. My first language was PHP. After exploring the back end, I decided I wanted to also learn JavaScript. In the end, Python ended up being my favorite language.
</p>
<p>
  Odin has been my best friend and companion since I was 16.
</p>
```

A tag is a line break. As stated in the official HTML5 specification,

>"`br` elements must be used only for line breaks that are actually part of the content, as in poems or addresses."

This means you should not use the tag to force a line within a paragraph. If you wish to force a line within a paragraph, you probably just need to close your current paragraph and open another one.

Citations:
* [W3 p element](http://www.w3.org/TR/html5/grouping-content.html#the-p-element)
* [w3 br element spec](http://www.w3.org/TR/html5/text-level-semantics.html#the-br-element)

**Q: WHAT'S THE DIFFERENCE BETWEEN ARTICLES AND SECTIONS?**

A: Read [HTML5 - Section or Article?](https://www.iandevlin.com/blog/2011/04/html5/html5-section-or-article)

**Q: WHY SHOULDN'T YOU USE `<table>` TAGS TO LAYOUT A PAGE?**

A: Read [CSS vs Tables: The Debate That Won't Die](http://vanseodesign.com/css/css-divs-vs-tables/)

**Q: HOW CAN I QUICKLY FIGURE OUT WHY MY CSS ISN'T WORKING AS INTENDED?**

A: Check out this quick and super helpful tutorial on using the [Chrome DevTools for CSS Debugging](https://www.youtube.com/watch?v=Z3HGJsNLQ1E)
