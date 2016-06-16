/**
 * Created by U202_1 on 2016-06-08.
 */
import '../template/story.html';

import { Storys } from '../../imports/api/storys';

Session.setDefault('img_src');



Template.random.helpers({
    randomImage: function() {
        var src =Session.get('img_src');
        return src;
    },

});


Template.story.helpers({
    storys(){
        return Storys.find({});
    },
});

Template.story.events({
    'submit #search': function(event){
        event.preventDefault();

        var target = event.target;
        var values = target.hashtag.value;

        console.log(values);
    },
    'submit #addStory': function(event){
        event.preventDefault();

        var target = event.target;
        var values = target.storyString.value;
        var imageURL = $('#imgload').attr('src');



        Storys.insert({
            values,
            createdAt: new Date(),
            owner: Meteor.userId(),
            url: imageURL,
        });

        Meteor.call("unImage", function(error, results) {
            Session.set('img_src', results);
            console.log(results);
        });

        target.storyString.value = "";
    },
    'click #refresh':function(event){
        Meteor.call("unImage", function(error, results) {
            Session.set('img_src', results);
            console.log(results);
        });
    },
    'click #clicked':function(event, template){
    },
});