Raffler.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],
  initialize: function(){
    this.collection.on('reset',this.render, this);
  },
  render: function(){
    $(this.el).html(this.template({entries: this.collection}));    
    return this;
  }

});
