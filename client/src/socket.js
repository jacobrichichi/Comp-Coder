import {io} from "socket.io-client";

const URL = "http://competitivecoder.com";
const socket = io(URL);

export default socket;
