export default {
  updated(el, binding) {
    console.log(el, binding);
    //Слежение за текущей границей постов для бесконечной подгрузки
    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 1.0
    };

    //Без использования стрелочной ф-ции происходит потеря контекста
    //и метод loadMorePosts() становится недоступным
    const callback = (entries, observer) => {
      //Контроль за моментом появления div observer в области видимости
      //Чтобы callback не вызывалась  при выходе div observer за пределы видимости
      //а также при исчерпании данных на сервере
      //if (entries[0].isIntersecting && this.page < this.totalPages) {
      if (entries[0].isIntersecting) {
        // this.loadMorePosts();
        //Вызов функции, полученной в качестве параметра
        binding.value();
        console.log("Is called!");
      }
    };
    const observer = new IntersectionObserver(callback, options);
    //Указываю элемент, за появлением которого нужно следить
    //observer.observe(this.$refs.observer);
    observer.observe(el);
  }
};
