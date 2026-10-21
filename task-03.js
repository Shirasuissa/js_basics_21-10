let family = {
    parents: {},
    children: [
        { name: "Ali" },
        { name: "Lea" },
        { name: "Mona" }
    ]
};

console.log(family.children[2].name)

let names = "";
for (let i=0; i<family.children.length; i++)
{
    names=names +family.children[i].name

    if (i < family.children.length - 1) {
        names = names + ", ";
    }
}
console.log(names)