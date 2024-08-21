
var _field_Menu = document.getElementById("field_Menu");
var _blue       = document.getElementById("blue_explorer");
var _liteblue   = document.getElementById("liteblue");
var _green      = document.getElementById("green");
var _yellow     = document.getElementById("yellow");
var _orange     = document.getElementById("orange");
var _red        = document.getElementById("red");
var _black      = document.getElementById("black");
var _viollet    = document.getElementById("viollet");

var _kart = document.getElementsByName("img");
var _menu_item = document.getElementsByClassName("menu-item");
var _menu_toggler = document.getElementById("menu-toggler");

_blue.onmousemove= function(){    
    _field_Menu.innerText = 'explorer';
}
_blue.onmouseleave = function(){    
    _field_Menu.innerText = "";
}
_liteblue.onmousemove= function(){    
    _field_Menu.innerText = _liteblue.innerText;
}
_liteblue.onmouseleave = function(){    
    _field_Menu.innerText = "";
}
_green.onmousemove= function(){    
    _field_Menu.innerText = _green.innerText;
}
_green.onmouseleave = function(){    
    _field_Menu.innerText = "";
}
_yellow.onmousemove= function(){    
    _field_Menu.innerText = _yellow.innerText;
}
_yellow.onmouseleave = function(){    
    _field_Menu.innerText = "";
}
_orange.onmousemove= function(){    
    _field_Menu.innerText = _orange.innerText;
}
_orange.onmouseleave = function(){    
    _field_Menu.innerText = "";
}
_red.onmousemove= function(){    
    _field_Menu.innerText = _red.innerText;
}
_red.onmouseleave = function(){    
    _field_Menu.innerText = "";
}
_black.onmousemove= function(){    
    _field_Menu.innerText = _black.innerText;
}
_black.onmouseleave = function(){    
    _field_Menu.innerText = "";
}
_viollet.onmousemove= function(){    
    _field_Menu.innerText = _viollet.innerText;
}
_viollet.onmouseleave = function(){    
    _field_Menu.innerText = "";
}

//console.log(_blue);
