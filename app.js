var tello = {
	control: {
		host: '192.168.10.1',
		port: 8889
	},
	video: {
		port: 6037
	},
	commands: {
		TELLO_CMD_CONN: 1,
		TELLO_CMD_CONN_ACK: 2,
		TELLO_CMD_SSID: 17,
		TELLO_CMD_SET_SSID: 18,
		TELLO_CMD_SSID_PASS: 19,
		TELLO_CMD_SET_SSID_PASS: 20,
		TELLO_CMD_REGION: 21,
		TELLO_CMD_SET_REGION: 22,
		TELLO_CMD_REQ_VIDEO_SPS_PPS: 37,
		TELLO_CMD_TAKE_PICTURE: 48,
		TELLO_CMD_SWITCH_PICTURE_VIDEO: 49,
		TELLO_CMD_START_RECORDING: 50,
		TELLO_CMD_SET_EV: 52,
		TELLO_CMD_DATE_TIME: 70,
		TELLO_CMD_STICK: 80,
		TELLO_CMD_LOG_HEADER_WRITE: 4176,
		TELLO_CMD_LOG_DATA_WRITE: 4177,
		TELLO_CMD_LOG_CONFIGURATION: 4178,
		TELLO_CMD_WIFI_SIGNAL: 26,
		TELLO_CMD_VIDEO_BIT_RATE: 40,
		TELLO_CMD_LIGHT_STRENGTH: 53,
		TELLO_CMD_VERSION_STRING: 69,
		TELLO_CMD_ACTIVATION_TIME: 71,
		TELLO_CMD_LOADER_VERSION: 73,
		TELLO_CMD_STATUS: 86,
		TELLO_CMD_ALT_LIMIT: 4182,
		TELLO_CMD_LOW_BATT_THRESHOLD: 4183,
		TELLO_CMD_ATT_ANGLE: 4185,
		TELLO_CMD_SET_JPEG_QUALITY: 55,
		TELLO_CMD_TAKEOFF: 84,
		TELLO_CMD_LANDING: 85,
		TELLO_CMD_SET_ALT_LIMIT: 88,
		TELLO_CMD_FLIP: 92,
		TELLO_CMD_THROW_FLY: 93,
		TELLO_CMD_PALM_LANDING: 94,
		TELLO_CMD_PLANE_CALIBRATION: 4180,
		TELLO_CMD_SET_LOW_BATTERY_THRESHOLD: 4181,
		TELLO_CMD_SET_ATTITUDE_ANGLE: 4184,
		TELLO_CMD_ERROR1: 67,
		TELLO_CMD_ERROR2: 68,
		TELLO_CMD_FILE_SIZE: 98,
		TELLO_CMD_FILE_DATA: 99,
		TELLO_CMD_FILE_COMPLETE: 100,
		TELLO_CMD_HANDLE_IMU_ANGLE: 90,
		TELLO_CMD_SET_VIDEO_BIT_RATE: 32,
		TELLO_CMD_SET_DYN_ADJ_RATE: 33,
		TELLO_CMD_SET_EIS: 36,
		TELLO_CMD_SMART_VIDEO_START: 128,
		TELLO_CMD_SMART_VIDEO_STATUS: 129,
		TELLO_CMD_BOUNCE: 4179
	},
	rc: {
		RC_VAL_MIN     : 364,
		RC_VAL_MID     : 1024,
		RC_VAL_MAX     : 1684,

		IDX_ROLL       : 0,
		IDX_PITCH      : 1,
		IDX_THR        : 2,
		IDX_YAW        : 3
	},
	smart_video: {
		TELLO_SMART_VIDEO_STOP: 0x00,
		TELLO_SMART_VIDEO_START: 0x01,
		TELLO_SMART_VIDEO_360: 0x01,
		TELLO_SMART_VIDEO_CIRCLE: 0x02,
		TELLO_SMART_VIDEO_UP_OUT: 0x03,
	},
    TBL_CRC16: [
        0x0000, 0x1189, 0x2312, 0x329b, 0x4624, 0x57ad, 0x6536, 0x74bf, 0x8c48, 0x9dc1, 0xaf5a, 0xbed3, 0xca6c, 0xdbe5, 0xe97e, 0xf8f7,
        0x1081, 0x0108, 0x3393, 0x221a, 0x56a5, 0x472c, 0x75b7, 0x643e, 0x9cc9, 0x8d40, 0xbfdb, 0xae52, 0xdaed, 0xcb64, 0xf9ff, 0xe876,
        0x2102, 0x308b, 0x0210, 0x1399, 0x6726, 0x76af, 0x4434, 0x55bd, 0xad4a, 0xbcc3, 0x8e58, 0x9fd1, 0xeb6e, 0xfae7, 0xc87c, 0xd9f5,
        0x3183, 0x200a, 0x1291, 0x0318, 0x77a7, 0x662e, 0x54b5, 0x453c, 0xbdcb, 0xac42, 0x9ed9, 0x8f50, 0xfbef, 0xea66, 0xd8fd, 0xc974,
        0x4204, 0x538d, 0x6116, 0x709f, 0x0420, 0x15a9, 0x2732, 0x36bb, 0xce4c, 0xdfc5, 0xed5e, 0xfcd7, 0x8868, 0x99e1, 0xab7a, 0xbaf3,
        0x5285, 0x430c, 0x7197, 0x601e, 0x14a1, 0x0528, 0x37b3, 0x263a, 0xdecd, 0xcf44, 0xfddf, 0xec56, 0x98e9, 0x8960, 0xbbfb, 0xaa72,
        0x6306, 0x728f, 0x4014, 0x519d, 0x2522, 0x34ab, 0x0630, 0x17b9, 0xef4e, 0xfec7, 0xcc5c, 0xddd5, 0xa96a, 0xb8e3, 0x8a78, 0x9bf1,
        0x7387, 0x620e, 0x5095, 0x411c, 0x35a3, 0x242a, 0x16b1, 0x0738, 0xffcf, 0xee46, 0xdcdd, 0xcd54, 0xb9eb, 0xa862, 0x9af9, 0x8b70,
        0x8408, 0x9581, 0xa71a, 0xb693, 0xc22c, 0xd3a5, 0xe13e, 0xf0b7, 0x0840, 0x19c9, 0x2b52, 0x3adb, 0x4e64, 0x5fed, 0x6d76, 0x7cff,
        0x9489, 0x8500, 0xb79b, 0xa612, 0xd2ad, 0xc324, 0xf1bf, 0xe036, 0x18c1, 0x0948, 0x3bd3, 0x2a5a, 0x5ee5, 0x4f6c, 0x7df7, 0x6c7e,
        0xa50a, 0xb483, 0x8618, 0x9791, 0xe32e, 0xf2a7, 0xc03c, 0xd1b5, 0x2942, 0x38cb, 0x0a50, 0x1bd9, 0x6f66, 0x7eef, 0x4c74, 0x5dfd,
        0xb58b, 0xa402, 0x9699, 0x8710, 0xf3af, 0xe226, 0xd0bd, 0xc134, 0x39c3, 0x284a, 0x1ad1, 0x0b58, 0x7fe7, 0x6e6e, 0x5cf5, 0x4d7c,
        0xc60c, 0xd785, 0xe51e, 0xf497, 0x8028, 0x91a1, 0xa33a, 0xb2b3, 0x4a44, 0x5bcd, 0x6956, 0x78df, 0x0c60, 0x1de9, 0x2f72, 0x3efb,
        0xd68d, 0xc704, 0xf59f, 0xe416, 0x90a9, 0x8120, 0xb3bb, 0xa232, 0x5ac5, 0x4b4c, 0x79d7, 0x685e, 0x1ce1, 0x0d68, 0x3ff3, 0x2e7a,
        0xe70e, 0xf687, 0xc41c, 0xd595, 0xa12a, 0xb0a3, 0x8238, 0x93b1, 0x6b46, 0x7acf, 0x4854, 0x59dd, 0x2d62, 0x3ceb, 0x0e70, 0x1ff9,
        0xf78f, 0xe606, 0xd49d, 0xc514, 0xb1ab, 0xa022, 0x92b9, 0x8330, 0x7bc7, 0x6a4e, 0x58d5, 0x495c, 0x3de3, 0x2c6a, 0x1ef1, 0x0f78
    ],
    TBL_CRC8: [
        0x00, 0x5e, 0xbc, 0xe2, 0x61, 0x3f, 0xdd, 0x83, 0xc2, 0x9c, 0x7e, 0x20, 0xa3, 0xfd, 0x1f, 0x41,
        0x9d, 0xc3, 0x21, 0x7f, 0xfc, 0xa2, 0x40, 0x1e, 0x5f, 0x01, 0xe3, 0xbd, 0x3e, 0x60, 0x82, 0xdc,
        0x23, 0x7d, 0x9f, 0xc1, 0x42, 0x1c, 0xfe, 0xa0, 0xe1, 0xbf, 0x5d, 0x03, 0x80, 0xde, 0x3c, 0x62,
        0xbe, 0xe0, 0x02, 0x5c, 0xdf, 0x81, 0x63, 0x3d, 0x7c, 0x22, 0xc0, 0x9e, 0x1d, 0x43, 0xa1, 0xff,
        0x46, 0x18, 0xfa, 0xa4, 0x27, 0x79, 0x9b, 0xc5, 0x84, 0xda, 0x38, 0x66, 0xe5, 0xbb, 0x59, 0x07,
        0xdb, 0x85, 0x67, 0x39, 0xba, 0xe4, 0x06, 0x58, 0x19, 0x47, 0xa5, 0xfb, 0x78, 0x26, 0xc4, 0x9a,
        0x65, 0x3b, 0xd9, 0x87, 0x04, 0x5a, 0xb8, 0xe6, 0xa7, 0xf9, 0x1b, 0x45, 0xc6, 0x98, 0x7a, 0x24,
        0xf8, 0xa6, 0x44, 0x1a, 0x99, 0xc7, 0x25, 0x7b, 0x3a, 0x64, 0x86, 0xd8, 0x5b, 0x05, 0xe7, 0xb9,
        0x8c, 0xd2, 0x30, 0x6e, 0xed, 0xb3, 0x51, 0x0f, 0x4e, 0x10, 0xf2, 0xac, 0x2f, 0x71, 0x93, 0xcd,
        0x11, 0x4f, 0xad, 0xf3, 0x70, 0x2e, 0xcc, 0x92, 0xd3, 0x8d, 0x6f, 0x31, 0xb2, 0xec, 0x0e, 0x50,
        0xaf, 0xf1, 0x13, 0x4d, 0xce, 0x90, 0x72, 0x2c, 0x6d, 0x33, 0xd1, 0x8f, 0x0c, 0x52, 0xb0, 0xee,
        0x32, 0x6c, 0x8e, 0xd0, 0x53, 0x0d, 0xef, 0xb1, 0xf0, 0xae, 0x4c, 0x12, 0x91, 0xcf, 0x2d, 0x73,
        0xca, 0x94, 0x76, 0x28, 0xab, 0xf5, 0x17, 0x49, 0x08, 0x56, 0xb4, 0xea, 0x69, 0x37, 0xd5, 0x8b,
        0x57, 0x09, 0xeb, 0xb5, 0x36, 0x68, 0x8a, 0xd4, 0x95, 0xcb, 0x29, 0x77, 0xf4, 0xaa, 0x48, 0x16,
        0xe9, 0xb7, 0x55, 0x0b, 0x88, 0xd6, 0x34, 0x6a, 0x2b, 0x75, 0x97, 0xc9, 0x4a, 0x14, 0xf6, 0xa8,
        0x74, 0x2a, 0xc8, 0x96, 0x15, 0x4b, 0xa9, 0xf7, 0xb6, 0xe8, 0x0a, 0x54, 0xd7, 0x89, 0x6b, 0x35,
    ]
}


