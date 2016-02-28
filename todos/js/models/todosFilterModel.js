applications.models.TodosFilterModel = (function listModelCreation() {

  function TodosFilterModel (filter) {
    this.filter = filter;
  }
  

  function get() { return this.filter; }

  function set (filter) { this.filter = filter; }
  	
                        
  TodosFilterModel.prototype.get = get;

  TodosFilterModel.prototype.set = set;
                       
  return TodosFilterModel;
  
})();