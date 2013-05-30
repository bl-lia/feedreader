exports.index = function(req, res){
    res.render('reader', {title: "feedreader"});    
};

exports.callApi = function(req, res){
    res.jsonp({name: req.params.name});
};

exports.sandbox = function(req, res){
    res.render('sandbox');
};