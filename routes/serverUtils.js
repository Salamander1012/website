exports.gitPull = gitPull();

var gitPull = {
	get: function (req, res) {

		console.log("Pulling...")
		run_cmd("git pull origin master");
		console.log("Pulled!");
		res.send("Pulled!", 200);
	},
	post: function (req, res) {
		res.send("HEY YOU! Can't pull from GET request!");
	}
}

function run_cmd(cmd) {
    var sys = require('sys')
	var exec = require('child_process').exec;
	function puts(error, stdout, stderr) { sys.puts(stdout) }
	exec(cmd, puts);
}