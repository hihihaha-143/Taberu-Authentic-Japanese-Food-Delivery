function app() {
  return {
    init() {
      console.log("Taberu app initialized with Alpine.js");
    },
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    alert(msg) {
      window.alert(msg);
    },
  };
}

function menuSlider() {
  return {
    filter: "all",
    currentIndex: 0,
    items: [
      {
        name: "Amachi",
        price: "12.00",
        items: 5,
        category: "sushi",
        image:
          "https://i.pinimg.com/736x/80/b8/83/80b8834b240c84df9d89adacb5742f42.jpg",
      },
      {
        name: "Tonkotsu Ramen",
        price: "23.00",
        items: 11,
        category: "ramen",
        image:
          "https://i.pinimg.com/1200x/97/67/8a/97678a9a2e66f240ddbb0d9738e70174.jpg",
      },
      {
        name: "Oshizushi",
        price: "14.00",
        items: 8,
        category: "sushi",
        image:
          "https://i.pinimg.com/736x/de/d9/22/ded92229303abe27d8b8e4b52782bf1c.jpg",
      },
      {
        name: "Sashimi Mix",
        price: "28.00",
        items: 15,
        category: "sashimi",
        image:
          "https://i.pinimg.com/736x/be/75/52/be75525ab6af621229bab874fee1c4e5.jpg",
      },
      {
        name: "Tempura Udon",
        price: "18.00",
        items: 7,
        category: "udon",
        image:
          "https://i.pinimg.com/736x/da/85/e7/da85e79e337ac6c2f5bae69ba2a490be.jpg",
      },
      {
        name: "Onigiri Set",
        price: "10.00",
        items: 4,
        category: "others",
        image:
          "https://i.pinimg.com/736x/96/68/1d/96681d3c17fe3007a4be195f6a61f9e2.jpg",
      },
    ],
    get filteredItems() {
      if (this.filter === "all") {
        return this.items;
      }
      return this.items.filter((item) => item.category === this.filter);
    },
    next() {
      if (this.currentIndex < this.filteredItems.length - 1) {
        this.currentIndex++;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  };
}

function newsletterForm() {
  return {
    email: "",
    loading: false,
    success: false,
    error: false,
    successMessage: "Спасибо за подписку! Проверьте почту для подтверждения.",
    errorMessage: "Пожалуйста, введите корректный email адрес.",
    subscribe() {
      this.error = false;
      this.success = false;

      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(this.email)) {
        this.error = true;
        this.errorMessage = "Пожалуйста, введите корректный email адрес.";
        return;
      }

      this.loading = true;

      // Имитация запроса к серверу
      setTimeout(() => {
        this.loading = false;
        this.success = true;
        this.successMessage = `Спасибо! Письмо отправлено на ${this.email}`;
        this.email = "";

        setTimeout(() => {
          this.success = false;
        }, 5000);
      }, 1500);
    },
  };
}
