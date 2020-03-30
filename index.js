const NAMES = ['alfred', 'alfie', 'alfie', 'alfiee ', 'zzz'];

function solve(names) {
    let existingNames = [];
    let count = {};
    let result = [];
    for (let name of names) {
        count[name] = (count[name] || 0) + 1;
        let s = "";
        for (let char of name) {
            s += char;
            if (!existingNames.some(name => name.slice(0, s.length) == s)) {
                result.push(s);
                break;
            }
        }

        if (s === name && count[name] > 1) result.push([name, count[name]].join(" "));
        existingNames.push(name);
    }
    return result;
}



function main() {
    const res = solve(NAMES);
    console.log((res || []).join('\n'));
}

main();