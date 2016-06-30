"use strict";

function Item(data) {
  this.title = ko.observable(data.title);
  this.isDone = ko.observable(data.isDone);
}

var TodoViewModel = function(items) {
  var self = this;

  self.todos = ko.observableArray(items);
  self.itemToAdd = ko.observable("");

  self.incompleteTodos = ko.computed(function() {
    return ko.utils.arrayFilter(self.todos(), task => !task.isDone() );
  })

  self.addItem = function () {
    if (self.itemToAdd() != ""){
      //add the new item
      self.todos.push(new Item({
        title: self.itemToAdd(),
        isDone: false
      }));
      //reset the input field
      self.itemToAdd("");
    }
  }

  self.removeItem = item => self.todos.remove(item);
}

var someItems = [{title: "Watch Silicon Valley on HBO", isDone:false}, {title: "Go climbing", isDone: false}, {title: "Read 'The Pragmatic Programmer'", isDone: false}].map( item => new Item(item));

ko.applyBindings(new TodoViewModel(someItems));
