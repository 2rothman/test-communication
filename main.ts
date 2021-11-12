bluetooth.startUartService()
let compteur = 0
basic.forever(function () {
    compteur += 1
    bluetooth.uartWriteNumber(compteur)
    bluetooth.uartWriteLine("")
    basic.pause(5000)
})
