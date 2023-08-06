interface  MajorCredits {
    brand: 'major_brand';
    credits: number;
}

interface MinorCredits {
    brand: 'minor_brand';
    credits: number;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
    const sum: number = subject1 + subject2;
    return {brand: 'major_brand' ,credits: sum,};
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
    const sum: number = subject1 + subject2;
    return {brand: 'minor_brand' ,credits: sum,};
}


/* Test Code */
console.log(sumMajorCredits(5, 8));
console.log(sumMinorCredits(10, 4));