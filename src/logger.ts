import pino from "pino"

const logger = pino({
    level: 'info',
    base: undefined,
    timestamp: pino.stdTimeFunctions.isoTime
})

export default logger