$(function(){

    //HTMLを初期化
    $("table.tbl tbody").html("");
    
    //HTMLを生成
    $.getJSON("js/database.json", function(data){
    $(data.release).each(function(){
    $('<tr>'+
    '<th>'+this.Tag+'</th>'+
    '<td class="ID"><span class="' + this.ID + '">' +
    this.ふりがな + '</span></td>'+
    '<td><a href="' + this.ID + '" target="' +
    this.target + '">' + this.content + '</a></td>'+
    '</tr>').appendTo('table.tbl tbody');
    })
    })
    });