var seqID = 0;
var stickData = 0
var rcCtr = 0;

function setStickData(fast, roll, pitch, thr, yaw){
	stickData = (fast << 44) | (yaw << 33) | (thr << 22) | (pitch << 11) | (roll)
}

setStickData(0, tello.rc.RC_VAL_MID, tello.rc.RC_VAL_MID, tello.rc.RC_VAL_MID, tello.rc.RC_VAL_MID);

function _calcCRC16 (buf, size) {
	var i = 0
	var seed = 0x3692
	while (size > 0) {
		seed = tello.TBL_CRC16[(seed ^ buf[i]) & 0xff] ^ (seed >> 8)
		i = i + 1
		size = size - 1
	}
	return seed
}

function _calcCRC8(buf, size) {
	var i = 0
	var seed = 0x77
	while (size > 0) {
		seed = tello.TBL_CRC8[(seed ^ buf[i]) & 0xff]
		i++
		size--
	}
	return seed
}

function _buildPacket(pacType, cmdID, seqID, data) {
	var size = data?data.length:0;
	var size = 11 + size;
	bb = Buffer.alloc(size)
	bb.writeUInt8(0xCC,0)
	bb.writeUInt16LE(size << 3,1)
	crc8 = _calcCRC8([...bb], 3)
	bb.writeUInt8(crc8,3);
	bb.writeUInt8(pacType,4);
	bb.writeUInt16LE(cmdID,5);
	bb.writeUInt16LE(seqID,7);
	if (data) {
		bb.write(data,9)
	}
	crc16 = _calcCRC16([...bb], size - 2);
	bb.writeUInt16LE(crc16, size-2)
	return bb
}

