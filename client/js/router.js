Router.configure({
    layoutTemplate: 'layout',
});

Router.route("/", {name:"intro"});
Router.route("/story", {name:"story"});
Router.route("/press", {name:"press"});
Router.route("/contact", {name:"contact"});