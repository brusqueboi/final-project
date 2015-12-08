if (Meteor.isClient) {

  Template.user.helpers({
    email: function () {
      return Meteor.user().profile.username;
    }
  });

}