function _parsePacket(buf) {
	var dataSize = 0;
	var cmdID    = 0;

	if (buf.length >= 11) {
		var bb = buf;
		console.log("To parce:", bb);
		var mark = bb.readUInt8(0);
		console.log("mark:", mark);
		if (mark == 0xCC) {
			var size = bb.readUInt16LE(1) >> 3;
			var crc8 = bb.readUInt8(3);
			var calcCRC8 = _calcCRC8([...bb], 3);
			if (crc8 != calcCRC8) {
				console.log('wrong CRC8',crc8, calcCRC8);
			}
			var pacType  = bb.readUInt8(4);
			var cmdID    = bb.readUInt16LE(5);
			var seqID    = bb.readUInt16LE(7);
			var dataSize = size - 11;
			var data     = false;
			var crc16    = bb.readUInt16LE(size - 2);
			var calcCRC16=_calcCRC16([...bb], size - 2);
			if (crc16 != calcCRC16) {
				console.log ('wrong CRC16', crc16, calcCRC16);
			}
			//console.log( 'pt:',pacType, 'cmd:', cmdID, 'seq:', seqID, 'data_sz:', dataSize, 'bufsize:', buf.length);
		} else {
			if (mark == 0x63) {
				var ack = Buffer.alloc(11);
				ack.write('conn_ack:');
				ack.writeUInt16LE(tello.video.port,9);
				if (ack.toString() == buf.toString()) {
					cmdID = tello.commands.TELLO_CMD_CONN_ACK;
					initVideo();
				} else {
					console.log('wrong video port !!', ack, buf);
				}
			} else {
				console.log ('wrong mark !! ', mark);
			}
		}
	} else {
		console.log('wrong packet', buf);
	}

	return cmdID
}

