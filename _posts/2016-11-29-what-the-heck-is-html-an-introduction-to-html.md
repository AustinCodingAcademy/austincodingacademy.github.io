---
layout: post
title: What the Heck is HTML? An Introduction to HTML
date: '2016-11-29'
categories:
  - Uncategorized
tags: []
image: 'html5.jpg'
published: false
---


<!-- This page has lots of missing info -->


This is the first week in Austin Coding Academy's spring session, and a slew of new students began down the road to learning front-end web development over the next 10 weeks. That journey starts with an introduction to the basics: HTML and CSS.

Whether you are a new student, or just a curious learner who has wandered in from Google Street, welcome to the wild world of web development! There's a lot to learn, so for simplicity's sake, this post will only cover an introduction to HTML -- otherwise known as your new best friend.

Enough with the small talk, let's get started with the question we are all secretly asking ourselves (and Google):

### **What the HELL is HTML?**

HTML - short for **H**yper **T**ext **M**arkup **L**anguage - is a markup language used to create the structure of a web page.  HTML uses a variety of elements to describe how we want the web page to look like. In order to do this, we add code to the words we want to appear on the page.

Try visualizing HTML as the wood frame of a house.  This house is your web page or site, and the elements are determining its size and structure. Let's take a look at an example:

<!-- The link below needs an appropriate text -->

This is a visualization of an HTML page structure:Visualization courtesy of [www.w3schools.com](http:www.w3schools.com)



While only the "body" in white will be displayed by a web browser, all the elements in this example are important to a website's markup. A browser doesn't display the actual code, but uses them to determine how to display your content on a web page.

The example above isn't exactly how the code you write will look like in your HTML document. Here is a very basic example, don't worry if you don't understand it just yet:




```
<!DOCTYPE html>

<title>Page Title</title>
```






### My First Heading





My first paragraph.



What are all those words and brackets, you ask? Great question. Let's get into the weeds and find out.



By definition, an HTML element is commonly made up of two tags - an opening tag and a closing tag - and all the content that lies between them. A tag is a keyword enclosed by angled brackets, such as this:

```html
<p>text</p>
```

For this example, the browser will only display the word "text".



_Please Note: The terms "tag" and "element" are often used interchangeably - despite the definition you just read above - but I will be using them appropriately in this post to eliminate confusion._

Tags are like containers. They tell you something about the information that lies between their opening and closing tags. The characters inside the brackets indicate the tag's purpose. The opening and closing tags are identical, except for one detail - the closing tag includes a forward slash before the character: &lt; / p &gt;. This tells the browser that the tag's work is over.

Here the most common tags in reference to the HTML example above:

- The **&lt;!DOCTYPE html>** declaration defines the document type to be HTML. This element helps the web browser display the web page correctly, and must be the first element in your code.





- The text between **&lt;html&gt;** and **&lt;/html&gt;** describes an HTML document. This is also a necessary tag to include in your code.





- The text between **&lt;head&gt;** and **&lt;/head&gt;** provides information about the document. This will show up before the body tags and contains information about the page - like a page title tag.





- The text between **&lt;title&gt;** and **&lt;/title&gt;** provides a title for the document, and is always located inside the head tags. The contents of a title tag are displayed on the top of your browser tab.





- The text between **&lt;body&gt;** and **&lt;/body&gt;** describes the visible page content. All your actual content will go inside these tags. Everything inside this element is shown inside the main browser window.





- The text between **&lt;h1&gt;** and **&lt;/h1&gt;** describes a heading, ex: an article or page headline.





- The text between **&lt;p&gt;** and **&lt;/p&gt;** describes a paragraph.




An HTML attribute provides additional information about the contents of the element. Attributes appear in the opening tag of the element and are made up of two parts: a name and a value, separated by an equals sign.

Two of the common attributes are:

The **lang attribute**

 declares the document language and is always found in the opening HTML tag. This is important for both readers and search engines:

&lt;html lang="en-US"&gt;

The first two letters indicate the language, and the second part indicate the dialect.

Paragraphs use the


tag, and in this example, we are giving the paragraph tags a **title attribute**.

```html
<p title="about austin="" coding="" academy"="">
</p title="about>
```
If you hover over the paragraph with your cursor, the title will display as a tooltip.

HTML links are defined with the **[]()**

[ tag. The link address is specified in the

**href** **attribute**

:]()

[]()

[&lt;

a




href=

"]()

[//www.austincodingacademy.com](//www.austincodingacademy.com/)

"

&gt;

Link text goes here

<

/a

&gt;

The

**img attribute**

 is used to define HTML images. In this example,

the filename of the source (

**src**), and the size of the image (**width**and **height**

) are all provided as

**attributes**:

<img src="ACAlogo.jpg" width="160" height="160"&gt;

The **alt** **attribute**

 declares an alternative text to be used, when an HTML element cannot be displayed by the web browser (like a broken image or table):
```
<img src="ACAlogo.jpg" alt="Austin Coding Academy logo" width="160" height="160"&gt;</img src=
```



<!-- BOTH LINKS ARE DEAD -->

Whether you are web designer looking to add to your skill set, or someone looking to change careers into the wild world of web development, learning how to write HTML code can be a rewarding and lucrative experience. There are several [websites that will teach you how to code](//www.austincodingacademy.com/blog/5-free-coding-we…without-the-cost/ target="_blank") for free! But they will only take you so far…

If you are interested in learning how to use and master HTML without quitting your job, and you live in the Austin area, [check out when next session](//www.austincodingacademy.com/front-end/?&amp;utm_source=Blog&amp;utm_medium=Tactical&amp;utm_content=Control&amp;utm_campaign=14554") begins in May and save your spot in class.
