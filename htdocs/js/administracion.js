$(document).ready(function(){

});

function isla(val) {
  if(val=="LA PALMA"){
    document.getElementById('municipioslapalma').style.display="block";
    document.getElementById('municipioslagomera').style.display="none";
    document.getElementById('municipioselhierro').style.display="none";
    document.getElementById('municipiostenerife').style.display="none";
    document.getElementById('municipiosgrancanaria').style.display="none";
    document.getElementById('municipiosfuerteventura').style.display="none";
    document.getElementById('municipioslanzarote').style.display="none";
  }

  if(val=="LA GOMERA"){
    document.getElementById('municipioslapalma').style.display="none";
    document.getElementById('municipioslagomera').style.display="block";
    document.getElementById('municipioselhierro').style.display="none";
    document.getElementById('municipiostenerife').style.display="none";
    document.getElementById('municipiosgrancanaria').style.display="none";
    document.getElementById('municipiosfuerteventura').style.display="none";
    document.getElementById('municipioslanzarote').style.display="none";
  }

  if(val=="EL HIERRO"){
    document.getElementById('municipioslagomera').style.display="none";
    document.getElementById('municipioslapalma').style.display="none";
    document.getElementById('municipioselhierro').style.display="block";
    document.getElementById('municipiostenerife').style.display="none";
    document.getElementById('municipiosgrancanaria').style.display="none";
    document.getElementById('municipiosfuerteventura').style.display="none";
    document.getElementById('municipioslanzarote').style.display="none";
  }

  if(val=="TENERIFE"){
    document.getElementById('municipioslagomera').style.display="none";
    document.getElementById('municipioslapalma').style.display="none";
    document.getElementById('municipioselhierro').style.display="none";
    document.getElementById('municipiostenerife').style.display="block";
    document.getElementById('municipiosgrancanaria').style.display="none";
    document.getElementById('municipiosfuerteventura').style.display="none";
    document.getElementById('municipioslanzarote').style.display="none";
  }
  if(val=="GRAN CANARIA"){
    document.getElementById('municipioslagomera').style.display="none";
    document.getElementById('municipioslapalma').style.display="none";
    document.getElementById('municipioselhierro').style.display="none";
    document.getElementById('municipiostenerife').style.display="none";
    document.getElementById('municipiosgrancanaria').style.display="block";
    document.getElementById('municipiosfuerteventura').style.display="none";
    document.getElementById('municipioslanzarote').style.display="none";
  }
  if(val=="FUERTEVENTURA"){
    document.getElementById('municipioslagomera').style.display="none";
    document.getElementById('municipioslapalma').style.display="none";
    document.getElementById('municipioselhierro').style.display="none";
    document.getElementById('municipiostenerife').style.display="none";
    document.getElementById('municipiosgrancanaria').style.display="none";
    document.getElementById('municipiosfuerteventura').style.display="block";
    document.getElementById('municipioslanzarote').style.display="none";
  }

  if(val=="LANZAROTE"){
    document.getElementById('municipioslagomera').style.display="none";
    document.getElementById('municipioslapalma').style.display="none";
    document.getElementById('municipioselhierro').style.display="none";
    document.getElementById('municipiostenerife').style.display="none";
    document.getElementById('municipiosgrancanaria').style.display="none";
    document.getElementById('municipiosfuerteventura').style.display="none";
    document.getElementById('municipioslanzarote').style.display="block";
  }

}

function municipio(val){
  if(val!==""){
    document.getElementById('localidad').style.display="block";
    document.getElementById('nombre_yacimiento').style.display="block";
    document.getElementById('coordenada').style.display="block";
    document.getElementById('edad').style.display="block";
    document.getElementById('altura').style.display="block";
    document.getElementById('tipo_y').style.display="block";
    document.getElementById('estado_conservacion').style.display="block";
    document.getElementById('observaciones_y').style.display="block";
  }
  else{
    document.getElementById('localidad').style.display="none";
    document.getElementById('nombre_yacimiento').style.display="none";
    document.getElementById('coordenada').style.display="none";
    document.getElementById('edad').style.display="none";
    document.getElementById('altura').style.display="none";
    document.getElementById('tipo_y').style.display="none";
    document.getElementById('estado_conservacion').style.display="none";
    document.getElementById('observaciones_y').style.display="none";
  }
}
