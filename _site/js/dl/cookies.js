// wartości dla cookie
var cookieName = 'DamianPortfolio',//nazwa cookie
    cookieValue = 'damianlewandowski.pl',//wartość cookie
    days = 180,//dni życia cookie, po których zostanie usunięte
    cookieDomain = 'domain=.damianlewandowski.pl',//domena dla cookie
    cookiePath = 'path=/';//path cookie

//funkcja tworząca cookie
function createCookie(cookieName, cookieValue, days, cookieDomain, cookiePath) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var cookieExpires = 'expires=' + date.toGMTString();
  }
  else {
    var cookieExpires  = '';
  }
  document.cookie = cookieName + '=' + cookieValue + '; ' + cookieExpires + '; ' + cookieDomain + '; ' + cookiePath;
}

//funkcja tworząca baner z informacją o cookies
function createCookieInfo() {
  var cookieInfo = document.createElement('div'),
      paragraph = document.createElement('p'),
      cookieInfoCloseBtn = document.createElement('button');

  cookieInfo.classList.add('cookie-info');
  cookieInfoCloseBtn.classList.add('btn', 'cookieBtn')
  paragraph.innerHTML = "Ta strona wykorzystuje ciasteczka, czyli tzw. cookies. Zostałeś o tym poinformowany, więc teraz spokojnie możesz zamknąć ten baner przyciskiem.";
  cookieInfoCloseBtn.innerHTML = "Dzięki za info"
  cookieInfo.appendChild(paragraph);
  cookieInfo.appendChild(cookieInfoCloseBtn);
  document.body.appendChild(cookieInfo);
//usuwanie baneru po kliknięciu
    cookieInfoCloseBtn.addEventListener('click', function() {
      document.body.removeChild(cookieInfo);
//utworzenie ciasteczka po zamknięciu baneru przyciskiem
      createCookie(cookieName, cookieValue, days, cookieDomain, cookiePath);
    }, false);
}

//sprawdzenie, czy cookie istnieje
  if (document.cookie.indexOf(cookieName) > -1 ) {
  }
  else {
    createCookieInfo();
  }