function _sendCmd(pacType, cmdID, data) {
	var bb      = false
	var payload = false
	var out     = false
	var seq = 0
	var len = 0

	if (cmdID == tello.commands.TELLO_CMD_CONN) {
		out = Buffer.alloc(11)
		out.write('conn_req:')
		out.writeUInt16LE(tello.video.port,9);
		seqID = seqID + 1
	} else if (cmdID == tello.commands.TELLO_CMD_STICK) {
		//console.log("to send:", "TELLO_CMD_STICK")
		now = new Date()
		bb = Buffer.alloc(11)
		
		// put 64bit stick data
		pp = Buffer.alloc(8)
		pp.writeUInt32BE(stickData >> 8, 0); //write the high order bits (shifted over)
		pp.writeUInt32BE(stickData & 0x00ff, 4); //write the low order bits
		pp.swap64();	// BE to LE?
		
		// get 48bit data only
		bb.write(pp.slice(0, 6).toString(),0);
		bb.writeUInt8(now.getHours(),6)
		bb.writeUInt8(now.getMinutes(),7)
		bb.writeUInt8(now.getSeconds(),8)
		bb.writeUInt16LE(now.getMilliseconds()*1000 & 0xffff,9)
		seq = 0
	} else if (cmdID == tello.commands.TELLO_CMD_DATE_TIME) {
		console.log("to send:", "TELLO_CMD_DATE_TIME")
		seq = seqID
		now = new Date()
		bb = Buffer.alloc(15)
		bb.writeUInt8(0x00,0)
		bb.writeUInt16LE(now.getYear(),1)
		bb.writeUInt16LE(now.getMonth(),3)
		bb.writeUInt16LE(now.getDay(),5)
		bb.writeUInt16LE(now.getHours(),7)
		bb.writeUInt16LE(now.getMinutes(),9)
		bb.writeUInt16LE(now.getSeconds(),11)
		bb.writeUInt16LE(now.getMilliseconds()*1000 & 0xffff,13)
		seqID = seqID + 1
	} else if (cmdID == tello.commands.TELLO_CMD_REQ_VIDEO_SPS_PPS) {
		console.log("to send:", "TELLO_CMD_REQ_VIDEO_SPS_PPS")
		seq = 0
	} else {
		seq = seqID
		seqID = seqID + 1
	}
	
	if (bb) {
		payload = bb.toString();
	} else {
		payload = data;
	}

	if (!out) out = _buildPacket(pacType, cmdID, seq, payload)

	if (cmdID != tello.commands.TELLO_CMD_STICK) {
		console.log("SEND:", cmdID, out);
	}
	tello_control.send(out,0,out.length, tello.control.port, tello.control.host, function(err, bytes) {
		//if (err) throw err;
		//console.log('UDP message sent', bytes,err);
		//client.close();)
	});
	//initVideo()
	return null
}

        var statusCtr = 0;
