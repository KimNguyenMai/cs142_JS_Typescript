export enum Instrument {
    Piano = 'Piano',
    Guitar = 'Guitar',
    Violin = 'Violin',
    Cello = 'Cello',
}

export function play(Instrument: Instrument){
    console.log('Playing ' + Instrument + '.');
}

export function testMap(){
    let map: {
        [name: string]: string;
    }={
        Sam: 'Professor',
    };
    map ['Kim'] = 'TA';
    console.log(map['Sam']);
    console.log(map['Kim']);
}

export default function twoSum(nums: number[], target: number){
    //..
    return [0,0];
}
