interface BugReport{
    id:number;
    title:string;
    stepsToReproduce:string[];
    severity:string
}

let bugReport1:BugReport={
    id:1,
    title:'Login Failed',
    stepsToReproduce:['OPen Browser','Give alphanumeric credentials','close browser'],
    severity:"High"
}

let bugReport2:BugReport={
    id:1,
    title:'Reg Failed',
    stepsToReproduce:['OPen Browser','Give special characters as credentials','close browser'],
    severity:"Low"
}

let bugReport3:BugReport={
    id:1,
    title:'Add to Cart Failed',
    stepsToReproduce:['OPen Browser','Give arabic characters as credentials','close browser'],
    severity:"Medium"
}

console.log(bugReport3.stepsToReproduce)