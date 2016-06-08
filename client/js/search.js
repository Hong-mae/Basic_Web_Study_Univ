/**
 * Created by U202_1 on 2016-06-08.
 */
import '../NavElement/story.html';

Template.story.events({
   'submit #search': function(event){
       event.preventDefault();
       
       var target = event.target;
       var values = target.hashtag.value;

       console.log(values);
   },
});