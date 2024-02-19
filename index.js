class ECTS {
    constructor(score) {
        this.score = score;
    }

    static conversionTable = {
        A: [90, 100],
        B: [82, 89],
        C: [74, 81],
        D: [65, 73],
        E: [60, 64],
        F: [0, 59],
    };

    ectsFromScore() {
        for (const grade in ECTS.conversionTable) {
            const [min, max] = ECTS.conversionTable[grade];
            if (this.score >= min && this.score <= max) {
                return grade;
            }
        }
        return 'F';
    }
}

module.exports = ECTS;
