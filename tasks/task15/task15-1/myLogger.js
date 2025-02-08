"use strict";

function createLogger() {
        let logMessages = [];
        return {
            logSet(message) {
                logMessages.push(message);
            },
            getLogs() {
                for (let message of logMessages) {
                    console.log(message);
                }
            },
        }
}

let logger = createLogger();
logger.logSet('Message1');
logger.logSet('Message2');
logger.getLogs(); // Message1, \n Message2 \n ...
let logger2 = createLogger();
console.log(logger2.getLogs()); // undefined;