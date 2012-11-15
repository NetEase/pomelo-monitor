var processMonitor = require('../lib/processMonitor');

function test() {
	var param = {
		pid: process.pid,
		serverId: 'connector-server-1'
	};
	processMonitor.getPsInfo(param, function(data) {
		console.log('process information is :', data);
	});
};

for (var i = 0; i < 20; i ++) {
	test();
}
