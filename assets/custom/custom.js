
//edit
window.onload = function() {
    var anchors = document.querySelectorAll('a[href*="mybinder.org"]');
    Array.prototype.forEach.call(anchors, function (element, index) {
        element.href.replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub.ung.edu/hub/user-redirect/git-sync?repo=https://github.com/ipydatabook/ipydatabook.github.io&subPath=");
        var newhref = (element.href).replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub.ung.edu/hub/user-redirect/git-sync?repo=https://github.com/ipydatabook/ipydatabook.github.io&subPath=");
        element.href = newhref;
 
   });
}

window.addEventListener('load', function () {
    var anchors = document.querySelectorAll('a[href*="mybinder.org"]');
    Array.prototype.forEach.call(anchors, function (element, index) {
        element.href.replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub.ung.edu/hub/user-redirect/git-sync?repo=https://github.com/ipydatabook/ipydatabook.github.io&subPath=");
        var newhref = (element.href).replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub.ung.edu/hub/user-redirect/git-sync?repo=https://github.com/ipydatabook/ipydatabook.github.io&subPath=");
        element.href = newhref;
    });
  })

  window.addEventListener('click', function () {
    var anchors = document.querySelectorAll('a[href*="mybinder.org"]');
    Array.prototype.forEach.call(anchors, function (element, index) {
        element.href.replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub.ung.edu/hub/user-redirect/git-sync?repo=https://github.com/ipydatabook/ipydatabook.github.io&subPath=");
        var newhref = (element.href).replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub.ung.edu/hub/user-redirect/git-sync?repo=https://github.com/ipydatabook/ipydatabook.github.io&subPath=");
        element.href = newhref;
    });
  })

  window.addEventListener('loadend', function () {
    var anchors = document.querySelectorAll('a[href*="mybinder.org"]');
    Array.prototype.forEach.call(anchors, function (element, index) {
        element.href.replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub.ung.edu/hub/user-redirect/git-sync?repo=https://github.com/ipydatabook/ipydatabook.github.io&subPath=");
        var newhref = (element.href).replace("https://mybinder.org/v2/gh/data-8/textbook/gh-pages?filepath=", "https://datahub.ung.edu/hub/user-redirect/git-sync?repo=https://github.com/ipydatabook/ipydatabook.github.io&subPath=");
        element.href = newhref;
    });
  })