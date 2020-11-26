// Global var for author
var author = "Marko Vihoma";

// Print page description
function pagename() {
  var url = window.location.pathname;
  var file = url.substring(url.lastIndexOf('/') + 1);

  switch(file) {
    case "code.html":
      print("Code");
      break;
    case "contact.html":
      print("Contact");
      break;
    case "hobbies.html":
      print("Hobbies");
      break;
    case "images.html":
      print("Images");
      break;
    case "index.html":
      print("Frontpage");
      break;
    case "links.html":
      print("Links");
      break;
    case "sohron.html":
      print("Nick");
      break;
    case "studies.html":
      print("Studies");
      break;
    default:
      print("Error 404 Not Found");
  }
}

// Print Document Copyright &copy; year based on document last modified
function copyright() {
  var date = document.lastModified;
  print("&copy; ", date, " ", author, " ");
}

// Output on every page below <!DOCTYPE...>
function head() {
  <!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
  <!--[if IE 7]>   <html class="no-js lt-ie9 lt-ie8"><![endif]-->
  <!--[if IE 8]>   <html class="no-js lt-ie9"><![endif]-->
  <!--[if gt IE 8]><!-->
  <html lang="en" class="no-js">
    <!--<![endif]-->
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="viewport" content="width=device-width, initial-scale=1,
      minimum-scale=1, maximum-scale=1">
      <meta name="generator" content="Komodo Edit, Vim">
      <meta name="keywords" content="Programming, Computers, Personal Information,
      Computer Science, Photography">
      <title>Marko Vihomas Homepage
        <scripttype="text/javascript">printpage();</script>
      </title>
    </head>
  <link rel="apple-touch-icon"
    href="images/apple-icons/apple-touch-icon-precomposed.png">
  <link rel="apple-touch-icon" sizes="57x57"
    href="images/apple-icons/apple-touch-icon-57x57-precomposed.png">
  <link rel="apple-touch-icon" sizes="72x72"
    href="images/apple-icons/apple-touch-icon-72x72-precomposed.png">
  <link rel="apple-touch-icon" sizes="114x114"
    href="images/apple-icons/apple-touch-icon-114x114-precomposed.png">
  <link rel="apple-touch-icon" sizes="144x144"
    href="images/apple-icons/apple-touch-icon-144x144-precomposed.png">
  <meta name="msapplication-TileImage"
    content="images/apple-icons/apple-touch-icon-144x144-precomposed.png">
  <meta name="msapplication-TileColor" content="#FFFFFF">
  <!-- Modernizr -->
  <script type="text/javascript" src="js/libs/modernizr-2.6.2.min.js"></script>
  <!-- jQuery -->
  <script type="text/javascript" src="js/libs/jquery-1.8.2.min.js"></script>
  <!-- framework css -->
  <link type="text/css" rel="stylesheet" href="css/groundwork.css">
  <link type="text/css" rel="stylesheet" href="css/style_own.css">
  <!--<link rel="stylesheet" type="text/css"
    href="http://fonts.googleapis.com/css?family=Metal+Mania">-->
  <!--[if IE]>
    <link type="text/css" rel="stylesheet" href="css/groundwork-ie.css">
  <![endif]-->
  <!--[if lt IE 9]>
    <script type="text/javascript" src="js/libs/html5shiv.min.js"></script>
  <![endif]-->
  <!--[if IE 7]>
    <link type="text/css" rel="stylesheet" href="css/font-awesome-ie7.min.css">
  <![endif]-->
  <script type="text/javascript">
     // extend Modernizr to have datauri test
    (function(){
      var datauri = new Image();
      datauri.onerror = function() {
        Modernizr.addTest('datauri', function () { return false; });
      };
      datauri.onload = function() {
        Modernizr.addTest('datauri', function () {
      return (datauri.width == 1 && datauri.height == 1); });
        Modernizr.load({
          test: Modernizr.datauri,
          nope: 'css/no-datauri.css'
        });
      };
      datauri.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    })();
    // fallback if SVG unsupported
    Modernizr.load({
      test: Modernizr.inlinesvg,
      nope: [
        'css/no-svg.css'
      ]
    });
    // polyfill for HTML5 placeholders
    Modernizr.load({
      test: Modernizr.input.placeholder,
      nope: [
        'css/placeholder_polyfill.css',
        'js/libs/placeholder_polyfill.jquery.js'
      ]
    });
  </script>
  <body>
  <header class="white band padded">
    <div class="container">
      <h1 id="bpdots">Marko Vihomas Homepage / <script type="text/javascript">pagename();</script></h1>
      <nav class="inline gap-top">
        <ul>
          <li>
            <a href="index.html"><i class="icon-home"></i></a>
          </li>
          <li>
            <a href="studies.html">Studies</a>
          </li>
          <li>
            <a href="hobbies.html">Hobbies</a>
          </li>
          <li>
            <a href="images.html">Images</a>
          </li>
          <li>
            <a href="code.html">Code</a>
          </li>
          <li>
            <a href="links.html">Links</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li>
            <a href="sohron.html">My Nick</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="container">
    <article class="row">
      <img align="right" src="images/mangaramblo.jpg"
        alt="MangaRamblo, armed OpenBSD blowfish" class="ramblo">
<section class="three fourths padded">
}

// Output below page content just above </html>
function foot() {
</section>
</article>
<!-- scripts-->
<script type="text/javascript" src="js/plugins/jquery.cycle2.js"></script>
<script type="text/javascript" src="js/groundwork.all.js"></script>
</div>
</body>
<footer class="footer align-left">
<p>
  <a href="http://www.w3.org/html/logo/">
    <img src="http://www.w3.org/html/logo/badge/html5-badge-h-css3-graphics-semantics.png" class="html5" alt="HTML5 Powered with CSS3 / Styling, Graphics, 3D &amp; Effects, and Semantics"
    title="HTML5 Powered with CSS3 / Styling, Graphics, 3D &amp; Effects, and Semantics"
    alt="HTML5 Powered with CSS3">
  </a>
  <a href="http://fi.linkedin.com/pub/marko-vihoma/6a/72a/404">
    <img src="https://static.licdn.com/scds/common/u/img/webpromo/btn_viewmy_160x33.png" width="160" height="33" border="0" alt="View Marko Vihoma's profile on LinkedIn"></a>
</p>
<p><script type="text/javascript">copyright();</script>. &copy; Gary Hepting for GroundworkCSS,
<a href="mailto:groundwork@sidereel.com">give him a shout</a> if you find
GroundworkCSS extremely useful!</p>
</footer>
}
