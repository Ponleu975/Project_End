$(document).ready(function(){
    var txt='';
    var index='';
    var total='';
    $('#btn-order1').click(function(){
        var sugar=$('#sugar').val();
        var size=$('#size').val();
        var qty=$('#qty').val();
        if(size=="Small"){
            total=Number(qty)*1.5;
        }else if(size=="Medium"){
            total=Number(qty)*2;
        }else if(size=="Lage"){
            total=Number(qty)*2.5;
        }

        txt=`
            <tr>
                <td>Arabica Mocha</td>
                <td>${sugar}</td>
                <td>${size}</td>
                <td>${qty}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update">Update</button>
                <button class="btn btn-danger" id="btn-delete">Cancel</button>
                </td>
            </tr>
        `;
        
        console.log(txt);
        $('tbody').append(txt);
        $('#sugar').val('');
        $('#size').val('');
        $('#qty=').val('');
    });
    $('body').on('click','#btn-open-update',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        var sugar=$(this).parents("tr").find('td').eq(1).text();
        var size=$(this).parents("tr").find('td').eq(2).text();
        var qty=$(this).parents("tr").find('td').eq(3).text();

        console.log(row)
        $('#sugar').val(sugar);
        $('#size').val(size);
        $('#qty').val(qty);

        $('#btn-update').click(function(){
            var new_sugar=$('#sugar').val();
            var new_size=$('#size').val();
            var new_qty=$('#qty').val();
            if(new_size=="Small"){
                total=Number(new_qty)*1.5;
            }else if(new_size=="Medium"){
                total=Number(new_qty)*2;
            }else if(new_size=="Lage"){
                total=Number(new_qty)*2.5;
            }
            txt=`
                <td>Arabica Mocha</td>
                <td>${new_sugar}</td>
                <td>${new_size}</td>
                <td>${new_qty}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update">Update</button>
                <button class="btn btn-danger" id="btn-delete">Cancel</button>
                </td>
            
        `;
            row.eq(index).html(txt);
            $('#sugar').val('');
            $('#size').val('');
            $('#qty=').val('');
        });
    });
    $('body').on('click','#btn-delete',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        row.eq(index).remove();
    });
