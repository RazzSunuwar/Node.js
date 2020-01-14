// NODE JS
// Node.js is open source server environment.
// Node.js allows you to run JavaScript on the server.

// Learning by Examples
// var http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World');
// }). listen(8080);

// A runtime environment for executing JavaScript code.
// We often use Node to build back-end services also called API(Application Programming Interface).
// it powered client applications
// 1. Web App
// 2. Mobile App
//      =
// Back-end Service

// Node is ideal for highly-scalable, data-intensive and real-time apps (Back-end services).

// Node is
// Great for prototyping and agaile development
// Superfast and highly scalable
// JavaScript everywhere
// Cleaner and more consistent codebase
// Large ecosystem of open-source libs

// Node applications are asynchronous by default
// Node continuously monitoring the Event queue in the background
// Node is ideal for I/O-intensive apps
// Note: Do not use Node for CPU-intensive apps

// Note: In node we don't have window or document objects


// Node core
// NODE MODULE SYSTEM
// In module system, we will cover os, fs, events https and also learn who to create own module system

// Global objects
// For example
// console.log();

// setTimeout();   //To call the function after the delay
// clearTimeout(); //Use to call the function repeatively, call the after the delay
// clearInterval();    //Which we use to stop that function from call repeatively
// //  This all above object belongs to window object

// In node we don't have window object instead of that we have "global" 

// we can access them like this
// global.console·log();
// globalThis.setTimeout() and so on.....

// Example of node function
// function myName(name){
//     console.log("My name is " + name);
// }
// myName("Razz");

//MODULES
// In node evey files are modules and variables and functions defined in that file are scoped to that
// module
// They are not available outside of that module

// Create and load the module
// logger.js

// Loading module
// TO load the module we should used keyword 'require'

// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname){
// })

// Path Module
/*The path module provides utilities for working with file and directory paths.
It can be accessed using:*/
/*const path =('path') */ 

// OS Module
/*The os module provides operating system-related utility methods and properties.
It can be accessed using: */
/*const os = require('os') */
// Note :
// template string
// Use of backtick char is same as single qoute
// Use of ${} is used to add place holder for argumnet

// File System Module
/*The fs module provides an API for interacting with the file system in a manner closely
modeled around standard POSIX functions. */
// To use this module:
// const fs = require('fs');

// Event Module
// Event is a signal that something has happened
// In Node we have a class called HTTP that we can use to build the web server. That http class raises
// an event and our job is to resonse that event which basically involve reading that request and
// returning the corect response

// Class is a container for properties and functions which we called methods

// or

/*Much of the Node.js core API is built around an idiomatic asynchronous event-driven architure in
which certain kinds of objects is (called "emmiters") emit named events that cause Function objects
("listeners") to be called.*/
// It can be accessed using:
// const EventEmitter = require('events');

// Event Arguments
// Add object object in the Raise an event
// Add argument or arg in the listener


// Extending EventEmitter
// lil bit hard check it time to time

// HTTP Module
/* Buliding block of code that which we use for creating networling appliction. for eg we create
web-server that listen for http request on given port.  We can easily create back-end service
for our client application like web application that we build with React or Angular or mobile
appliction runnung on mobile device  */ 
// It can be accessed using:
// const http =    require('http')













