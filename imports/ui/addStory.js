/**
 * Created by U202_1 on 2016-06-08.
 */
import { Template } from 'meteor/templating';

import { Storys } from '../api/storys.js';

import '../../client/NavElement/story.html';

Template.story.helpers({
   storys(){
     return Storys.find({});
   },
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
    }
});