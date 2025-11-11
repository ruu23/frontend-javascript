interface MajorCredits {
    credits: number;
    brand: 'Major';
}
interface MinorCredits {
    credits: number;
    brand: 'Minor';
}

function sumMajorCredits(subject1: MinorCredits, subject2: MinorCredits): MajorCredits {
        return {
            credits: subject1.credits + subject2.credits,
            brand: 'Major'
        };
    }

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
         return {
            credits: subject1.credits + subject2.credits,
            brand: 'Minor'
        };
    }
