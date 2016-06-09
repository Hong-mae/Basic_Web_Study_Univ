import '../imports/api/storys';

Meteor.methods({
    unImage: function() {
        var url = "http://www.splashbase.co/api/v1/images/random";

        var result = HTTP.get(url).data;
        return result;
    }
});