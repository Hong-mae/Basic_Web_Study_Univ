/**
 * Created by U202_1 on 2016-06-08.
 */
import '../template/story.html';

import { Storys } from '../../imports/api/storys';
import { Tracker } from 'meteor/tracker';
import { ReactiveDict } from 'meteor/reactive-dict';

Session.setDefault('img_src');
Session.setDefault('hash','');

Template.story.onCreated(function storyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('storys');
});

Tracker.autorun(function(){
    Meteor.call("unImage", function(error, results) {
        Session.set('img_src', results);
    });
});

Template.random.helpers({
    randomImage: function() {
        var src =Session.get('img_src');
        return src;
    },
});


Template.story.helpers({
    storys(){
        var check = Session.get('hash');

        if(check === '') {
            return Storys.find({},{sort: {createdAt: -1}});
        }else{
            return Storys.find({hash_Tag:{$elemMatch:{tag:check}}}, {sort: {createdAt: -1}}) ;
        }
    },
});

Template.story.events({
    'submit #search': function(event){
        event.preventDefault();

        var target = event.target;
        var values = target.hashtag.value;

        Session.set('hash', values);

        target.hashtag.value = "";
    },
    'submit #addStory': function(event){
        event.preventDefault();

        var target = event.target;
        var values = target.storyString.value;
        var imageURL = $('#imgload').attr('src');

        var hashtag = $('#hash_Tag').val();
        var splitArray = hashtag.split(' ');
        var tags = new Array();

        for(var word in splitArray){
            word = splitArray[word];
            if(word.indexOf('#') == 0){
                tags.push({tag : word});
            }
        }

        Meteor.call('storys.insert', values, imageURL, tags);

        Meteor.call("unImage", function(error, results) {
            Session.set('img_src', results);
        });

        target.storyString.value = "";
        target.hash_Tag.value = "";
    },
    'click #refresh':function(event){
        Meteor.call("unImage", function(error, results) {
            Session.set('img_src', results);
            console.log(results);
        });
    },
});


