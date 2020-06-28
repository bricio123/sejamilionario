
        setInterval(function () {

            let hora = document.getElementById("um");
            let minuto = document.getElementById("dois");
            let segundo = document.getElementById("tres");


            let novaHora = new Date();

            hora = novaHora.getHours();
            minuto = novaHora.getMinutes();
            segundo = novaHora.getSeconds();

            minuto = zero(minuto);
            segundo = zero(segundo);



            document.getElementById('um').textContent = hora + " horas";
            document.getElementById('dois').textContent = minuto + " minutos";
            document.getElementById('tres').textContent = segundo + " segundos";
        }, 1000)
        function zero(x) {
            if (x < 10) {
                x = '0' + x;
            } return x;
        }