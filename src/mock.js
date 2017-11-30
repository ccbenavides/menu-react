export const DATA = {
    menu : [
        { id : 1 , title : 'principal', orden : '[{ "id_pagina": 2,"uri_slug" : "/sdasdas", "title" : "INICIO" },{"id_pagina": 5, "uri_slug" : "/sdasdas", "title" : "BENEFICIOS"}]'},
        { id : 2 , title : 'bottom' , orden : '[{ "id_pagina": 1, "uri_slug" : "/sdasdas", "title" : "NORMAS LEGALES" , "children": [ {  "id_pagina": 6 , "uri_slug" : "/sdasdas", "title" : "TRIBUTARIOS" } ] }]' },

    ],
    paginas : [
     { id_pagina : 1 , title : "NORMAS LEGALES", uri_slug : '/inicio',state : true},   
     { id_pagina : 2 , title : "INICIO", uri_slug : '/inicio', state : true},   
     { id_pagina : 3 , title : "JURISPRUDENCIA", uri_slug : '/inicio', state : true},   
     { id_pagina : 4 , title : "EXTRANJERÍA", uri_slug : '/inicio', state : true},   
     { id_pagina : 5 , title : "BENEFICIOS", uri_slug : '/inicio', state : true} , 
     { id_pagina : 6 , title : "TRIBUTARIOS", uri_slug : '/inicio', state : true} , 
    ]
}