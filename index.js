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
    let dict = {};
    let result = [];
    for(let name of names) {
        let prefix = name;
        let s = "";
        for(let i = name.length - 1; i >= 0; i--) {
            if(!(prefix in dict)) {
                s = prefix;
                dict[prefix] = 0;
            }
            prefix = prefix.substring(0, prefix.length - 1);
        }
        dict[name]++;
        result.push(s.length > 0 ? s : (name + (dict[name] == 1 ? "":(" "+dict[name]))));
    }
    
    return result;
}



function main() {
    const res = solve(test);
    console.log((res || []).join('\n'));
}

main();