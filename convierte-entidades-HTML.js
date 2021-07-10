function convertHTML(str) {
    let rex = new RegExp(/<>|[&'"<>]/, 'gi');
    let match = str.match(rex);

    if(match) {
        let matchCase = match[0];
        switch (matchCase) {
            case '&':
                str = str.replace(rex, '&amp;')
                break;
            case '<':
                str = str.replace(rex, '&lt;')
                break;
            case '>':
                str = str.replace(rex, '&gt;')
                break;
            case '<>':
                str = str.replace(rex, '&lt;&gt;')
                break;
            case '"':
                str = str.replace(rex, '&quot;')
                break;
            case '\'':
                str = str.replace(rex, '&apos;')
                break;
        
            default:
                break;
        }
    }

    return str;
  }
  
console.log(convertHTML("<>"));


// Convierte entidades HTMLAprobado
// Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML.