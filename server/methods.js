Meteor.methods({
  insertChat: function(newDoc) {
    var user = Meteor.userId();
    if (user) {
      newDoc['createdOn'] = new Date();
      newDoc['owner'] = Meteor.userId();
      return Chats.insert(newDoc);
    }
  },
  updateChat: function(id, newDoc) {
    var user = Meteor.userId();
    if (user) {
      Chats.upsert({_id:id}, newDoc);
    }
  }
});
