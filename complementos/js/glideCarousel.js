new Glide('.glide', {
  type: 'carousel',
  startAt: 1,
  focusAt: 'center',
  perView: 4,
    peek: {
    before: 0,
    after: 150,
    gap: 400,
  },
  breakpoints: {
    1080: {
      perView: 3
    },
    900: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
}).mount();