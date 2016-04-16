if (Meteor.isClient) {
  // counter starts at 0
//event handler is template.commentsin.events...

Template.CommentsIn.events({
  'submit .new-comment'(event) {
    // Prevent default browser form submit
    //When 'submit happens' it will send information about the 'event'. this is the submit event
    //this is justa new line to see what happens.
    event.preventDefault();

    // Get value from form element
    //event.target is the element form
    //target.text.value gets the value of the input text
    //'const' means constant, 'var' = variable
    const target = event.target;
    const text = target.text.value;
    //so the way this works is, constant target is set to event.target
    //and then text 
    // Insert a task into the collection
    console.log("this is the event ",event);
    console.log("this is the text object?", target.text.value);

   KanyeComments.insert({
      textcommentinput: text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});
 /*
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}
*/

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
}
