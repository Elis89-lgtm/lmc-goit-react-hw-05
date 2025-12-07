import React from "react";
import { Link, useLocation } from "react-router-dom";
// Імпортуємо компонент Link для навігації та хук useLocation для доступу до поточного маршруту й його стану.
import css from "./ProductList.module.css";
// Підключаємо модульні стилі для цього компонента.

const ProductList = ({ products }) => {
  // Оголошуємо компонент ProductList, який приймає проп products — масив товарів.
  const location = useLocation();
  // Отримуємо об’єкт поточного маршруту, щоб передати його як state у лінки. Це дозволяє знати, звідки користувач перейшов.

  return (
    <div className={css.container}>
      {/* Рендеримо контейнер списку товарів. */}
      {products.map((product) => (
        // Ітеруємо масив products і для кожного елемента створюємо картку товару.
        <div key={product.id} className={css.cardWrapper}>
          {/* Створюємо обгортку елемента з унікальним ключем. */}
          <Link to={`${product.id}`} state={location}>
            {/* Створюємо посилання на сторінку товару. */}
            {/* Навігація відбувається за відносним шляхом product.id, а поточний location передається в state, щоб сторінка деталей могла знати, з якого маршруту користувач прийшов. */}
            <img src="https://placehold.co/200x100" alt="" />
            <h3 className={css.productName}>{product.name}</h3>
            {/* Відображаємо картинку-заглушку і назву товару. */}
          </Link>
          {/* Закриваємо всі елементи та повертаємо готовий список. */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
