var magik = magikcraft.io;

function remember(name){
    var here = magik.hic();
    var memory = magik.exemento();
    if (!memory) memory = {};
        memory[name] = here;
}

magik.invoco(remember);