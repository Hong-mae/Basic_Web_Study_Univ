/**
 * Created by U202_1 on 2016-06-17.
 */
import { Storys } from '../../imports/api/storys';

import '../template/myinfo.html'


Template.press.helpers({
    Mystorys(){
        return Storys.find({owner:Meteor.userId()},{sort: {createdAt: -1}});
    },
    FIRSTNAME(){
        return Meteor.user().profile.firstname;
    },
    LASTNAME(){
        return Meteor.user().profile.lastname;
    },
    USEREMAIL(){
        return Meteor.user().emails[0].address;
    }
});