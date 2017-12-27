var hindi = require("./mapper_hindi").fontmap;
var hindi_repl = require("./mapper_hindi").fontrepl;

var languages = {
    "hindi" : [hindi, hindi_repl]
}

exports.convert =  function(value, language, font_name) {
    var font_map = languages[language]?languages[language][0][font_name]:[];
    if(!(font_map && font_map.length>0)) return value;
    
    var modified_substring = value;
    var text_size = modified_substring.length;
    var processed_text = '';
    var f1 = 0;
    var f2 = 0;
    var chunk_flag = 1;
    var chunk_size = 6000;
    while (chunk_flag == 1) {
        f1 = f2;
        if (f2 < (text_size - chunk_size)) {
            f2 += chunk_size;
        } else {
            f2 = text_size;
            chunk_flag = 0
        }
        var modified_substring = value.substring(f1, f2);
        replace_symbols();
        var processed_text = processed_text + modified_substring;
    }
    return languages[language][1](processed_text);

    function replace_symbols() {
        if (modified_substring != "") {
            for (input_symbol_idx = 0; input_symbol_idx < font_map.length; input_symbol_idx = input_symbol_idx + 2) {
                idx = modified_substring.indexOf(font_map[input_symbol_idx])
                while (idx != -1) {
                    modified_substring = modified_substring.replace(font_map[input_symbol_idx], font_map[input_symbol_idx + 1]);
                    idx = modified_substring.indexOf(font_map[input_symbol_idx])
                }
            }
        }
    }
}