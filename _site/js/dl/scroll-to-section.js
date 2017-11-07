// *** scroll to section
window.addEventListener("load", function() {
//pobieram anchory z kotwicą
var menuAnchors = document.querySelectorAll('a[href^="#"]');
for (var i = 0; i < menuAnchors.length; i++) {
  menuAnchors[i].addEventListener('click', function (event) {
// wykrycie IE
  var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
  if (isIE) {
   event.returnValue = false; 
  }
  else {
   event.preventDefault();
  }
//po kliknięciu konkretnego anchora definiuję sekcję mu odpowiadającą
    var target = this.getAttribute('href').slice(1),
        section = document.getElementById(target),
//definiuję wysokość początkową sekcji w dokumencie
        sectionPosition = section.offsetTop,
//oraz wysokość okna
        windowPosition = window.scrollY,
        difference = windowPosition - sectionPosition;
//chyba nie wygląda to dobrze, ale niby działa. Przemyśleć sprawę i zrobić
//to prościej(?)

//jeśli pozycja okna jest większa niż sekcji to wykonajmy funkcję scrollToSectionUp
    if (windowPosition > sectionPosition) {
      function scrollToSectionUp(duration) {
//definiuję czas intervału do setInterval (1/100 sekundy)
        var intervalValue = 10;
//poniżej (step) definiuję odległość o jaką będzie się przesuwało okno
//np. różnica między pozycją okna a sekcji wynosi 650px. Czas trwania animacji to
//3/4 sekundy (750ms). Zdefiniowany intervalValue to 10. Czyli krok wychodzi nam:
//-650 / (750/10) = -650 / 75 = -8,(66).
//problemem jest to, że step posiada wartość po przecinku, a pozycje okna / sekcji
//w px nie. W tym przypadku będziemy scrollować co 7px (przeglądarka zaokrągla wartość)
//i najprawdopodobniej zdarzy się tak, że scrollując okno co 7px nie natrafimy idealnie
//w wartość wysokości sekcji, przez co funkcja nie będzie potrafiła się zatrzymać.
//dlatego rozbiłem scrollowanie na Up oraz Down, używając tam: else if i operatora: <=
        var step = -difference / (duration / intervalValue);
//rozpoczynam funkcję. Jeśli pozycja okna jest większa niż sekcji to będziemy
//scrollować okno o zdefiniowany wcześniej krok co 1/100 sekundy, dopóki nie
//wyczycimy Intervalu
        scrollInterval = setInterval(function(){
          if (window.scrollY > sectionPosition) {
            window.scrollBy(0, step);
          }
//tu w else if nie mogę dać windowPosition tylko window.scrollY
//do końca nie wiem dlaczego, ale chyba dlatego, że windowPosition deklaruję po
//kliknięciu elementu menu, a window.scrollY za każdym intervalem funkcji
//------------------------------------------------------------------------------
//jeśli pozycja okna zrówna się z pozycją sekcji (tzn. trafimy idealnie wartości
//co raczej się nie zdarzy - pisałem wyżej) lub pozycja okna zmniejszy się
//(chociaż o 1px) od pozycji sekcji, to czyścimy Interval i okno się zatrzymuje
          else if (window.scrollY <= sectionPosition) {
            clearInterval(scrollInterval);
          }
        }, intervalValue);
      }
//wywołuję funkcję
      scrollToSectionUp(750);
    }

//jeśli pozycja okna jest mniejsza niż sekcji to wykonajmy funkcję scrollToSectionDown
    else if (windowPosition < sectionPosition) {
      function scrollToSectionDown(duration) {
        var intervalValue = 10;
        var step = -difference / (duration / intervalValue);
        scrollInterval = setInterval(function(){
//jeśli pozycja okna jest < pozycja sekcji, to przewijaj w dół
          if (window.scrollY < sectionPosition) {
            window.scrollBy(0, step);
//jeśli pozycja okna jest >= wysokość dokumentu - wysokość okna, to przerwij fukncję
            if (window.scrollY >= document.body.offsetHeight - window.innerHeight) {
              clearInterval(scrollInterval);
            }
          }
//jeśli pozycja okna jest >= pozycji sekcji, to przerwij funkcję
          else if (window.scrollY >= sectionPosition) {
            clearInterval(scrollInterval);
          }
        }, intervalValue);
      }
    scrollToSectionDown(750);
    }
  }, false);
}
});
