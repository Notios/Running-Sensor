// Αρχικοποιώ τα βήματα
let steps = 0

// Δείχνω το σήμα της εφαρμογής μου
basic.showLeds(`
    . # # # .
    # . . . .
    # . # # #
    # . . . #
    . # # # .
    `)

// Ξεκινάει η βασική συνάρτηση της εφαρμογής
basic.forever(function () {
    
    // Όταν τρέχω μετράει τα βήματα και μου δείχνει την ένδειξη τρεξίματος
    input.onGesture(Gesture.Shake, function() {
        steps = steps + 1
        basic.showArrow(ArrowNames.North)
    })

    // Δείχνει τον αριθμό των βημάτων που έχω κάνει
    input.onButtonPressed(Button.A, function () { 
        basic.showNumber(steps)
    })

    // Εμφανίζει τη θερμοκρασία που λαμβάνει ο αισθητήρας
    input.onButtonPressed(Button.B, function () {
        let temp = input.temperature()
        basic.showNumber(temp)
        basic.showString("C")
    })

    // Μηδενίζει τα βήματα
    input.onButtonPressed(Button.AB, function () {
        steps = 0
        basic.showNumber(0)
    })

})
