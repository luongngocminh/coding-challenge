const NAMES = ['alfred', 'alfie', 'alfie'];

 

function solve(names) {
    let existingNames = [];
    let count = {};
    let result = [];
    for(let name of names) {
        s = "";
        count[name] = (count[name]||0) + 1;
        for(let char of name) {
            s+=char;
            if(!existingNames.some(name => name.includes(s))) {
                result.push(s);
                break;
            }                
        }
        if(s===name) result.push([name, count[name]].join(" "));
        existingNames.push(name);
    }
    return result;
}

 

function main() {
  const res = solve(NAMES);
  console.log((res || []).join('\n'));
}

main();

