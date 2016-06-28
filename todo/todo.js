var SimpleListModel = function(items) {
  this.todos = ko.observableArray(items);

  this.itemToAdd = ko.observable("");

  this.addItem = function () {
    if (this.itemToAdd() != ""){
      this.todos.push(this.itemToAdd());
      this.itemToAdd("");
    }
  }.bind(this);

  this.removeItem = function(item) { this.todos.remove(item) }.bind(this);
}


ko.applyBindings(new SimpleListModel(["Watch Silicon Valley on HBO", "Go climbing", "Read 'The Pragmatic Programmer'"]));