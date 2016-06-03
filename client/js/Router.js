Router.configure({
  layoutTemplate: 'layout',

});

Router.route('/', {name:'home'});
Router.route('/contact', {name:'contact'});
Router.route('/press', {name:'press'});
Router.route('/services', {name:'services'});