//2
    $('#btn-order2').click(function(){
        var sugar2=$('#sugar2').val();
        var size2=$('#size2').val();
        var qty2=$('#qty2').val();
        if(size2=="Small"){
            total=Number(qty2)*1.5;
        }else if(size2=="Medium"){
            total=Number(qty2)*2;
        }else if(size2=="Lage"){
            total=Number(qty2)*2.5;
        }

        txt=`
            <tr>
                <td>Green Tea</td>
                <td>${sugar2}</td>
                <td>${size2}</td>
                <td>${qty2}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update2">Update</button>
                <button class="btn btn-danger" id="btn-delete2">Cancel</button>
                </td>
            </tr>
        `;
        
        console.log(txt);
        $('tbody').append(txt);
        $('#sugar2').val('');
        $('#size2').val('');
        $('#qty2=').val('');
    });
    $('body').on('click','#btn-open-update2',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        var sugar2=$(this).parents("tr").find('td').eq(1).text();
        var size2=$(this).parents("tr").find('td').eq(2).text();
        var qty2=$(this).parents("tr").find('td').eq(3).text();

        console.log(row)
        $('#sugar2').val(sugar2);
        $('#size2').val(size2);
        $('#qty2').val(qty2);

        $('#btn-update2').click(function(){
            var new_sugar2=$('#sugar2').val();
            var new_size2=$('#size2').val();
            var new_qty2=$('#qty2').val();
            if(new_size2=="Small"){
                total=Number(new_qty2)*1.5;
            }else if(new_size2=="Medium"){
                total=Number(new_qty2)*2;
            }else if(new_size2=="Lage"){
                total=Number(new_qty2)*2.5;
            }
            txt=`
                <td>Green Tea</td>
                <td>${new_sugar2}</td>
                <td>${new_size2}</td>
                <td>${new_qty2}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update2">Update</button>
                <button class="btn btn-danger" id="btn-delete2">Cancel</button>
                </td>
            
        `;
            row.eq(index).html(txt);
            $('#sugar2').val('');
            $('#size2').val('');
            $('#qty2=').val('');
        });
    });
    $('body').on('click','#btn-delete2',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        row.eq(index).remove();
    });
    //2
    $('#btn-order3').click(function(){
        var sugar3=$('#sugar3').val();
        var size3=$('#size3').val();
        var qty3=$('#qty3').val();
        if(size3=="Small"){
            total=Number(qty3)*1.5;
        }else if(size3=="Medium"){
            total=Number(qty3)*2;
        }else if(size3=="Lage"){
            total=Number(qty3)*2.5;
        }

        txt=`
            <tr>
                <td>Passion</td>
                <td>${sugar3}</td>
                <td>${size3}</td>
                <td>${qty3}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update3">Update</button>
                <button class="btn btn-danger" id="btn-delete3">Cancel</button>
                </td>
            </tr>
        `;
        
        console.log(txt);
        $('tbody').append(txt);
        $('#sugar3').val('');
        $('#size3').val('');
        $('#qty3=').val('');
    });
    $('body').on('click','#btn-open-update3',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        var sugar3=$(this).parents("tr").find('td').eq(1).text();
        var size3=$(this).parents("tr").find('td').eq(2).text();
        var qty3=$(this).parents("tr").find('td').eq(3).text();

        console.log(row)
        $('#sugar3').val(sugar3);
        $('#size3').val(size3);
        $('#qty3').val(qty3);

        $('#btn-update3').click(function(){
            var new_sugar3=$('#sugar3').val();
            var new_size3=$('#size3').val();
            var new_qty3=$('#qty3').val();
            if(new_size3=="Small"){
                total=Number(new_qty3)*1.5;
            }else if(new_size3=="Medium"){
                total=Number(new_qty3)*2;
            }else if(new_size3=="Lage"){
                total=Number(new_qty3)*2.5;
            }
            txt=`
                <td>Passion</td>
                <td>${new_sugar3}</td>
                <td>${new_size3}</td>
                <td>${new_qty3}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update3">Update</button>
                <button class="btn btn-danger" id="btn-delete3">Cancel</button>
                </td>
            
        `;
            row.eq(index).html(txt);
            $('#sugar3').val('');
            $('#size3').val('');
            $('#qty3=').val('');
        });
    });
    $('body').on('click','#btn-delete3',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        row.eq(index).remove();
    });
    //3
    $('#btn-order4').click(function(){
        var sugar4=$('#sugar4').val();
        var size4=$('#size4').val();
        var qty4=$('#qty4').val();
        if(size4=="Small"){
            total=Number(qty4)*1.5;
        }else if(size4=="Medium"){
            total=Number(qty4)*2;
        }else if(size4=="Lage"){
            total=Number(qty4)*2.5;
        }

        txt=`
            <tr>
                <td>Black Coffe</td>
                <td>${sugar4}</td>
                <td>${size4}</td>
                <td>${qty4}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update4">Update</button>
                <button class="btn btn-danger" id="btn-delete4">Cancel</button>
                </td>
            </tr>
        `;
        
        console.log(txt);
        $('tbody').append(txt);
        $('#sugar4').val('');
        $('#size4').val('');
        $('#qty4=').val('');
    });
    $('body').on('click','#btn-open-update4',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        var sugar4=$(this).parents("tr").find('td').eq(1).text();
        var size4=$(this).parents("tr").find('td').eq(2).text();
        var qty4=$(this).parents("tr").find('td').eq(3).text();

        console.log(row)
        $('#sugar4').val(sugar4);
        $('#size4').val(size4);
        $('#qty4').val(qty4);

        $('#btn-update4').click(function(){
            var new_sugar4=$('#sugar4').val();
            var new_size4=$('#size4').val();
            var new_qty4=$('#qty4').val();
            if(new_size4=="Small"){
                total=Number(new_qty4)*1.5;
            }else if(new_size4=="Medium"){
                total=Number(new_qty4)*2;
            }else if(new_size4=="Lage"){
                total=Number(new_qty4)*2.5;
            }
            txt=`
                <td>Black Coffe</td>
                <td>${new_sugar4}</td>
                <td>${new_size4}</td>
                <td>${new_qty4}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update4">Update</button>
                <button class="btn btn-danger" id="btn-delete4">Cancel</button>
                </td>
            
        `;
            row.eq(index).html(txt);
            $('#sugar4').val('');
            $('#size4').val('');
            $('#qty4=').val('');
        });
    });
    $('body').on('click','#btn-delete4',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        row.eq(index).remove();
    });
    //4
    $('#btn-order5').click(function(){
        var sugar5=$('#sugar5').val();
        var size5=$('#size5').val();
        var qty5=$('#qty5').val();
        if(size5=="Small"){
            total=Number(qty5)*1.5;
        }else if(size5=="Medium"){
            total=Number(qty5)*2;
        }else if(size5=="Lage"){
            total=Number(qty5)*2.5;
        }

        txt=`
            <tr>
                <td>Iced Thnol Coffe</td>
                <td>${sugar5}</td>
                <td>${size5}</td>
                <td>${qty5}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update5">Update</button>
                <button class="btn btn-danger" id="btn-delete5">Cancel</button>
                </td>
            </tr>
        `;
        
        console.log(txt);
        $('tbody').append(txt);
        $('#sugar5').val('');
        $('#size5').val('');
        $('#qty5=').val('');
    });
    $('body').on('click','#btn-open-update5',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        var sugar5=$(this).parents("tr").find('td').eq(1).text();
        var size5=$(this).parents("tr").find('td').eq(2).text();
        var qty5=$(this).parents("tr").find('td').eq(3).text();

        console.log(row)
        $('#sugar5').val(sugar5);
        $('#size5').val(size5);
        $('#qty5').val(qty5);

        $('#btn-update5').click(function(){
            var new_sugar5=$('#sugar5').val();
            var new_size5=$('#size5').val();
            var new_qty5=$('#qty5').val();
            if(new_size5=="Small"){
                total=Number(new_qty5)*1.5;
            }else if(new_size5=="Medium"){
                total=Number(new_qty5)*2;
            }else if(new_size5=="Lage"){
                total=Number(new_qty5)*2.5;
            }
            txt=`
                <td>Iced Thnol Coffe</td>
                <td>${new_sugar5}</td>
                <td>${new_size5}</td>
                <td>${new_qty5}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update5">Update</button>
                <button class="btn btn-danger" id="btn-delete5">Cancel</button>
                </td>
            
        `;
            row.eq(index).html(txt);
            $('#sugar5').val('');
            $('#size5').val('');
            $('#qty5=').val('');
        });
    });
    $('body').on('click','#btn-delete5',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        row.eq(index).remove();
    });
    //5
    $('#btn-order6').click(function(){
        var sugar6=$('#sugar6').val();
        var size6=$('#size6').val();
        var qty6=$('#qty6').val();
        if(size6=="Small"){
            total=Number(qty6)*1.5;
        }else if(size6=="Medium"){
            total=Number(qty6)*2;
        }else if(size6=="Lage"){
            total=Number(qty6)*2.5;
        }

        txt=`
            <tr>
                <td>Arabica Latte/td>
                <td>${sugar6}</td>
                <td>${size6}</td>
                <td>${qty6}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update6">Update</button>
                <button class="btn btn-danger" id="btn-delete6">Cancel</button>
                </td>
            </tr>
        `;
        
        console.log(txt);
        $('tbody').append(txt);
        $('#sugar6').val('');
        $('#size6').val('');
        $('#qty6=').val('');
    });
    $('body').on('click','#btn-open-update6',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        var sugar6=$(this).parents("tr").find('td').eq(1).text();
        var size6=$(this).parents("tr").find('td').eq(2).text();
        var qty6=$(this).parents("tr").find('td').eq(3).text();

        console.log(row)
        $('#sugar6').val(sugar6);
        $('#size6').val(size6);
        $('#qty6').val(qty6);

        $('#btn-update6').click(function(){
            var new_sugar6=$('#sugar6').val();
            var new_size6=$('#size6').val();
            var new_qty6=$('#qty6').val();
            if(new_size6=="Small"){
                total=Number(new_qty6)*1.5;
            }else if(new_size6=="Medium"){
                total=Number(new_qty6)*2;
            }else if(new_size6=="Lage"){
                total=Number(new_qty6)*2.5;
            }
            txt=`
                <td>Arabica Latte</td>
                <td>${new_sugar6}</td>
                <td>${new_size6}</td>
                <td>${new_qty6}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update6">Update</button>
                <button class="btn btn-danger" id="btn-delete6">Cancel</button>
                </td>
            
        `;
            row.eq(index).html(txt);
            $('#sugar6').val('');
            $('#size6').val('');
            $('#qty6=').val('');
        });
    });
    $('body').on('click','#btn-delete6',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        row.eq(index).remove();
    });
    //6
    $('#btn-order7').click(function(){
        var sugar7=$('#sugar7').val();
        var size7=$('#size7').val();
        var qty7=$('#qty7').val();
        if(size7=="Small"){
            total=Number(qty7)*1.5;
        }else if(size7=="Medium"){
            total=Number(qty7)*2;
        }else if(size7=="Lage"){
            total=Number(qty7)*2.5;
        }

        txt=`
            <tr>
                <td>Honey Lime Tea</td>
                <td>${sugar7}</td>
                <td>${size7}</td>
                <td>${qty7}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update7">Update</button>
                <button class="btn btn-danger" id="btn-delete7">Cancel</button>
                </td>
            </tr>
        `;
        
        console.log(txt);
        $('tbody').append(txt);
        $('#sugar7').val('');
        $('#size7').val('');
        $('#qty7=').val('');
    });
    $('body').on('click','#btn-open-update7',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        var sugar7=$(this).parents("tr").find('td').eq(1).text();
        var size7=$(this).parents("tr").find('td').eq(2).text();
        var qty7=$(this).parents("tr").find('td').eq(3).text();

        console.log(row)
        $('#sugar7').val(sugar7);
        $('#size7').val(size7);
        $('#qty7').val(qty7);

        $('#btn-update7').click(function(){
            var new_sugar7=$('#sugar7').val();
            var new_size7=$('#size7').val();
            var new_qty7=$('#qty7').val();
            if(new_size7=="Small"){
                total=Number(new_qty7)*1.5;
            }else if(new_size7=="Medium"){
                total=Number(new_qty7)*2;
            }else if(new_size7=="Lage"){
                total=Number(new_qty7)*2.5;
            }
            txt=`
                <td>Honey Lime Tea</td>
                <td>${new_sugar7}</td>
                <td>${new_size7}</td>
                <td>${new_qty7}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update7">Update</button>
                <button class="btn btn-danger" id="btn-delete7">Cancel</button>
                </td>
            
        `;
            row.eq(index).html(txt);
            $('#sugar7').val('');
            $('#size7').val('');
            $('#qty7=').val('');
        });
    });
    $('body').on('click','#btn-delete7',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        row.eq(index).remove();
    });
    //7
    $('#btn-order8').click(function(){
        var sugar8=$('#sugar8').val();
        var size8=$('#size8').val();
        var qty8=$('#qty8').val();
        if(size8=="Small"){
            total=Number(qty8)*1.5;
        }else if(size8=="Medium"){
            total=Number(qty8)*2;
        }else if(size8=="Lage"){
            total=Number(qty8)*2.5;
        }

        txt=`
            <tr>
                <td>Lychee Tea</td>
                <td>${sugar8}</td>
                <td>${size8}</td>
                <td>${qty8}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update8">Update</button>
                <button class="btn btn-danger" id="btn-delete8">Cancel</button>
                </td>
            </tr>
        `;
        
        console.log(txt);
        $('tbody').append(txt);
        $('#sugar8').val('');
        $('#size8').val('');
        $('#qty8=').val('');
    });
    $('body').on('click','#btn-open-update8',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        var sugar8=$(this).parents("tr").find('td').eq(1).text();
        var size8=$(this).parents("tr").find('td').eq(2).text();
        var qty8=$(this).parents("tr").find('td').eq(3).text();

        console.log(row)
        $('#sugar8').val(sugar8);
        $('#size8').val(size8);
        $('#qty8').val(qty8);

        $('#btn-update8').click(function(){
            var new_sugar8=$('#sugar8').val();
            var new_size8=$('#size8').val();
            var new_qty8=$('#qty8').val();
            if(new_size8=="Small"){
                total=Number(new_qty8)*1.5;
            }else if(new_size8=="Medium"){
                total=Number(new_qty8)*2;
            }else if(new_size8=="Lage"){
                total=Number(new_qty8)*2.5;
            }
            txt=`
                <td>Lychee Tea</td>
                <td>${new_sugar8}</td>
                <td>${new_size8}</td>
                <td>${new_qty8}</td>
                <td>${total}</td>
                <td>
                <button class="btn btn-warning" id="btn-open-update8">Update</button>
                <button class="btn btn-danger" id="btn-delete8">Cancel</button>
                </td>
            
        `;
            row.eq(index).html(txt);
            $('#sugar8').val('');
            $('#size8').val('');
            $('#qty8=').val('');
        });
    });
    $('body').on('click','#btn-delete8',function(){
        index=$(this).parents('tr').index();
        var row=$('tbody').find('tr');
        row.eq(index).remove();
    });
});