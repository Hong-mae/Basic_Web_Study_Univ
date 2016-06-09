/**
 * Created by U202_1 on 2016-06-08.
 */
import { Template } from 'meteor/templating';

import { Storys } from '../api/storys.js';

import '../../client/NavElement/story.html';

Session.setDefault('img_src');

Template.story.helpers({
   storys(){
     return Storys.find({});
   },
});

Template.random.helpers({
    randomImage: function() {
        var src =Session.get('img_src');
        return src;
    }
});

Template.story.events({
    'submit #addStory': function(event){
        event.preventDefault();

        var target = event.target;
        var values = target.storyString.value;

        var splitedArray = values.split(" ");
        console.log(splitedArray[0]);

        Storys.insert({
            values,
            createdAt: new Date(),
        });

        target.storyString.value = "";
    },
    'click #refresh':function(event){
        Meteor.call("unImage", function(error, results) {
            var img = results.url;
            Session.set('img_src', img);

            console.log(img);
        });
    }
});