function _cmdRX (msg, addr) {
	//print '_threadCmdRX started !!!'
        var data = Buffer.from(msg);
        var payload = false;

		var size = msg.length;
        
                var cmdID   = _parsePacket(data);
                console.log("command = ", cmdID);
                var payload = data.slice(9,size);
               
                if (cmdID == tello.commands.TELLO_CMD_CONN_ACK) {
					console.log("TELLO_CMD_CONN_ACK")
                    console.log('connection successful !');
                
                } else if (cmdID == tello.commands.TELLO_CMD_DATE_TIME) {
					console.log("TELLO_CMD_DATE_TIME")
                    _sendCmd(0x50, cmdID, false)
                
                } else if (cmdID == tello.commands.TELLO_CMD_STATUS) {
					console.log("TELLO_CMD_STATUS", statusCtr);
                    if (statusCtr == 3) {
                        _sendCmd(0x60, tello.commands.TELLO_CMD_REQ_VIDEO_SPS_PPS, false)
                        _sendCmd(0x48, tello.commands.TELLO_CMD_VERSION_STRING, false)
                        _sendCmd(0x48, tello.commands.TELLO_CMD_SET_VIDEO_BIT_RATE, false)
                        _sendCmd(0x48, tello.commands.TELLO_CMD_ALT_LIMIT, false)
                        _sendCmd(0x48, tello.commands.TELLO_CMD_LOW_BATT_THRESHOLD, false)
                        _sendCmd(0x48, tello.commands.TELLO_CMD_ATT_ANGLE, false)
                        _sendCmd(0x48, tello.commands.TELLO_CMD_REGION, false)
                        _sendCmd(0x48, tello.commands.TELLO_CMD_SET_EV, 0x00);
					}
                    statusCtr = statusCtr + 1
                
                } else if (cmdID == tello.commands.TELLO_CMD_VERSION_STRING) {
					console.log("TELLO_CMD_VERSION_STRING")
                    if (size >= 42) {
                        console.log ('Version:' + data.slice(10,30).toString());
					}
                
                } else if (cmdID == tello.commands.TELLO_CMD_SMART_VIDEO_START) {
					console.log("TELLO_CMD_SMART_VIDEO_START")
                    if (payload.length > 0) {
                        console.log('smart video start');
					}
                        
                } else if (cmdID == tello.commands.TELLO_CMD_ALT_LIMIT) {
					console.log("TELLO_CMD_ALT_LIMIT")
                    if (payload.length > 0) {
                        //payload.get_ULInt8()                    # 0x00
                        height = payload.readUInt16LE(1)
                        console.log ('alt limit : ',height, ' meters');
                        
                        //if height != self.NEW_ALT_LIMIT:
                        //    print 'set new alt limit : {0:2d} meter'.format(self.NEW_ALT_LIMIT)
                        //    self._sendCmd(0x68, self.TELLO_CMD_SET_ALT_LIMIT, bytearray([self.NEW_ALT_LIMIT & 0xff, (self.NEW_ALT_LIMIT >> 8) & 0xff]));
					}
               
                } else if (cmdID == tello.commands.TELLO_CMD_SMART_VIDEO_STATUS) {
					console.log("TELLO_CMD_SMART_VIDEO_STATUS")
                    if (payload.length > 0) {
                        var resp = payload.readUInt8()
                        var dummy = resp & 0x07
                        var start = (resp >> 3) & 0x03
                        var mode  = (resp >> 5) & 0x07
                        console.log ('smart video status - mode:, start:', mode, start);
                        _sendCmd(0x50, tello.commands.TELLO_CMD_SMART_VIDEO_STATUS, 0x00);
					}
				}
}


