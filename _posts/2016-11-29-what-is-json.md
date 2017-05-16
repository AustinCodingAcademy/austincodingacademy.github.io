---
layout: post
title: What Is JSON and What Is JSON Used For?
date: '2016-11-29'
categories:
  - Uncategorized
tags: []
image: 'htmlimage.jpg'
permalink: 'blog/what_is_json_and_what_is_json_used_for'
---

By Joseph McCullough



Whether you are a front end or back end developer, understanding the purpose and uses of JSON will enable you to easily add stunning functionality to your web applications. Knowing when to use JSON is practically a prerequisite for any web development position.

WHAT EXACTLY IS JSON?
JSON stands for JavaScript Object Notation. JSON is a lightweight data-interchange format. We can represent any data in the JSON format if we can boil down the data to its core attributes.

WHAT DOES JSON LOOK LIKE?

Suppose we're developing software for a grocery store. We've been tasked with periodically sending the store's inventory to a centralized server. The store's inventory consists of "products". And each product has the following attributes:

product name
price
number in stock
Data for a few example products are listed below:

- 2 Liter Dr. Pepper
  Price: $1.99
  Quantity in stock: 10

- Snickers
  Price: $0.99
  Quantity in stock: 5

- Bottled Water
  Price: $1.49
  Quantity in stock: 8

Here's how that data would look represented as JSON

```json
{
  "inventory": {
    "products": [
      {
        "name": "Dr. Pepper 2 Liter",
        "price": 1.99,
        "quantity": 10
      },
      {
        "name": "Snickers",
        "price": 0.99,
        "quantity": 5
      },
      {
        "name": "Bottled Water",
        "price": 1.49,
        "quantity": 8
      }
    ]
  }
}
```

### WHY IS JSON USEFUL?


JSON is language-agnostic. Even though JSON stands for JavaScript Object Notation, many languages beyond JavaScript understand JSON. There are numerous languages that contain libraries for not only representing data in the JSON format (known as JSON encoding), but also for taking JSON and converting the JSON into data within the program (known as JSON decoding). Some languages with JSON support (either natively or through libraries) that come to mind include:



- JavaScript
- Python
- Ruby
- Go
- C/C++
- Java
- And wayyyyyyyy more!

Consequently, it's easy to have programs written in different languages communicate with each other. If a server written in Python wants to send data to a server written in Java, the Python server just has to JSON encode any data it wants to send. Then the Java Server, upon receiving the JSON, only has to JSON decode the string in order to have access to the data items within the JSON. Generally, the encoding and decoding processes are extremely simple.

In Python, for example, the process for converting a JSON string into its associated data takes only a couple of lines of code!

```js
var json_str = '{"x": 15,"y": 30}'
var data = json.loads(json_str)
var data['x'] + data['y']
//=> 45
```
**Here's the same operation in PHP**

<!-- ?php $json_str = '{"x": 15,"y": 30}'; $data = json_decode($json_str); echo $data->x + $data->y;<br ? -->

### WHERE IS JSON USED?


JSON can be used in nearly any scenario where two services are communicating with each other. All that's required is that



the service sending the data can represent the data in the JSON format
the service receiving the data can convert data represented at JSON into data usable throughout the application.
In web development, JSON is used to facilitate communication to both internal and external services.

**Internal communication**

In order to create a fluid user experience, web applications generally use JavaScript to fetch data from an internal server and live-update the page with the retrieved data. This strategy is known as AJAX. To quote the [Mozilla Developer documentation](https://developer.mozilla.org/en-US/docs/AJAX) regarding AJAX,

[When AJAX is used], web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.

Although X in Ajax stands for XML, JSON is used more than XML nowadays because of its many advantages such as being lighter and a part of JavaScript.

**External communication**

Many REST APIs, which provide awesome functionality to web applications, use JSON as the primary means of communication. Take [Stripe](https://stripe.com) for example. Stripe uses JSON as the way to send responses to application developers about the status of credit card transactions. In the [Stripe documentation](https://stripe.com/docs/api/curl#charge_object), stripe provides an example credit card charge response so developers can predict the JSON structure their applications will receive.

As another example, [Twilio](https://www.twilio.com/) is an SMS gateway provider that provides a simple REST API so developers can make their applications send text messages or make phone calls. In the [Twilio documentation](https://www.twilio.com/docs/api/rest/sending-messages#example-1), you can see an example JSON response developers can expect once they've requested that Twilio send a text message to a phone.

Thus the combination of REST APIs and JSON means you don't have to know how the financial sector works in order to make your application accept credit cards, nor do you need insight into the intricacies of the Telecom industry to make your application send text messages to users - you just have to understand how to send JSON and receive JSON!

**JSON REST API directory**

The folks over at ProgrammableWeb have curated a list of REST APIs that communicate via JSON. Check out [their directory](http://www.programmableweb.com/category/all/apis?data_format=21173) to see the functionality you can add to your application just by sending and receiving JSON!

### ARE THERE ALTERNATIVES TO JSON?


XML is an alternative mechanism for describing data. XML was the previously technology of choice for sending data through web services. As JSON's simplicity caused its popularity to rise, many developers realized XML's capabilities were overkill for the task of simply sending and receiving small amounts of data.



The Udemy Blog has a great article covering the [similarities and differences](https://blog.udemy.com/json-vs-xml/) between XML and JSON

**SUMMARY**
Thanks to the simplicity of JSON, it's now easier than ever to facilitate communication between different web applications - regardless of what programming languages were used to write the applications.
