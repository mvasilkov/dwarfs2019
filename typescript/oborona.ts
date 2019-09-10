function play(n) {
    switch(n) {
    case 0: // bar 1
        playNote(57, n + 0.0, n + 0.25)
        playNote(45, n + 0.0, n + 2.0)
        playNote(60, n + 0.25, n + 0.5)
        playNote(57, n + 0.5, n + 0.75)
        playNote(64, n + 0.75, n + 1.25)
        break
    case 1: // bar 2
        playNote(60, n + 0.25, n + 0.75)
        playNote(60, n + 0.75, n + 1.0)
        break
    case 2: // bar 3
        playNote(52, n + 0.0, n + 1.0)
        playNote(60, n + 0.25, n + 0.5)
        playNote(57, n + 0.5, n + 0.75)
        playNote(64, n + 0.75, n + 1.25)
        break
    case 3: // bar 4
        playNote(52, n + 0.0, n + 0.75)
        playNote(60, n + 0.25, n + 0.75)
        playNote(60, n + 0.75, n + 1.0)
        playNote(52, n + 0.75, n + 1.0)
        break
    case 4: // bar 5
        playNote(45, n + 0.0, n + 1.75)
        playNote(57, n + 0.25, n + 0.5)
        playNote(60, n + 0.5, n + 0.75)
        playNote(64, n + 0.75, n + 1.25)
        playNote(57, n + 0.75, n + 1.25)
        break
    case 5: // bar 6
        playNote(57, n + 0.25, n + 0.5)
        playNote(60, n + 0.5, n + 1.0)
        playNote(52, n + 0.75, n + 1.0)
        break
    case 6: // bar 7
        playNote(60, n + 0.0, n + 1.0)
        playNote(52, n + 0.0, n + 0.5)
        playNote(52, n + 0.5, n + 1.5)
        break
    case 7: // bar 8
        playNote(64, n + 0.0, n + 1.0)
        playNote(52, n + 0.5, n + 0.75)
        playNote(52, n + 0.75, n + 1.0)
        break
    case 8: // bar 9
        playNote(57, n + 0.0, n + 0.25)
        playNote(45, n + 0.0, n + 0.75)
        playNote(57, n + 0.25, n + 0.5)
        playNote(57, n + 0.5, n + 0.75)
        playNote(60, n + 0.75, n + 1.25)
        playNote(52, n + 0.75, n + 1.75)
        break
    case 9: // bar 10
        playNote(69, n + 0.25, n + 0.5)
        playNote(67, n + 0.5, n + 0.75)
        playNote(69, n + 0.75, n + 1.0)
        playNote(52, n + 0.75, n + 1.0)
        break
    case 10: // bar 11
        playNote(69, n + 0.0, n + 0.75)
        playNote(41, n + 0.0, n + 0.25)
        playNote(48, n + 0.25, n + 0.5)
        playNote(55, n + 0.5, n + 1.5)
        playNote(57, n + 0.75, n + 1.75)
        break
    case 11: // bar 12
        playNote(55, n + 0.5, n + 0.75)
        playNote(67, n + 0.75, n + 1.0)
        playNote(50, n + 0.75, n + 1.0)
        break
    case 12: // bar 13
        playNote(67, n + 0.0, n + 0.25)
        playNote(55, n + 0.0, n + 0.75)
        playNote(67, n + 0.25, n + 0.5)
        playNote(67, n + 0.5, n + 0.75)
        playNote(66, n + 0.75, n + 1.25)
        playNote(57, n + 0.75, n + 1.75)
        playNote(54, n + 0.75, n + 1.75)
        break
    case 13: // bar 14
        playNote(67, n + 0.25, n + 0.5)
        playNote(66, n + 0.5, n + 0.75)
        playNote(64, n + 0.75, n + 1.0)
        playNote(47, n + 0.75, n + 1.0)
        break
    case 14: // bar 15
        playNote(52, n + 0.0, n + 0.25)
        playNote(47, n + 0.0, n + 2.0)
        playNote(54, n + 0.25, n + 0.5)
        playNote(56, n + 0.5, n + 0.75)
        playNote(59, n + 0.75, n + 1.75)
        break
    case 15: // bar 16
        playNote(57, n + 0.75, n + 1.0)
        break
    case 16: // bar 17
        playNote(57, n + 0.0, n + 0.25)
        playNote(45, n + 0.0, n + 0.75)
        playNote(57, n + 0.25, n + 0.5)
        playNote(57, n + 0.5, n + 0.75)
        playNote(60, n + 0.75, n + 1.25)
        playNote(52, n + 0.75, n + 1.25)
        break
    case 17: // bar 18
        playNote(69, n + 0.25, n + 0.5)
        playNote(57, n + 0.25, n + 1.0)
        playNote(67, n + 0.5, n + 0.75)
        playNote(69, n + 0.75, n + 1.0)
        break
    case 18: // bar 19
        playNote(69, n + 0.0, n + 0.75)
        playNote(57, n + 0.0, n + 0.25)
        playNote(53, n + 0.0, n + 0.25)
        playNote(48, n + 0.0, n + 0.25)
        playNote(48, n + 0.25, n + 0.5)
        playNote(55, n + 0.5, n + 0.75)
        playNote(65, n + 0.75, n + 1.75)
        playNote(57, n + 0.75, n + 1.25)
        break
    case 19: // bar 20
        playNote(57, n + 0.25, n + 0.5)
        playNote(60, n + 0.5, n + 1.0)
        playNote(67, n + 0.75, n + 1.0)
        break
    case 20: // bar 21
        playNote(67, n + 0.0, n + 0.25)
        playNote(43, n + 0.0, n + 0.5)
        playNote(59, n + 0.25, n + 0.5)
        playNote(67, n + 0.5, n + 0.75)
        playNote(50, n + 0.5, n + 0.75)
        playNote(66, n + 0.75, n + 1.25)
        playNote(47, n + 0.75, n + 1.75)
        break
    case 21: // bar 22
        playNote(67, n + 0.25, n + 0.5)
        playNote(66, n + 0.5, n + 0.75)
        playNote(64, n + 0.75, n + 1.0)
        playNote(47, n + 0.75, n + 1.0)
        break
    case 22: // bar 23
        playNote(52, n + 0.0, n + 0.25)
        playNote(47, n + 0.0, n + 2.0)
        playNote(54, n + 0.25, n + 0.5)
        playNote(56, n + 0.5, n + 0.75)
        playNote(59, n + 0.75, n + 1.75)
        break
    case 23: // bar 24
        playNote(67, n + 0.75, n + 1.0)
        break
    case 24: // bar 25
        playNote(67, n + 0.0, n + 0.25)
        playNote(59, n + 0.0, n + 0.5)
        playNote(55, n + 0.0, n + 0.5)
        playNote(62, n + 0.25, n + 0.5)
        playNote(67, n + 0.5, n + 0.75)
        playNote(59, n + 0.5, n + 0.75)
        playNote(67, n + 0.75, n + 1.25)
        playNote(57, n + 0.75, n + 1.25)
        break
    case 25: // bar 26
        playNote(67, n + 0.25, n + 0.5)
        playNote(50, n + 0.25, n + 0.5)
        playNote(67, n + 0.5, n + 0.75)
        playNote(43, n + 0.5, n + 1.0)
        playNote(68, n + 0.75, n + 1.0)
        playNote(64, n + 0.75, n + 1.0)
        break
    case 26: // bar 27
        playNote(68, n + 0.0, n + 0.25)
        playNote(64, n + 0.0, n + 0.25)
        playNote(40, n + 0.0, n + 0.5)
        playNote(64, n + 0.25, n + 0.5)
        playNote(62, n + 0.5, n + 0.75)
        playNote(47, n + 0.5, n + 0.75)
        playNote(62, n + 0.75, n + 1.25)
        playNote(52, n + 0.75, n + 1.5)
        break
    case 27: // bar 28
        playNote(60, n + 0.25, n + 0.75)
        playNote(52, n + 0.5, n + 0.75)
        playNote(57, n + 0.75, n + 1.0)
        playNote(47, n + 0.75, n + 1.0)
        break
    case 28: // bar 29
        playNote(60, n + 0.0, n + 0.5)
        playNote(45, n + 0.0, n + 0.5)
        playNote(72, n + 0.5, n + 1.0)
        playNote(64, n + 0.5, n + 1.0)
        playNote(57, n + 0.5, n + 0.75)
        playNote(48, n + 0.75, n + 1.0)
        break
    case 29: // bar 30
        playNote(60, n + 0.0, n + 0.25)
        playNote(57, n + 0.0, n + 0.75)
        playNote(53, n + 0.0, n + 0.75)
        playNote(65, n + 0.25, n + 0.5)
        playNote(67, n + 0.5, n + 0.75)
        playNote(72, n + 0.75, n + 1.0)
        playNote(43, n + 0.75, n + 1.0)
        break
    case 30: // bar 31
        playNote(72, n + 0.0, n + 0.25)
        playNote(64, n + 0.0, n + 0.25)
        playNote(60, n + 0.0, n + 0.25)
        playNote(48, n + 0.0, n + 0.5)
        playNote(36, n + 0.0, n + 0.5)
        playNote(72, n + 0.25, n + 0.5)
        playNote(64, n + 0.25, n + 0.5)
        playNote(60, n + 0.25, n + 0.5)
        playNote(72, n + 0.5, n + 0.75)
        playNote(64, n + 0.5, n + 0.75)
        playNote(60, n + 0.5, n + 0.75)
        playNote(55, n + 0.5, n + 0.75)
        playNote(72, n + 0.75, n + 1.25)
        playNote(64, n + 0.75, n + 1.25)
        playNote(60, n + 0.75, n + 1.25)
        playNote(50, n + 0.75, n + 1.5)
        break
    case 31: // bar 32
        playNote(71, n + 0.25, n + 1.0)
        playNote(62, n + 0.25, n + 1.0)
        playNote(59, n + 0.25, n + 1.0)
        playNote(57, n + 0.5, n + 0.75)
        playNote(50, n + 0.75, n + 1.0)
        break
    case 32: // bar 33
        playNote(72, n + 0.0, n + 0.25)
        playNote(64, n + 0.0, n + 0.25)
        playNote(60, n + 0.0, n + 0.25)
        playNote(57, n + 0.0, n + 0.5)
        playNote(52, n + 0.0, n + 0.5)
        playNote(45, n + 0.0, n + 0.5)
        playNote(72, n + 0.25, n + 0.5)
        playNote(72, n + 0.5, n + 0.75)
        playNote(59, n + 0.5, n + 1.0)
        playNote(72, n + 0.75, n + 1.25)
        break
    case 33: // bar 34
        playNote(57, n + 0.0, n + 0.5)
        playNote(53, n + 0.0, n + 0.5)
        playNote(48, n + 0.0, n + 0.5)
        playNote(71, n + 0.25, n + 0.5)
        playNote(69, n + 0.5, n + 0.75)
        playNote(48, n + 0.5, n + 1.0)
        playNote(67, n + 0.75, n + 1.0)
        playNote(64, n + 0.75, n + 1.0)
        playNote(60, n + 0.75, n + 1.0)
        break
    case 34: // bar 35
        playNote(67, n + 0.0, n + 0.25)
        playNote(64, n + 0.0, n + 0.25)
        playNote(60, n + 0.0, n + 0.25)
        playNote(36, n + 0.0, n + 0.5)
        playNote(69, n + 0.25, n + 0.5)
        playNote(71, n + 0.5, n + 0.75)
        playNote(43, n + 0.5, n + 0.75)
        playNote(72, n + 0.75, n + 1.25)
        playNote(68, n + 0.75, n + 1.25)
        playNote(64, n + 0.75, n + 1.25)
        playNote(48, n + 0.75, n + 1.0)
        break
    case 35: // bar 36
        playNote(40, n + 0.0, n + 0.5)
        playNote(71, n + 0.25, n + 1.0)
        playNote(56, n + 0.5, n + 0.75)
        playNote(52, n + 0.75, n + 1.0)
        break
    case 36: // bar 37
        playNote(60, n + 0.0, n + 0.5)
        playNote(45, n + 0.0, n + 0.25)
        playNote(52, n + 0.25, n + 0.5)
        playNote(72, n + 0.5, n + 1.0)
        playNote(64, n + 0.5, n + 1.0)
        playNote(60, n + 0.5, n + 1.0)
        playNote(57, n + 0.5, n + 1.0)
        break
    case 37: // bar 38
        playNote(60, n + 0.0, n + 0.25)
        playNote(57, n + 0.0, n + 0.5)
        playNote(53, n + 0.0, n + 0.5)
        playNote(65, n + 0.25, n + 0.5)
        playNote(67, n + 0.5, n + 0.75)
        playNote(48, n + 0.5, n + 0.75)
        playNote(72, n + 0.75, n + 1.0)
        playNote(60, n + 0.75, n + 1.0)
        playNote(43, n + 0.75, n + 1.0)
        break
    case 38: // bar 39
        playNote(72, n + 0.0, n + 0.25)
        playNote(67, n + 0.0, n + 0.25)
        playNote(60, n + 0.0, n + 0.25)
        playNote(48, n + 0.0, n + 0.5)
        playNote(72, n + 0.25, n + 0.5)
        playNote(60, n + 0.25, n + 0.5)
        playNote(72, n + 0.5, n + 0.75)
        playNote(60, n + 0.5, n + 0.75)
        playNote(55, n + 0.5, n + 0.75)
        playNote(72, n + 0.75, n + 1.25)
        playNote(67, n + 0.75, n + 1.25)
        playNote(62, n + 0.75, n + 1.25)
        playNote(50, n + 0.75, n + 1.0)
        break
    case 39: // bar 40
        playNote(43, n + 0.0, n + 0.25)
        playNote(71, n + 0.25, n + 0.75)
        playNote(67, n + 0.25, n + 0.75)
        playNote(62, n + 0.25, n + 0.75)
        playNote(50, n + 0.25, n + 0.5)
        playNote(57, n + 0.5, n + 1.0)
        playNote(59, n + 0.75, n + 1.0)
        break
    case 40: // bar 41
        playNote(72, n + 0.0, n + 0.5)
        playNote(64, n + 0.0, n + 0.5)
        playNote(60, n + 0.0, n + 0.5)
        playNote(52, n + 0.0, n + 0.5)
        playNote(45, n + 0.0, n + 0.5)
        playNote(72, n + 0.5, n + 0.75)
        playNote(64, n + 0.5, n + 0.75)
        playNote(60, n + 0.5, n + 0.75)
        playNote(57, n + 0.5, n + 0.75)
        playNote(72, n + 0.75, n + 1.25)
        playNote(67, n + 0.75, n + 1.25)
        playNote(60, n + 0.75, n + 1.25)
        playNote(48, n + 0.75, n + 1.0)
        break
    case 41: // bar 42
        playNote(57, n + 0.0, n + 0.5)
        playNote(53, n + 0.0, n + 0.5)
        playNote(48, n + 0.0, n + 0.5)
        playNote(71, n + 0.25, n + 0.5)
        playNote(69, n + 0.5, n + 0.75)
        playNote(60, n + 0.5, n + 0.75)
        playNote(57, n + 0.5, n + 0.75)
        playNote(67, n + 0.75, n + 1.0)
        playNote(53, n + 0.75, n + 1.0)
        break
    case 42: // bar 43
        playNote(67, n + 0.0, n + 0.25)
        playNote(48, n + 0.0, n + 0.25)
        playNote(36, n + 0.0, n + 0.25)
        playNote(69, n + 0.25, n + 0.5)
        playNote(43, n + 0.25, n + 0.5)
        playNote(71, n + 0.5, n + 0.75)
        playNote(48, n + 0.5, n + 0.75)
        playNote(72, n + 0.75, n + 1.25)
        playNote(68, n + 0.75, n + 1.25)
        playNote(64, n + 0.75, n + 1.25)
        playNote(60, n + 0.75, n + 1.25)
        playNote(44, n + 0.75, n + 1.0)
        break
    case 43: // bar 44
        playNote(52, n + 0.0, n + 0.25)
        playNote(71, n + 0.25, n + 1.0)
        playNote(68, n + 0.25, n + 1.0)
        playNote(64, n + 0.25, n + 1.0)
        playNote(47, n + 0.25, n + 0.5)
        playNote(56, n + 0.5, n + 0.75)
        playNote(52, n + 0.75, n + 1.0)
        break
    case 44: // bar 45
        playNote(72, n + 0.0, n + 0.5)
        playNote(64, n + 0.0, n + 0.5)
        playNote(60, n + 0.0, n + 0.5)
        playNote(57, n + 0.0, n + 0.25)
        playNote(45, n + 0.0, n + 0.25)
        playNote(52, n + 0.25, n + 0.5)
        playNote(72, n + 0.5, n + 0.75)
        playNote(60, n + 0.5, n + 0.75)
        playNote(57, n + 0.5, n + 0.75)
        playNote(72, n + 0.75, n + 1.25)
        playNote(67, n + 0.75, n + 1.25)
        playNote(60, n + 0.75, n + 1.25)
        playNote(48, n + 0.75, n + 1.0)
        break
    case 45: // bar 46
        playNote(57, n + 0.0, n + 0.25)
        playNote(53, n + 0.0, n + 0.25)
        playNote(71, n + 0.25, n + 0.5)
        playNote(55, n + 0.25, n + 0.5)
        playNote(69, n + 0.5, n + 0.75)
        playNote(48, n + 0.5, n + 1.0)
        playNote(67, n + 0.75, n + 1.0)
        playNote(64, n + 0.75, n + 1.0)
        playNote(60, n + 0.75, n + 1.0)
        break
    case 46: // bar 47
        playNote(67, n + 0.0, n + 0.25)
        playNote(64, n + 0.0, n + 0.25)
        playNote(60, n + 0.0, n + 0.25)
        playNote(48, n + 0.0, n + 0.25)
        playNote(36, n + 0.0, n + 0.25)
        playNote(69, n + 0.25, n + 0.5)
        playNote(43, n + 0.25, n + 0.5)
        playNote(71, n + 0.5, n + 0.75)
        playNote(48, n + 0.5, n + 1.0)
        playNote(72, n + 0.75, n + 1.25)
        playNote(68, n + 0.75, n + 1.25)
        playNote(60, n + 0.75, n + 1.25)
        break
    case 47: // bar 48
        playNote(52, n + 0.0, n + 0.5)
        playNote(40, n + 0.0, n + 0.5)
        playNote(71, n + 0.25, n + 1.0)
        playNote(68, n + 0.25, n + 1.0)
        playNote(62, n + 0.25, n + 1.0)
        playNote(47, n + 0.5, n + 0.75)
        playNote(52, n + 0.75, n + 1.0)
        break
    case 48: // bar 49
        playNote(71, n + 0.0, n + 2.0)
        playNote(68, n + 0.0, n + 2.0)
        playNote(62, n + 0.0, n + 2.0)
        playNote(52, n + 0.0, n + 0.25)
        playNote(54, n + 0.25, n + 0.75)
        playNote(56, n + 0.75, n + 1.25)
        break
    case 49: // bar 50
        playNote(54, n + 0.25, n + 0.5)
        playNote(56, n + 0.5, n + 1.0)
        break
    case 50: // bar 51
        playNote(64, n + 0.0, n + 1.75)
        break
    case 51: // bar 52
        playNote(52, n + 0.75, n + 1.0)
        break
    }
}
