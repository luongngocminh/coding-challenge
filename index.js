const NAMES = `ghfd
gcjbch
j
gagc
bihjcac
hfjc
ijh
gbcj
bjeh
efadgbagd
agb
fehgfg
dhefcfehee
ahig
iedbejcag
jcggejfae
hbhchccgb
g
fj
jajbh
bbfjhhgh
gfgd
eibcjdjaii
ajgdif
bbfjiei
ad
e
eehgd
hf
gcbhifhebi
jhfdii
bijg
dddig
e
iijhhgeda
ajcf
afjeg
ccehhfeibc
jdgiacbaf
ba
fagegcfig
ieh
eag
jja
bdbbadead
bjgjddiafg
eaaegcg
fgjihcic
jgachgbdcb
jjbejb
h
ihaeia
cjgba
cccaf
cjacid
aeajbjgcf
ejjdg
f
c
edfbhedbeg
eccgebciij
iii
ididddi
e
gijagihj
d
dhdc
fcgfihj
aebaeih
i
cehjdjc
dabhijbfe
cfhejjefjd
haibjj
icfdejac
b
gcbcahdbbj
f
hheageh
ificg
g
egcijga
ababdhhc
efcacja
jefbadhiig
e
hgajhfj
ifddidhj
hihe
ja
iifiedhbdi
j
jjdcedhb
cac
hf
he
hb
bh
e
i`;
let test = NAMES.split("\n");

function solve(names) {
    let existingNames = [];
    let count = {};
    let result = [];
    for (let name of names) {
        count[name] = (count[name] || 0) + 1;
        let s = "";
        for (let char of name) {
            s += char;
            let  = true
            if (!existingNames.some(name => name.slice(0, s.length) == s)) {
                result.push(s);
                break;
            }
        }

        if (existingNames.some(existingName => (existingName.slice(0, name.length) == name)) && !existingNames.some(exName => (name == exName))) {
            result.push(name);
        } 
            
        if (existingNames.some(existingName => existingName == name)) result.push([name, count[name]].join(" "));
        existingNames.push(name);
    }
    return result;
}



function main() {
    const res = solve(test);
    console.log((res || []).join('\n'));
}

main();