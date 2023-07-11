
var Opcodes = Java.type("org.objectweb.asm.Opcodes");

function initializeCoreMod() {
    return {
        "LivingEntity_<init>": {
            "target": {
                "type": "CLASS",
                "name": "com/cartoonishvillain/ImmortuosCalyx/Events/EntityInfectionEventManager"
            },
            "transformer": function (cn) {
                for (var i = 0; i < cn.methods.size(); i++) {
                    var mn = cn.methods.get(i);
                    var insnList = mn.instructions.toArray();
                    for (var j = 0; j < insnList.length; j++) {
                        var node = insnList[j];
                        if (node.getOpcode() === Opcodes.LDC && node.cst.equals("availableGoals")) {
                            node.cst = "field_220892_d"
                        }
                    }
                }
                return cn;
            }
        }
    }
}
