/**
 * Created by U202_1 on 2016-06-08.
 */
import { Template } from 'meteor/templating';

import { Storys } from '../api/storys.js';

import '../../client/NavElement/story.html';

Session.setDefault('img_src');

var count = 0;

Template.story.helpers({
   storys(){
       return Storys.find({});
   },
});

Template.random.helpers({
    randomImage: function() {
        var src =Session.get('img_src');
        return src;
    },

});

Template.story.events({
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

        target.storyString.value = "";
    },
    'click #refresh':function(event){
        Meteor.call("unImage", function(error, results) {
            Session.set('img_src', results);
            console.log(results);
        });
    }
});