var producti;

        var product1 = 2;
        var product2 = 8;
        var product3 = 4;

        var product4 = 20;
        var product5 = 10;
        var product6 = 10;

        var product7 = 5;
        var product8 = 6;
        var product9 = 2;


        function multiply1(){
            var quantity1 = Number(document.getElementById("quantity1").value);
            var sum;
            sum = product1*quantity1
            return sum;
            
        }

        function multiply2(){
            var quantity2 = Number(document.getElementById("quantity2").value);
            var sum;
            sum = product2*quantity2
            return sum;
        }

        function multiply3(){
            var quantity3 = Number(document.getElementById("quantity3").value);
            var sum;
            sum = product3*quantity3
            return sum;
        }

        function multiply4(){
            var quantity4 = Number(document.getElementById("quantity4").value);
            var sum;
            sum = product4*quantity4
            return sum;
        }

        function multiply5(){
            var quantity5 = Number(document.getElementById("quantity5").value);
            var sum;
            sum = product5*quantity5
            return sum;
        }

        function multiply6(){
            var quantity6 = Number(document.getElementById("quantity6").value);
            var sum;
            sum = product6*quantity6
            return sum;
        }

        function multiply7(){
            var quantity7 = Number(document.getElementById("quantity7").value);
            var sum;
            sum = product7*quantity7
            return sum;
        }

        function multiply8(){
            var quantity8 = Number(document.getElementById("quantity8").value);
            var sum;
            sum = product8*quantity8
            return sum;
        }

        function multiply9(){
            var quantity9 = Number(document.getElementById("quantity9").value);
            var sum;
            sum = product9*quantity9
            return sum;
        }

        function total(){
            let sum1 = Number(document.getElementById("columnPrice1").innerHTML);
            let sum2 = Number(document.getElementById("columnPrice2").innerHTML);
            let sum3 = Number(document.getElementById("columnPrice3").innerHTML);
            let sum4 = Number(document.getElementById("columnPrice4").innerHTML);
            let sum5 = Number(document.getElementById("columnPrice5").innerHTML);
            let sum6 = Number(document.getElementById("columnPrice6").innerHTML);
            let sum7 = Number(document.getElementById("columnPrice7").innerHTML);
            let sum8 = Number(document.getElementById("columnPrice8").innerHTML);
            let sum9 = Number(document.getElementById("columnPrice9").innerHTML);

            var total;

            total = sum1 + sum2 + sum3 +sum4 +sum5 +sum6 +sum7 +sum8 +sum9;
            document.getElementById("paragraphFinal").innerHTML = "Σύνολο " + total + "€";
            return total;
            
        }
            
    
    


        $(document).ready(

                    
            function(){

                

                $("#startcard").hide(); 
                $("#maincard").hide();
                $("#drinkcard").hide();
                $("#product1").hide();
                $("#product2").hide();
                $("#product3").hide();
                $("#product4").hide();
                $("#product5").hide();
                $("#product6").hide();
                $("#product7").hide();
                $("#product8").hide();
                $("#product9").hide();
                $("#quantity1Field").hide();
                $("#quantity2Field").hide();
                $("#quantity3Field").hide();
                $("#quantity4Field").hide();
                $("#quantity5Field").hide();
                $("#quantity6Field").hide();
                $("#quantity7Field").hide();
                $("#quantity8Field").hide();
                $("#quantity9Field").hide();
                $("#columnPrice1").hide();
                $("#columnPrice2").hide();
                $("#columnPrice3").hide();
                $("#columnPrice4").hide();
                $("#columnPrice5").hide();
                $("#columnPrice6").hide();
                $("#columnPrice7").hide();
                $("#columnPrice8").hide();
                $("#columnPrice9").hide();

                $("#totalField1").hide();
                $("#totalField2").hide();
                $("#send").hide();

                $("#totalField1").click(             
                function(){           
                    $("#totalField2").text(total());
                    $("#totalField2").show();
                    
                    
                })

                $("#inlineFormCustomSelect").click(
                    function(){

                        $("#totalField1").show();
                        $("#totalField2").show();
                        $("#send").show();

                    }
                )
                  
            
                $("#start").click(                    
                function(){           
                    $("#startcard").fadeIn(); 
                    $("#maincard").hide();
                    $("#drinkcard").hide();                  
                })
                
                
                $("#main").click(                    
                function(){           
                    $("#startcard").hide(); 
                    $("#maincard").fadeIn();
                    $("#drinkcard").hide();                  
                })

                $("#drinks").click(                    
                function(){           
                    $("#startcard").hide(); 
                    $("#maincard").hide();
                    $("#drinkcard").fadeIn();                  
                })

                

                $("#startcard1").click(             
                function(){           
                    $("#product1").fadeIn('slow');
                    $("#quantity1Field").fadeIn('slow');
                    
                    $("#columnPrice1").fadeIn('slow');
                    $("#button1").click(
                    function(){
                        $("#columnPrice1").text(multiply1());
                        $("#columnPrice1").show();
                     
                    })
                })

           
                $("#startcard2").click(                    
                function(){           
                    $("#product2").fadeIn('slow');
                    $("#quantity2Field").fadeIn('slow');

                    $("#columnPrice2").fadeIn('slow');
                    $("#button2").click(
                    function(){
                        $("#columnPrice2").text(multiply2());
                        $("#columnPrice2").show();
                    
                    })                    
                })


                $("#startcard3").click(                    
                function(){           
                    $("#product3").fadeIn('slow'); 
                    $("#quantity3Field").fadeIn('slow');
                    
                    $("#columnPrice3").fadeIn('slow');
                    $("#button3").click(
                    function(){
                        $("#columnPrice3").text(multiply3());
                        $("#columnPrice3").show();
                    
                    })   
                })


                $("#maincard1").click(                    
                function(){           
                    $("#product4").fadeIn('slow'); 
                    $("#quantity4Field").fadeIn('slow');
                 
                    $("#columnPrice4").fadeIn('slow');
                    $("#button4").click(
                    function(){
                        $("#columnPrice4").text(multiply4());
                        $("#columnPrice4").show();
                    
                    })   
                })

                $("#maincard2").click(                    
                function(){           
                    $("#product5").fadeIn('slow'); 
                    $("#quantity5Field").fadeIn('slow');
                    
                    $("#columnPrice5").fadeIn('slow');
                    $("#button5").click(
                    function(){
                        $("#columnPrice5").text(multiply5());
                        $("#columnPrice5").show();
                    
                    })   
                })

                $("#maincard3").click(                    
                function(){           
                    $("#product6").fadeIn('slow'); 
                    $("#quantity6Field").fadeIn('slow');
                    
                    $("#columnPrice6").fadeIn('slow');
                    $("#button6").click(
                    function(){
                        $("#columnPrice6").text(multiply6());
                        $("#columnPrice6").show();
                    
                    })   
                })

                $("#drinkcard1").click(                    
                function(){           
                    $("#product7").fadeIn('slow'); 
                    $("#quantity7Field").fadeIn('slow');
                    
                    $("#columnPrice7").fadeIn('slow');
                    $("#button7").click(
                    function(){
                        $("#columnPrice7").text(multiply7());
                        $("#columnPrice7").show();
                    
                    })   
                })

                $("#drinkcard2").click(                    
                function(){           
                    $("#product8").fadeIn('slow'); 
                    $("#quantity8Field").fadeIn('slow');
                    
                    $("#columnPrice8").fadeIn('slow');
                    $("#button8").click(
                    function(){
                        $("#columnPrice8").text(multiply8());
                        $("#columnPrice8").show();
                    
                    })   
                })

                $("#drinkcard3").click(                    
                function(){           
                    $("#product9").fadeIn('slow'); 
                    $("#quantity9Field").fadeIn('slow');
                    
                    $("#columnPrice9").fadeIn('slow');
                    $("#button9").click(
                    function(){
                        $("#columnPrice9").text(multiply9());
                        $("#columnPrice9").show();
                    
                    })   
                })

            } 
        )