// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-KGLV1576M0');

// Event snippet for Rota conversion page
gtag('event', 'conversion', { 'send_to': 'AW-862283090/e01VCKSky40ZENLKlZsD' });

// Event snippet for FinalizaçãoDeCompra conversion page
gtag('event', 'conversion', { 'send_to': 'AW-862283090/iFwVCPnRko0ZENLKlZsD' });

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KGLV1576M0"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KGLV1576M0');
</script>

// Melhoria na interação usando JavaScript
// Função para ação de compra
function comprar() {
    // Código para a ação de compra (pode ser adicionado aqui)

    // Redirecionamento para o novo link da Eduzz
    window.location.href = "https://bit.ly/VendasEm48H";
}

// Função para relatar a conversão ao clicar no botão de compra
function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-862283090/iFwVCPnRko0ZENLKlZsD',
        'event_callback': callback
    });
    return false;
}

// Adicione o script para Google AdSense
// Note: Este script já está incluído no HTML, este bloco apenas ilustra a referência ao AdSense
// Certifique-se de configurar o AdSense corretamente para o seu caso
// Código do AdSense:
// <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9013233807727287" crossorigin="anonymous"></script>