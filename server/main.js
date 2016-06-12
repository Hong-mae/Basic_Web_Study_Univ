import '../imports/api/storys';

Meteor.methods({
    unImage: function() {
        var url = "http://www.splashbase.co/api/v1/images/random";

        // return url;
        var result = HTTP.get(url).data.url;
        return result;
    }
});