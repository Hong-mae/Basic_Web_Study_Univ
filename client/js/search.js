/**
 * Created by U202_1 on 2016-06-08.
 */
import '../NavElement/story.html';

import '../../imports/ui/addStory';

Template.story.rendered= function(){
    Meteor.call("unImage", function(error, results) {
        Session.set('url', results.data.url);
    });
}


Template.story.helpers({
    randomImage: function() {
        return Session.get('url');
    }
});

Template.story.events({
   'submit #search': function(event){
       event.preventDefault();
       
       var target = event.target;
       var values = target.hashtag.value;

       console.log(values);
   },
});