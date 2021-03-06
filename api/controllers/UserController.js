/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	hi : function (req, res){

		return res.send("hi there");
	},

	create : function(req, res, next) {
		console.log(req.ip);
		var nuad = {};

		User.create(req.params.all(), function userCreated(err, user){
			if (err) {
				console.log(err);
				var asdf = {};
				asdf["success"] = false;
				res.json(asdf);
				return next(err);
			}

			user["success"] = true;
			nuad = {
				us : user,
				where : "New user created",
				ip : req.ip.toString()
			};
			Uad.create(nuad).exec(function(err, reg){
				if (err) {
					return console.log(err);
				}
				console.log(reg);
				return reg
			});
			res.json(user);
		});

	},

	userLogin : function (req, res, next){


		var nuad = {};
		var edata,idata;
		edata = req.params.all();
		//console.log(edata.email);

		User.findOne({email : edata.email}).exec(function (err, data){

			var obj = {};
			if (err) {
				obj["success"] = false;

				return res.json(obj);

			}
			if (!data) {
				obj["success"] = false;
				return res.json(obj);
			}
			var d,v;
			d = edata.password;
			v = data.password;
			if (d == v) {
				obj = {

					"name" : data.name,
					"ut" : data.ut,
					"success" : true
				};
				nuad = {
					us : data,
					where : "User logged",
					ip : req.ip.toString()
				};
				Uad.create(nuad).exec(function(err, reg){
					if (err) {
						return console.log(err);
					}
					console.log(reg);
					return reg
				});
				console.log(obj);
				res.json(obj);
			}else {
				obj["success"] = false;
				return res.json(obj);
			}




		});


	},



};
