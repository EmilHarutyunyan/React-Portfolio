const data = [
  {
    id: Math.random(),
    title: "converter-432hz",
    category: "advanced",
    img: "../assets/images/convert-432hz.png",
    url: "https://converter-432hz.netlify.app/",
  },
  // {
  //   id: Math.random(),
  //   title: "sunflix",
  //   category: "advanced",
  //   img: "../assets/images/sunflix.png",
  //   url: "https://sunflix.netlify.app/",
  // },
  // {
  //   id: 27,
  //   title: "sun ai",
  //   category: "advanced",
  //   img: "../assets/images/17-sun-ai.png",
  //   url: "https://sun-ai.netlify.app/",
  // },
  // {
  //   id: 26,
  //   title: "sun film",
  //   category: "advanced",
  //   img: "../assets/images/16-sun-film.png",
  //   url: "https://sunfilm.netlify.app",
  // },
  {
    id: 29,
    title: "Short Link",
    category: "advanced",
    img: "../assets/images/20-short-link.png",
    url: "https://react-short-link.netlify.app/",
  },
  {
    id: 28,
    title: "github users",
    category: "advanced",
    img: "../assets/images/19-github-users.png",
    url: "https://app-github-users.netlify.app/",
  },
  {
    id: 25,
    title: "flags app",
    category: "advanced",
    img: "../assets/images/18-flags-app.jpg",
    url: "https://flags-country.netlify.app/",
  },
  {
    id: 24,
    title: "quiz",
    category: "advanced",
    img: "../assets/images/23-quiz.png",
    url: "https://react-project-23-quiz.netlify.app/",
  },
  {
    id: 23,
    title: "cats category",
    category: "middle",
    img: "../assets/images/21-cat-category.png",
    url: "https://cats-category.netlify.app/",
  },
  {
    id: 22,
    title: "hacker news",
    category: "middle",
    img: "../assets/images/22-hacker-news.png",
    url: "https://react-app-22-hacker-news.netlify.app/",
  },
  {
    id: 21,
    title: "movies DB",
    category: "middle",
    img: "../assets/images/21-movies-db.png",
    url: "https://react-app-21-movie-db.netlify.app/",
  },
  {
    id: 20,
    title: "stock photos",
    category: "middle",
    img: "../assets/images/19-stock-photos.png",
    url: "https://react-app-19-stock-photos.netlify.app/",
  },
  {
    id: 19,
    title: "cocktails",
    category: "middle",
    img: "../assets/images/15-cocktails.png",
    url: "https://react-app-15-cocktails.netlify.app/",
  },
  {
    id: 18,
    title: "pagination",
    category: "middle",
    img: "../assets/images/18-pagination.png",
    url: "https://react-app-18-pagination.netlify.app/",
  },
  {
    id: 17,
    title: "random person",
    category: "middle",
    img: "../assets/images/17-random-person.png",
    url: "https://react-app-17-random-person.netlify.app/",
  },
  {
    id: 16,
    title: "cart",
    category: "middle",
    img: "../assets/images/14-cart.png",
    url: "https://react-app-14-cart.netlify.app/",
  },
  {
    id: 15,
    title: "markdown preview",
    category: "middle",
    img: "../assets/images/16-markdown-preview.png",
    url: "https://react-app-16-markdown-preview.netlify.app/",
  },
  {
    id: 14,
    title: "dark mode",
    category: "basic",
    img: "../assets/images/20-dark-mode.png",
    url: "https://react-app-20-dark-mode.netlify.app/",
  },
  {
    id: 13,
    title: "stripe menu",
    category: "basic",
    img: "../assets/images/13-stripe-submenus.png",
    url: "https://react-app-13-stripe-submenus.netlify.app/",
  },
  {
    id: 12,
    title: "slidebar and modal",
    category: "basic",
    img: "../assets/images/12-sidebar-modal.png",
    url: "https://react-app-12-sidebar-modal.netlify.app/",
  },
  {
    id: 11,
    title: "navbar",
    category: "basic",
    img: "../assets/images/11-navbar.png",
    url: "https://react-app-11-navbar.netlify.app/",
  },
  {
    id: 10,
    title: "grocery bud",
    category: "basic",
    img: "../assets/images/10-grocery-bud.png",
    url: "https://react-app-10-grocery-bud.netlify.app/",
  },
  {
    id: 9,
    title: "color generator",
    category: "basic",
    img: "../assets/images/09-color-generator.png",
    url: "https://react-app-09-color-generator.netlify.app/",
  },
  {
    id: 8,
    title: "lorem ipsum",
    category: "basic",
    price: 12.99,
    img: "../assets/images/08-lorem-ipsum.png",
    url: "https://react-app-08-lorem-ipsum.netlify.app/",
  },
  {
    id: 7,
    title: "slider",
    category: "basic",
    img: "../assets/images/07-slider.png",
    url: "https://react-app-07-slider.netlify.app/",
  },
  {
    id: 6,
    title: "tabs",
    category: "basic",
    img: "../assets/images/06-tabs.png",
    url: "https://react-app-06-tabs.netlify.app",
  },
  {
    id: 5,
    title: "menu",
    category: "basic",
    img: "../assets/images/05-menu.png",
    url: "https://react-app-05-menu.netlify.app/",
  },
  {
    id: 4,
    title: "accordion",
    category: "basic",
    img: "../assets/images/04-accordion.png",
    url: "https://react-app-04-accordion.netlify.app/",
  },
  {
    id: 3,
    title: "reviews",
    category: "basic",
    img: "../assets/images/03-reviews-Info-react-Icon.png",
    url: "https://react-app-03-reviews.netlify.app/",
  },
  {
    id: 2,
    title: "tours",
    category: "basic",
    img: "../assets/images/02-tours-fetch-data.png",
    url: "https://react-app-02-tours.netlify.app/",
  },
  {
    id: 1,
    title: "birthday reminder",
    category: "basic",
    img: "../assets/images/01-birthday-reminder.png",
    url: "https://react-app-01-birthday-reminder.netlify.app",
  },
];
export default data;