function _timerTask() {
        _sendCmd(0x60, tello.commands.TELLO_CMD_STICK, false);
        rcCtr++

        //every 1sec
        if (rcCtr % 50 == 0) {
            _sendCmd(0x60, tello.commands.TELLO_CMD_REQ_VIDEO_SPS_PPS, false)
		}
}



const dgram = require('dgram');
const tello_control = dgram.createSocket('udp4');
const tello_video = dgram.createSocket('udp4');
const { spawn } = require('child_process');

var cmd = 'mplayer';
var args = [ '-fps', '30', '-' ];
var video_player = spawn(cmd, args);

const fs = require('fs');
var video_stream = fs.createWriteStream('video.h264');
var video_stream_raw = fs.createWriteStream('video.base64.raw');

tello_control.on('error', (err) => {
  console.log(`tello_control error:\n${err.stack}`);
  tello_control.close();
});

tello_control.on('message', function (msg, rinfo) {
  _cmdRX(msg,rinfo);
}.bind(this));

tello_control.on('listening', () => {
  const address = tello_control.address();
  console.log(`tello_control listening ${address.address}:${address.port}`);
});

_sendCmd(0, tello.commands.TELLO_CMD_CONN);

setInterval(function () { _timerTask(); }.bind(this),20);

	tello_video.on('error', (err) => {
		console.log(`tello_video error:\n${err.stack}`);
		setTimeout(function() { initVideo(); }.bind(this),1000);
	});

	tello_video.on('message', function (msg, rinfo) {
	  video_stream.write(msg.slice(2));
	  video_stream_raw.write(msg.toString('base64')+"\n\n");
	    video_player.stdin.write(msg.slice(2));
	});

	tello_video.on('listening', () => {
	  const address = tello_video.address();
	  console.log(`tello_video listening ${address.address}:${address.port}`);
	});


function initVideo () {
	tello_video.bind(tello.video.port);
}
