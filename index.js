class ECTS {
    constructor(score) {
        this.score = score;
    }

    static conversionTable = {
        A: [90, 100],
        B: [80, 89],
        C: [70, 79],
        D: [60, 69],
        E: [50, 59],
        F: [0, 49],
    };

    ectsFromScore() {
        for (const grade in ECTS.conversionTable) {
            const [min, max] = ECTS.conversionTable[grade];
            if (this.score >= min && this.score <= max) {
                return grade;
            }
        }
    }
}

module.exports = ECTS;
