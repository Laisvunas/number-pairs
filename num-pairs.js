const input = '1391668334428232863418225426114133248632119848470637252794406898714528670815704085665358342504549941605369783084345891342340065146869884510113274362707771716';
    const nums = input.split('');
    const obj = {};
    
    let numPair = null;
    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length - 1) {
            numPair = nums[i] + nums[i + 1];
            if (typeof obj[numPair] === 'undefined') {
                obj[numPair] = 1; 
            }
            else {
                obj[numPair] += 1; 
            }
        }
    }

    const mostFrequent = [];
    const numPairsUnique = Object.keys(obj);
    
    for (let i = 0; i < numPairsUnique.length; i++) {
        numPair = numPairsUnique[i];
        const count = obj[numPair];
        
        if (mostFrequent.length === 0 || obj[mostFrequent[0]] === count) {
            mostFrequent.push(numPair); 
        }
        else if (obj[mostFrequent[0]] < count) {
            mostFrequent.length = 0; 
            mostFrequent.push(numPair);
        }
    }
    console.log('mostFrequent', mostFrequent);