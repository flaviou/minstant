Meteor.publish('users', function() {
  return Meteor.users.find();
});

Meteor.publish('chats', function() {
  return Chats.find({$or:[{user1Id:this.userId}, {user2Id:this.userId}]});
});
