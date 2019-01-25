// Fancy page loader

$('main').css('display', 'none');
$('main').css('opacity', 0);

setTimeout(() => {
  $('main')
    .css('display', 'block')
    .animate(
      {
        opacity: 1,
      },
      300
    );
}, 300);

$('.transition').click(function (event) {
  const addressValue = $(this).attr('href');
  $('main').animate(
    {
      opacity: 0,
    },
    300,
    () => {
      redirectPage(addressValue);
    }
  );
});

function redirectPage(addressValue) {
  document.location.href = addressValue;
}