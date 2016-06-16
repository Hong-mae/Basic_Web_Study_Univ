/**
 * Created by U202_1 on 2016-06-08.
 */
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'

export const Storys = new Mongo.Collection('storys');

Meteor.methods({
    'storys.insert'(values, imageURL, tags) {
        Storys.insert({
            values,
            createdAt: new Date(),
            owner: Meteor.userId(),
            url: imageURL,
            hash_Tag: tags,
        });
    }
});